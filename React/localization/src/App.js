import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState } from "react";

const messages = {
  "en-US": {
    title: "Hello world!",
    description: "You have 3 new messages."
  },
  "tr-TR": {
    title: "Merhaba dünya!",
    description: "3 yeni mesajınız var."
  }
  
};

function App() {
  const [lang, setLang] = useState("en-US");

  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id="title" />
        <p>
        <FormattedMessage id="description" />
        </p>
        <br /> <br />
        <button onClick={() => setLang("en-US")}>EN</button>
        <button onClick={() => setLang("tr-TR")}>TR</button>
      </IntlProvider>
    </div>
  );
}

export default App;
