import { useRef } from "react";
import { closeForm, setStatus } from "../features/contactForm/contactFormSlice";
import { useSendEmail } from "./useSendEmail";
import { useAppDispatch } from "./useAppDispatch";

export const useContactFormHandlers = () => {
  const dispatch = useAppDispatch();
  const { sendEmail } = useSendEmail();

  const formRef = useRef<HTMLFormElement>(null);
  const feedbackRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLElement>(null);

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const honeypot = (
      form.querySelector('[name="subject"]') as HTMLInputElement
    )?.value;
    const timestamp = parseInt(
      (form.querySelector('[name="timestamp"]') as HTMLInputElement)?.value ||
        "0"
    );
    if (honeypot || Date.now() - timestamp < 3000) return;

    feedbackRef.current?.classList.remove("formStatusOff");
    feedbackRef.current?.classList.add("formStatusOn");
    buttonRef.current?.setAttribute("disabled", "true");

    // Ejecutar reCAPTCHA invisible manualmente
    if (window.grecaptcha) {
      window.grecaptcha
        .execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: "submit" })
        .then((token: string) => {
          // Insertar el token en el input oculto
          const recaptchaInput = form.querySelector<HTMLInputElement>(
            'input[name="g-recaptcha-response"]'
          );
          if (recaptchaInput) recaptchaInput.value = token;

          // Enviar el formulario con EmailJS
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
            }
          );
        });
    } else {
      console.error("reCAPTCHA no está disponible.");
      buttonRef.current?.removeAttribute("disabled");
    }
  };

  const handleCloseForm = () => {
    dispatch(closeForm());
    dispatch(setStatus("sending"));
    feedbackRef.current?.classList.remove("formStatusOn");
    feedbackRef.current?.classList.add("formStatusOff");
    buttonRef.current?.removeAttribute("disabled");
    iconRef.current?.classList.remove("bx-check", "bx-error-circle");
    iconRef.current?.classList.add("bx-mail-send", "bx-flashing");
  };

  return {
    formRef,
    feedbackRef,
    buttonRef,
    iconRef,
    handleSendEmail,
    handleCloseForm,
  };
};
