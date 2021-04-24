import { useEffect } from "react";
import { useRouter } from "next/router";
import { I18nProvider } from "next-rosetta";
import TagManager from "react-gtm-module";
import "../styles/index.css";
import "../styles/main.css";

const tagManagerArgs = {
  gtmId: "GTM-T5G65L4",
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.stag) {
      localStorage.setItem("stag", JSON.stringify(router.query.stag));
    }

    if (process.env.NODE_ENV === "production") {
      TagManager.initialize(tagManagerArgs);
    }
  });

  return (
    <I18nProvider table={pageProps.table}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default MyApp;
