import { useTranslation } from "react-i18next";
import contactChannels from "../../data/contactChannels.json";
import "./style/Footer.css";

type ServiceKey = keyof typeof contactChannels;
type ChannelItem = (typeof contactChannels)[ServiceKey];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const tBase = "shared.footer";
  const typedChannel = contactChannels["whatsApp"] as ChannelItem;


  const legalDocs: Array<"privacyPolicy" | "cookiesPolicy" | "termsOfUse"> = [
    "privacyPolicy",
    "cookiesPolicy",
    "termsOfUse",
  ];

  return (
    <footer className="footer">
      <article className="footer__firstBlock">
        <address className="footer__firstBlock__address">
          <h2 className="footer__firstBlock__address__h2">
            <span className="footer__firstBlock__h2__let">let</span>
            <span className="footer__firstBlock__h2__one">One</span>
          </h2>
          <p className="footer__firstBlock__address__p">
            Calle 63a sur #71f-80
          </p>
          <p className="footer__firstBlock__address__p">
            Barrio Ismael Perdomo
          </p>
          <p className="footer__firstBlock__address__p">Bogotá - Colombia</p>
        </address>

        <div className="footer__firstBlock__resources">
          <h3 className="footer__firstBlock__resources__h3">
            {t(`${tBase}.resources.h3`)}
          </h3>
          <p className="footer__firstBlock__resources__p">
            {t(`${tBase}.resources.p1`)}
          </p>
          <p className="footer__firstBlock__resources__p">
            {t(`${tBase}.resources.p2`)}
          </p>
        </div>

        <div className="footer__firstBlock__socialWork">
          <h3 className="footer__firstBlock__socialWork__h3">
            {t(`${tBase}.socialWork.h3`)}
          </h3>
          <p className="footer__firstBlock__socialWork__p">
            {t(`${tBase}.socialWork.p1`)}
          </p>
          <p className="footer__firstBlock__socialWork__p">
            {t(`${tBase}.socialWork.p2`)}
          </p>
        </div>

        <div className="footer__firstBlock__contact">
          <h3 className="footer__firstBlock__contact__h3">
            {t(`${tBase}.contact.h3`)}
          </h3>
          <p className="footer__firstBlock__contact__p">contacto@letone.com</p>

          <a
            href={typedChannel.href+t(`${tBase}.contact.a.href`)}
            className="footer__firstBlock__contact__div"
            aria-label={t(`${tBase}.contact.a.ariaLabel`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-whatsapp footer__firstBlock__contact__div__ico"></i>
            <p className="footer__firstBlock__contact__div__p">
              +57 320 595 42 40
            </p>
            <p className="footer__firstBlock__contact__div__p">
              {t(`${tBase}.contact.p`)}
            </p>
          </a>
        </div>
      </article>

      <article className="footer__secondBlock">
        <p className="footer__secondBlock__p">
          &copy; {new Date().getFullYear()} {t(`${tBase}.legal.year`)}
        </p>

        <nav aria-label={t(`${tBase}.legal.ariaLabel`)} className="footer__secondBlock__nav">
          <ul className="footer__secondBlock__policiesContainer">
            {legalDocs.map((docName) => (
              <li
                key={docName}
                className="footer__secondBlock__policiesContainer__policie"
              >
                <a
                  className="footer__secondBlock__policiesContainer__a"
                  href={`${window.location.origin}/#/legalPage/${docName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`${tBase}.legal.${docName}.ariaLabel`)}
                >
                  {t(`${tBase}.legal.${docName}.text`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </footer>
  );
};

export default Footer;
