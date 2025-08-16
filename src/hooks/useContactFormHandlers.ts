import { useEffect, useRef, useState } from "react";
import { closeForm, setStatus } from "../features/contactForm/contactFormSlice";
import { useSendEmail } from "./useSendEmail";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import ReCAPTCHA from "react-google-recaptcha";

export const useContactFormHandlers = () => {
  const dispatch = useAppDispatch();
  const { sendEmail } = useSendEmail();

  const formRef = useRef<HTMLFormElement>(null);
  const feedbackRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [startTime, setStartTime] = useState<number>(Date.now());
  const isOpen = useAppSelector((state) => state.contactForm.isOpen);

  useEffect(() => {
    if (isOpen) setStartTime(Date.now());
  }, [isOpen]);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Honeypot check
    const honeypot = (
      form.querySelector("input[name='refcode']") as HTMLInputElement
    )?.value;
    if (honeypot) {
      console.warn("Bloqueado por honeypot");
      return;
    }

    // Tiempo mínimo
    const elapsed = Date.now() - startTime;
    if (elapsed < 10000) {
      console.warn("Formulario enviado demasiado rápido");
      return;
    }

    feedbackRef.current?.classList.remove("formStatusOff");
    feedbackRef.current?.classList.add("formStatusOn");
    buttonRef.current?.setAttribute("disabled", "true");

    // reCaptcha
    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
      console.log("error recaptcha");
      return;
    }

    sendEmail(
      form,
      () => {
        iconRef.current?.classList.remove("bx-mail-send", "bx-flashing");
        iconRef.current?.classList.add("bx-check");
        form.reset();
      },
      () => {
        iconRef.current?.classList.remove("bx-mail-send", "bx-flashing");
        iconRef.current?.classList.add("bx-error-circle");
        buttonRef.current?.removeAttribute("disabled");
      },
      token 
    );
  };

  const handleCloseForm = () => {
    dispatch(closeForm());
    dispatch(setStatus("sending"));
    feedbackRef.current?.classList.remove("formStatusOn");
    feedbackRef.current?.classList.add("formStatusOff");
    buttonRef.current?.removeAttribute("disabled");
    iconRef.current?.classList.remove("bx-check", "bx-error-circle");
    iconRef.current?.classList.add("bx-mail-send", "bx-flashing");
    formRef.current?.reset();
    setStartTime(Date.now());
  };

  return {
    formRef,
    feedbackRef,
    buttonRef,
    iconRef,
    recaptchaRef,
    handleSendEmail,
    handleCloseForm,
  };
};