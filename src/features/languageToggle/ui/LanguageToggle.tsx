import { useTranslation } from 'react-i18next';
import { EnglishFlagIcon, SpanishFlagIcon } from '../assets';

export const LanguageToggle: React.FC = () => {
  const { t, i18n } = useTranslation();

  const currentLang = (i18n.language || '').toLowerCase();
  const isSpanish = currentLang.startsWith('es');
  const nextLang: 'en' | 'es' = isSpanish ? 'en' : 'es';
  const nextFlag = isSpanish ? <EnglishFlagIcon size={25} /> : <SpanishFlagIcon size={25} />;

  const handleClick = () => {
    i18n.changeLanguage(nextLang);
    localStorage.setItem('i18nextLng', nextLang);
  };

  return (
    <button
      className="mx-2 shadow-lg cursor-pointer"
      onClick={handleClick}
      aria-label={t(`languageToggle.ariaLabelChangeLanguage`)}
      title={t(`languageToggle.changeLanguage`)}
    >
      {nextFlag}
    </button>
  );
};
