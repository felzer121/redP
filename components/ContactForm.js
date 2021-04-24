import { useState } from "react";
import { Formik, Field } from "formik";
import Recaptcha from "react-recaptcha";
import * as Yup from "yup";
import ErrorMsg from "./ErrorMsg";
import { useI18n } from "next-rosetta";

const initialFormValue = {
  name: "",
  email: "",
  message: "",
  recaptcha: "",
};

function ContactForm() {
  const { t } = useI18n();
  const [isEmailSent, setIsEmailSent] = useState();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required(t("components.contactForm.nameRequired")),
    message: Yup.string()
      .min(2, "Too short!")
      .max(280, "Too long!")
      .required(t("components.contactForm.messageRequired")),
    recaptcha: Yup.string().required(
      t("components.contactForm.captchaRequired")
    ),
  });

  const sendEmail = async (values, { setSubmitting, resetForm }) => {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setIsEmailSent(res.status === 200);
    setSubmitting(false);
    resetForm(initialFormValue);
  };

  return (
    <>
      <div className="relative bg-white border-t border-gray-100">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                <a id="contact">{t("components.contactForm.title")}</a>
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                {t("components.contactForm.subtitle")}
              </p>
              <dl className="mt-8 text-base leading-6 text-gray-500">
                <div className="mt-6">
                  <dt className="sr-only">Skype</dt>
                  <dd className="flex">
                    <span className="">Skype:</span>
                    <a
                      className="ml-3 link"
                      href="https://join.skype.com/invite/nHA2fpQ48Dks"
                    >
                      live:affiliate_229
                    </a>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Telegram</dt>
                  <dd className="flex">
                    <span className="">Telegram:</span>
                    <a className="ml-3 link" href="https://t.me/redaffiliates">
                      redaffiliates
                    </a>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <span className="">Email:</span>
                    <a
                      className="ml-3 link"
                      href="mailto:partners@red-affiliates.com"
                    >
                      partners@red-affiliates.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <Formik
                initialValues={initialFormValue}
                validationSchema={ContactFormSchema}
                validate={({ email }) => {
                  const errors = {};

                  if (!email) {
                    errors.email = t("components.contactForm.emailRequired");
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
                  ) {
                    errors.email = t("components.contactForm.invalidEmail");
                  }

                  return errors;
                }}
                onSubmit={sendEmail}
              >
                {({
                  errors,
                  touched,
                  isSubmitting,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 row-gap-6"
                  >
                    <div>
                      <label htmlFor="name" className="sr-only">
                        {t("components.contactForm.fullName")}
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <Field
                          id="name"
                          name="name"
                          placeholder={t("components.contactForm.fullName")}
                          className={`${
                            errors.name && touched.name
                              ? "border border-red-500"
                              : ""
                          } form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150`}
                        />
                      </div>
                      <ErrorMsg name="name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        {t("components.contactForm.email")}
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <Field
                          id="email"
                          type="email"
                          name="email"
                          placeholder={t("components.contactForm.email")}
                          className={`${
                            errors.email && touched.email
                              ? "border border-red-500"
                              : ""
                          } form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150`}
                        />
                      </div>
                      <ErrorMsg name="email" />
                    </div>

                    <div>
                      <label htmlFor="message" className="sr-only">
                        {t("components.contactForm.message")}
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <Field
                          id="message"
                          name="message"
                          as="textarea"
                          rows="4"
                          placeholder={t("components.contactForm.message")}
                          className={`${
                            errors.message && touched.message
                              ? "border border-red-500"
                              : ""
                          } form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150`}
                        />
                      </div>

                      <ErrorMsg name="message" />
                    </div>
                    <div>
                      <div className="inline-flex rounded-md shadow-sm">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-red-500 transition duration-150 ease-in-out"
                        >
                          {t("components.contactForm.send")}
                        </button>
                      </div>
                      <span className="ml-3">
                        {isEmailSent === true && (
                          <span className="text-green-500">
                            {t("components.contactForm.sentSuccessfully")}
                          </span>
                        )}
                        {isEmailSent === false && (
                          <>
                            <span className="text-red-500">
                              {t("components.contactForm.notSent")}
                            </span>
                          </>
                        )}
                      </span>
                    </div>
                    <div>
                      <Recaptcha
                        sitekey={process.env.RECAPTCHA_KEY}
                        render="explicit"
                        verifyCallback={(response) => {
                          setFieldValue("recaptcha", response);
                        }}
                        onloadCallback={console.log}
                      />
                      <ErrorMsg name="recaptcha" />
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
