import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {useI18n} from "next-rosetta";
import Transition from "./Transition";
import SignUpButton from "./SignUpButton";

const Menu = () => {
  const { t } = useI18n();
  const { locale } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-full">
        <nav className="header__container relative flex items-center justify-between sm:h-10 md:justify-center h-full">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="header__container flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <img
                  className=""
                  src="/logobold.png"
                  alt="Red Affiliates Logo"
                  width="250"
                  height="73"
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  onClick={openMenu}
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block header__link">
            <a
              href={`/${locale}#brand`}
              className="ml-10 hover:text-white focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out"
            >
              {t('generic.brand')}
            </a>
            <a
                href={`/${locale}#about`}
                className="ml-10 hover:text-white focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out"
            >
              {t('generic.about')}
            </a>
            <a
              href={`/${locale}#reviews`}
              className="ml-10 hover:text-white focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out"
            >
              {t('generic.reviews')}
            </a>
            <a
                href={`/${locale}#fake`}
                className="ml-10 hover:text-white focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out"
            >
              мероприятия
            </a>
            <a
              href={`/${locale}#contact`}
              className="ml-10 hover:text-white focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out"
            >
              {t('generic.contactUs')}
            </a>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md shadow mr-4">
              <a
                href="https://app.red-affiliates.com/partner/login"
                className="header__button"
              >
                {t('generic.login')}
              </a>
            </span>

            <span className="inline-flex rounded-md shadow">
              <SignUpButton className="header__button">
                {t('generic.signup')}
              </SignUpButton>
            </span>
          </div>
        </nav>
      </div>

      {/* <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
      <Transition
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        show={isMenuOpen}
      >
        <div
          className={`${
            isMenuOpen ? "" : "hidden"
          } absolute top-0 inset-x-0 p-2 transition transform origin-top-right`}
        >
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-gray-700 shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <a href="/">
                    <img
                      className=""
                      src="/logobold.svg"
                      alt="Red Affiliates Logo"
                      width="250"
                      height="73"
                    />
                  </a>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    onClick={closeMenu}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 header__link">
                <a
                  href={`/${locale}#commission`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {t('generic.comission')}
                </a>
                <a
                  href={`/${locale}#brand`}
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {t('generic.brand')}
                </a>
                <a
                  href={`/${locale}#faq`}
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {t('generic.faq')}
                </a>
                <a
                  href={`/${locale}#contact`}
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {t('generic.contactUs')}
                </a>
                <a
                  href="/terms-and-conditions"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {t('generic.tnc')}
                </a>
              </div>
              <div>
                <a
                  href="https://app.red-affiliates.com/partner/login"
                  className="block w-full px-5 py-3 text-center font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {t('generic.login')} →
                </a>
              </div>
              <div>
                <SignUpButton
                  className="block w-full px-5 py-3 text-center font-medium text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                >
                  {t('generic.signup')}
                </SignUpButton>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Menu;
