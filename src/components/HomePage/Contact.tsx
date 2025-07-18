import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { openForm } from "../../features/contactForm/contactFormSlice";
import contactChannels from "../../data/contactChannels.json";
import "./styles/Contact.css";

type ServiceKey = keyof typeof contactChannels;
type ChannelItem = (typeof contactChannels)[ServiceKey];

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const tBase = "pages.homePage.components.contact";
  const dispatch = useAppDispatch();

  return (
    <section className="contact" id="contact">
      <h2
        className="contact__h2"
        data-translate-en="Contact Me"
        data-translate-es="Contáctame"
      >
        {t(`${tBase}.h2`)}
      </h2>
      <p className="contact__p">{t(`${tBase}.p`)}</p>

      <article className="contact__options">
        {Object.entries(contactChannels).map(([key, channel]) => {
          const typedKey = key as ServiceKey;
          const typedChannel = channel as ChannelItem;

          return (
            <a
              key={typedKey}
              className="contact__option"
              {...(typedKey === "email"
                ? { onClick: () => dispatch(openForm()) } 
                : {
                    href: typedChannel.href, 
                    target: "_blank", 
                    rel: "noopener noreferrer", 
                  })}
            >
              <i
                className={`contact__option__icon icon ${typedChannel.ico}`}
              ></i>
              <span className="contact__option__span">
                {t(`${tBase}.channels.${typedKey}`)}
              </span>
            </a>
          );

        })}
      </article>
    </section>
  );
};

export default Contact;
