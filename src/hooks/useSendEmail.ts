import { useAppDispatch } from "./useAppDispatch";
import emailjs from "@emailjs/browser";
import { setStatus } from "../features/contactForm/contactFormSlice";

export const useSendEmail = () => {
  const dispatch = useAppDispatch();

  const sendEmail = async (
    formEl: HTMLFormElement,
    onSuccess: () => void,
    onError: () => void
  ) => {
    try {
      dispatch(setStatus("sending"));

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formEl,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      if (result.status === 200) {
        dispatch(setStatus("success"));
        onSuccess();
      } else {
        throw new Error(`Respuesta inesperada: ${result.status}`);
      }
    } catch (err) {
      console.error("[EmailJS Error]", err);
      dispatch(setStatus("error"));
      onError();
    }
  };

  return { sendEmail };
};
