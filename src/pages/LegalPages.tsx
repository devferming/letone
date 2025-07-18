import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import "./styles/LegalPages.css";

const LegalPages: React.FC = () => {
  const { t } = useTranslation();
  const { docName } = useParams<{
    docName: "privacyPolicy" | "termsOfUse" | "cookiesPolicy";
  }>();
  const pageKey = docName || "privacyPolicy";
  const tBase = `pages.legal.${pageKey}`;

  const renderList = (key: string) => {
    const items = t(`${tBase}.${key}`, { returnObjects: true }) as string[];
    if (!Array.isArray(items)) return null;

    return (
      <ul className="legalPage__section__ul">
        {items.map((item, idx) => (
          <li key={`${key}-${idx}`}>{item}</li>
        ))}
      </ul>
    );
  };

  const renderParagraph = (key: string) => (
    <p className="legalPage__section__p">{t(`${tBase}.${key}`)}</p>
  );

  const sections = [
    "intro",
    "responsibleTitle",
    "responsibleBody",
    "dataTitle",
    "dataList",
    "purposeTitle",
    "purposeList",
    "rightsTitle",
    "rightsList",
    "storageTitle",
    "storage",
    "securityTitle",
    "security",
    "transferTitle",
    "transfer",
    "cookiesTitle",
    "cookies",
    "changesTitle",
    "changes",
    "contactTitle",
    "contact",
  ];

  return (
    <article className="legalPage">
      <header className="legalPage__header">
        <h2 className="legalPage__header__h2">{t(`${tBase}.title`)}</h2>
        <p className="legalPage__header__p">
          <strong>{t(`${tBase}.lastUpdated`)}</strong>
        </p>
      </header>

      {sections.map((section, idx) => (
        <section key={section} className="legalPage__section">
          {section.includes("Title") && (
            <h3 className="legalPage__section__h3">
              {t(`${tBase}.${section}`)}
            </h3>
          )}
          {section.includes("List")
            ? renderList(section)
            : !section.includes("Title")
            ? renderParagraph(section)
            : null}
        </section>
      ))}
    </article>
  );
};

export default LegalPages;
