import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState, useEffect } from "react";

const messages = {
  "en-US": {
    title: "Hello world!",
    description: "You have {count} new messages.",
  },
  "tr-TR": {
    title: "Merhaba dünya!",
    description: "{count} yeni mesajınız var.",
  },
};

function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" values={{count: 5}}/>
        </p>
        <br /> <br />
        <button onClick={() => setLocale("en-US")}>EN</button>
        <button onClick={() => setLocale("tr-TR")}>TR</button>
      </IntlProvider>
    </div>
  );
}

export default App;
