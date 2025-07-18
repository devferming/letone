import { useAppSelector } from "../../hooks/useAppSelector";
import { useTranslation } from "react-i18next";
import { useContactFormHandlers } from "../../hooks/useContactFormHandlers";
import contactChannels from "../../data/contactChannels.json";

import "./style/ContactForm.css";

type ServiceKey = keyof typeof contactChannels;
type ChannelItem = (typeof contactChannels)[ServiceKey];
type FieldName = "name" | "email" | "phone" | "message";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const tBase = "shared.contactForm";
  const statusKey = useAppSelector((state) => state.contactForm.statusKey);
  const formStatusMessage = t(`shared.contactForm.statusMessages.${statusKey}`);

  const typeMap: Record<FieldName, string> = {
    name: "text",
    email: "email",
    phone: "tel",
    message: "textarea",
  };

  const {
    formRef,
    feedbackRef,
    buttonRef,
    iconRef,
    handleSendEmail,
    handleCloseForm,
  } = useContactFormHandlers();

  return (
    <form ref={formRef} onSubmit={handleSendEmail} className="contactForm">
      <input
        type="text"
        name="subject"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <input type="hidden" name="timestamp" value={Date.now()} />
      <input type="hidden" name="g-recaptcha-response" />

      <div
        className="g-recaptcha"
        data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        data-size="invisible"
      ></div>

      <span
        onClick={handleCloseForm}
        className="contactForm__x material-symbols-outlined"
      >
        cancel
      </span>
      <h2 className="contactForm__h2">{t("shared.contactForm.title")}</h2>

      {Object.entries(typeMap).map(([fieldName, type]) => (
        <label key={fieldName} className="contactForm__label">
          <span className="contactForm__field__span contactForm__field__span--required">
            {t(`${tBase}.${fieldName}FieldLabel`)}
          </span>
          {type === "textarea" ? (
            <textarea
              name={fieldName}
              className="contactForm__textArea"
              required
              rows={5}
            />
          ) : (
            <input
              name={fieldName}
              className="contactForm__field"
              type={type}
              required
            />
          )}
        </label>
      ))}

      <button ref={buttonRef} className="contactForm__btn" type="submit">
        {t("shared.contactForm.button")}
      </button>

      <span ref={feedbackRef} className="contactForm__feedback formStatusOff">
        <i
          ref={iconRef}
          className="contactForm__feedback__icon bx bx-mail-send bx-flashing"
        ></i>
        {formStatusMessage}
      </span>

      <footer className="contactForm__footer">
        {Object.entries(contactChannels).map(([key, channel]) => {
          const typedKey = key as ServiceKey;
          const typedChannel = channel as ChannelItem;
          return (
            <a
              key={typedKey}
              className="contactForm__a"
              href={typedChannel.href}
            >
              <i
                className={`contactForm__footer__a__icon icon ${typedChannel.ico}`}
              ></i>
            </a>
          );
        })}
        <p className="contactForm__footer__p"> / contacto@letone.com</p>
      </footer>
    </form>
  );
};

export default ContactForm;
