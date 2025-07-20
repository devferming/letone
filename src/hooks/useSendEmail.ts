import { useAppDispatch } from "./useAppDispatch";
import emailjs from "@emailjs/browser";
import { setStatus } from "../features/contactForm/contactFormSlice";

export const useSendEmail = () => {
  const dispatch = useAppDispatch();

  const sendEmail = async (
    formEl: HTMLFormElement,
    onSuccess: () => void,
    onError: () => void,
    captchaToken: string
  ) => {
    try {
      dispatch(setStatus("sending"));

      // Obtén los datos del formulario
      const formData = new FormData(formEl);
      const templateParams: Record<string, string> = {};
      formData.forEach((value, key) => {
        templateParams[key] = String(value);
      });

      // Agrega el token captcha
      templateParams["g-recaptcha-response"] = captchaToken;

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: templateParams
        })
      });

      if (response.status === 200) {
        dispatch(setStatus("success"));
        onSuccess();
      } else {
        throw new Error(`Respuesta inesperada: ${response.status}`);
      }
    } catch (err) {
      console.error("[EmailJS Error]", err);
      dispatch(setStatus("error"));
      onError();
    }
  };

  return { sendEmail };
};