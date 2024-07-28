import { useLanguage } from "../../../LanguageContext.jsx";

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div className="flex justify-end p-4">
      <button onClick={() => switchLanguage("en")} className="mx-2">
        EN
      </button>
      <button onClick={() => switchLanguage("ku")} className="mx-2">
        KU
      </button>
      <button onClick={() => switchLanguage("ar")} className="mx-2">
        AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
