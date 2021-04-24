import SignUpButton from "./SignUpButton";
import { useI18n } from "next-rosetta";

function Cta() {
  const { t } = useI18n();

  return (
    <div className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl leading-9 text-white sm:text-4xl sm:leading-10">
          {t('components.cta.title')}
          <br />
          {t('components.cta.subtitle')}
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <SignUpButton className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              {t("generic.becomeOurPartner")}
            </SignUpButton>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="https://app.red-affiliates.com/partner/login"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-800 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
            >
              {t("generic.login")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
