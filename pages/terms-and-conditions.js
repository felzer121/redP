import React from "react";
import { NextSeo } from "next-seo";
import { useI18n } from "next-rosetta";
import Menu from "../components/Menu";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Terms() {
  const { t } = useI18n();
  return (
    <>
      <NextSeo
        title="Terms & Conditions | Red Affiliates"
        description="Affiliate Program Terms and Conditions of Red Pingwin Casino"
      />

      <div className="relative bg-gray-900">
        <div className="relative py-6">
          <Menu />
          <div className="px-6 mt-15">
            <div className="bg-white overflow-hidden shadow rounded-lg max-w-3xl mx-auto">
              <div className="px-4 py-5 sm:p-6">
                <h1>{t("components.termsAndConditions.title")}</h1>
                <p className="py-4">
                  {t("components.termsAndConditions.firstText")}
                  <br />
                  {t("components.termsAndConditions.secondText")}
                  <br /> {t("components.termsAndConditions.thirdText")}
                </p>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.one.title")}
                </h2>

                <p className="py-4">
                  {t("components.termsAndConditions.one.firstText")} <br />
                  {t("components.termsAndConditions.one.secondText")}
                  <br /> {t("components.termsAndConditions.one.thirdText")}
                  <br /> {t(
                    "components.termsAndConditions.one.fourthText"
                  )}{" "}
                  <br />
                  {t("components.termsAndConditions.one.fifthText")}
                  <br />
                  {t("components.termsAndConditions.one.sixthText")} <br />{" "}
                  {t("components.termsAndConditions.one.seventhText")}
                  <br /> {t("components.termsAndConditions.one.eighthText")}
                  <br />
                  {t("components.termsAndConditions.one.ninthText")}
                  <br /> {t("components.termsAndConditions.one.tenthText")}
                  <br /> {t("components.termsAndConditions.one.eleventhText")}
                  <br /> {t(
                    "components.termsAndConditions.one.twelfthText"
                  )}{" "}
                  <br />
                  {t("components.termsAndConditions.one.thirteenthText")} <br />
                  {t("components.termsAndConditions.one.fourteenthText")}
                  <br /> {t("components.termsAndConditions.one.fifteenthText")}
                  <br /> {t(
                    "components.termsAndConditions.one.sixteenthText"
                  )}{" "}
                  <br />
                  {t("components.termsAndConditions.one.seventeenthText")}
                  <br /> {t("components.termsAndConditions.one.eighteenthText")}
                  <br /> {t("components.termsAndConditions.one.nineteenthText")}
                  <br /> {t("components.termsAndConditions.one.twentiethText")}
                </p>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.two.title")}
                </h2>
                <div className="py-4">
                  <h3>{t("components.termsAndConditions.two.first.title")}</h3>
                  {t("components.termsAndConditions.two.first.text")} <br />
                  <br />
                  <h3>{t("components.termsAndConditions.two.second.title")}</h3>
                  {t("components.termsAndConditions.two.second.text")}
                  <br />
                  <br />
                  <h3>{t("components.termsAndConditions.two.third.title")}</h3>
                  {t("components.termsAndConditions.two.third.text")}
                  <br />
                  <br />
                  <h3>{t("components.termsAndConditions.two.fourth.title")}</h3>
                  {t("components.termsAndConditions.two.fourth.text")}
                  <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.fifth.title")}
                  </h3>{" "}
                  {t("components.termsAndConditions.two.fifth.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.sixth.title")}
                  </h3>{" "}
                  {t("components.termsAndConditions.two.sixth.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.seventh.title")}
                  </h3>{" "}
                  {t("components.termsAndConditions.two.seventh.text")} <br />
                  <br />
                  <h3>{t("components.termsAndConditions.two.eighth.title")}</h3>
                  {t("components.termsAndConditions.two.eighth.text")}
                  <br />
                  <br />
                  <h3>{t("components.termsAndConditions.two.ninth.title")}</h3>
                  {t("components.termsAndConditions.two.ninth.text")} <br />
                  <br />
                  <h3>{t("components.termsAndConditions.two.tenth.title")}</h3>
                  {t("components.termsAndConditions.two.tenth.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.eleventh.title")}
                  </h3>
                  {t("components.termsAndConditions.two.eleventh.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.twelfth.title")}
                  </h3>
                  {t("components.termsAndConditions.two.twelfth.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.thirteenth.title")}
                  </h3>
                  {t("components.termsAndConditions.two.thirteenth.text")}
                  <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.fourteenth.title")}
                  </h3>
                  {t("components.termsAndConditions.two.fourteenth.text")}
                  <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.fifteenth.title")}
                  </h3>
                  {t("components.termsAndConditions.two.fifteenth.text")}
                  <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.sixteenth.title")}
                  </h3>
                  {t("components.termsAndConditions.two.sixteenth.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.two.seventeenth.title")}
                  </h3>
                  {t("components.termsAndConditions.two.seventeenth.text")}
                </div>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.three.title")}
                </h2>
                <div className="py-4">
                  <h3>
                    {t("components.termsAndConditions.three.first.title")}
                  </h3>
                  {t("components.termsAndConditions.three.first.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.three.second.title")}
                  </h3>
                  {t("components.termsAndConditions.three.second.text")}
                  <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.three.third.title")}
                  </h3>
                  {t("components.termsAndConditions.three.third.text")}
                </div>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.four.title")}
                </h2>
                <p className="py-4">
                  {t("components.termsAndConditions.four.firstText")}
                  <br /> {t(
                    "components.termsAndConditions.four.secondText"
                  )}{" "}
                  <br />
                  {t("components.termsAndConditions.four.thirdText")} <br />
                  {t("components.termsAndConditions.four.fourthText")}
                  <br /> {t("components.termsAndConditions.four.fifthText")}
                </p>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.five.title")}
                </h2>
                <p className="py-4">
                  {t("components.termsAndConditions.five.firstText")}
                  <br />
                  <br />
                  {t("components.termsAndConditions.five.secondText")}
                  <br />
                  {t("components.termsAndConditions.five.thirdText")}
                  <br />
                  {t("components.termsAndConditions.five.fourthText")}
                  <br />
                  {t("components.termsAndConditions.five.fifthText")}
                  <br />
                  {t("components.termsAndConditions.five.sixthText")}
                  <br />
                  {t("components.termsAndConditions.five.seventhText")}
                  <br />
                  {t("components.termsAndConditions.five.eighthText")}
                  <br />
                  {t("components.termsAndConditions.five.ninthText")}
                  <br />
                  <br />
                  {t("components.termsAndConditions.five.tenthText")}
                </p>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.six.title")}
                </h2>
                <p className="py-4">
                  {t("components.termsAndConditions.six.firstText")}
                  <br />
                  {t("components.termsAndConditions.six.secondText")}
                  <br />
                  {t("components.termsAndConditions.six.thirdText")}
                  <br />
                  {t("components.termsAndConditions.six.fourthText")}
                  <br />
                  {t("components.termsAndConditions.six.fifthText")}
                  <br />
                  {t("components.termsAndConditions.six.sixthText")}
                  <br />
                  {t("components.termsAndConditions.six.seventhText")}
                  <br />
                  {t("components.termsAndConditions.six.eighthText")}
                  <br />
                  {t("components.termsAndConditions.six.ninthText")}
                  <br />
                  {t("components.termsAndConditions.six.tenthText")}
                  <br />
                  {t("components.termsAndConditions.six.eleventhText")}
                  <br />
                  {t("components.termsAndConditions.six.twelfthText")}
                  <br />
                  {t("components.termsAndConditions.six.thirteenthText")}
                  <br />
                  <br />
                  {t("components.termsAndConditions.six.fourteenthText")}
                  <br />
                  {t("components.termsAndConditions.six.fifteenthText")}
                </p>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.seven.title")}
                </h2>
                <p className="py-4">
                  {t("components.termsAndConditions.seven.subtitle")}
                  <br />
                  {t("components.termsAndConditions.seven.firstText")}
                  <br />
                  {t("components.termsAndConditions.seven.secondText")}
                  <br />
                  {t("components.termsAndConditions.seven.thirdText")}
                  <br />
                  {t("components.termsAndConditions.seven.fourthText")}
                  <br />
                  {t("components.termsAndConditions.seven.fifthText")}
                  <br />
                  {t("components.termsAndConditions.seven.sixthText")}
                  <br />
                  {t("components.termsAndConditions.seven.seventhText")}
                </p>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.eight.title")}
                </h2>
                <p className="py-4">
                  {t("components.termsAndConditions.eight.firstText")}
                  <br />
                  {t("components.termsAndConditions.eight.secondText")}
                  <br />
                  {t("components.termsAndConditions.eight.thirdText")}
                </p>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.nine.title")}
                </h2>
                <div className="py-4">
                  <h3>{t("components.termsAndConditions.nine.first.title")}</h3>
                  {t("components.termsAndConditions.nine.first.firstText")}
                  <br />
                  {t("components.termsAndConditions.nine.first.secondText")}
                  <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.nine.second.title")}
                  </h3>
                  {t("components.termsAndConditions.nine.second.firstText")}
                  <br />
                  {t("components.termsAndConditions.nine.second.secondText")}
                  <br />
                  {t("components.termsAndConditions.nine.second.thirdText")}
                  <br />
                  <br />
                  <h3>{t("components.termsAndConditions.nine.third.title")}</h3>
                  {t("components.termsAndConditions.nine.third.text")}
                </div>

                <h2 className="pt-4">
                  {t("components.termsAndConditions.ten.title")}
                </h2>
                <div className="py-4">
                  <h3>{t("components.termsAndConditions.ten.first.title")}</h3>
                  {t("components.termsAndConditions.ten.first.text")} <br />
                  <br />
                  <h3>{t("components.termsAndConditions.ten.second.title")}</h3>
                  {t("components.termsAndConditions.ten.second.firstText")}
                  <br />
                  {t("components.termsAndConditions.ten.second.secondText")}
                  <br />
                  <br />
                  <h3>{t("components.termsAndConditions.ten.third.title")}</h3>
                  {t("components.termsAndConditions.ten.third.text")}
                  <br />
                  <br />
                  <h3>{t("components.termsAndConditions.ten.fourth.title")}</h3>
                  {t("components.termsAndConditions.ten.fourth.text")}
                  <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.ten.fifth.title")}
                  </h3>{" "}
                  {t("components.termsAndConditions.ten.fifth.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.ten.sixth.title")}
                  </h3>{" "}
                  {t("components.termsAndConditions.ten.sixth.text")} <br />
                  <br />
                  <h3>
                    {t("components.termsAndConditions.ten.seventh.title")}
                  </h3>
                  {t("components.termsAndConditions.ten.seventh.text")}
                  <br />
                  <br />
                  <h3>{t("components.termsAndConditions.ten.eighth.title")}</h3>
                  {t("components.termsAndConditions.ten.eighth.text")}
                  <br />
                  <br />
                  <h3>{t("components.termsAndConditions.ten.ninth.title")}</h3>
                  {t("components.termsAndConditions.ten.ninth.firstText")}
                  <br />
                  {t("components.termsAndConditions.ten.ninth.secondText")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cta />
      <Footer />
    </>
  );
}

export const getStaticProps = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`); // Import locale
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};
