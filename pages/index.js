import React from "react";
import { NextSeo } from "next-seo";
import { useI18n } from "next-rosetta";
import Menu from "../components/Menu";
import ContactForm from "../components/ContactForm";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import SignUpButton from "../components/SignUpButton";
import Faq from "../components/Faq";
import About from "../components/About";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <NextSeo
        title="Red Affiliates | Best Online Casino Affiliate Program"
        description="Welcome to Red Affiliates — Red Pingwin Online Casino Affiliate Program. Let's make money together 🤑"
      />
      <div className="header">
        <Menu />
      </div>
      <div className="info">
        <div className="info__container">
          <div className="info__content">
            <h2>Зарабатывайте <span className="info__weight">больше</span> <br /> уже <span className="info__red">сегодня</span></h2>
            <p className="info__txt">
              <span className="font-bold">RED AFFILIATES</span> партнерская программа для онлайн Гемблинга.
              Мы имеем большой опыт работы на рынке азартных игр. Мы гарантируем надежность и стабильност,  как в предоставлении услуг нашим Игрокам,
              так и в работе с нашими Партнерами.
            </p>
            <SignUpButton className="content__button">
              {t('generic.signup')}
            </SignUpButton>
          </div>
        </div>
        <img
            className="line"
            src="/dd.png"
        />
      </div>
      <div className="brands" id="brand">
        <div className="brands__container">
          <h2 className="brands__title">Наши бренды</h2>
          <div className="brands__content">
            <img src="/casino.png" className="brands__img" alt=""/>
            <div className="brands__info">
              <div className="brands__infoTitle">
                <img src="/logoCasino.png" alt=""/>
                <div className="button__info">
                  <a
                      href="https://redping.win/"
                      className="button__casino"
                  >
                    посетить казино
                  </a>
                </div>
              </div>
              <div className="brands__txtBox">
                <p className="brands__txt">
                  Онлайн казино Ред Пингвин откроет вам удивительные секреты волшебной страны азарта.
                  Вы сможете отправиться в путь прямо сейчас, а в качестве вашего экскурсовода будет
                  выступать колоритный и забавный персонаж, который украшает логотип популярного казино.
                  Он повсюду будет сопровождать вас и указывать верное направление, которое приведёт вас
                  к несметным богатствам. Доверьтесь хитрой птице, ведь он непременно оправдает ваши ожидания.
                </p>
                <h4 className="brands__txtTitle">Процент от прибыли</h4>
                <p className="brands__txt">Процент вознаграждения Партнера рассчитывается исходя из количества игроков за предыдущий месяц</p>
              </div>
            </div>
          </div>
          <div className="brands__numbers">
            <div className="brands__numbersBox">
              <span className="brands__span">200+</span>
              <p className="brands__numbersTxt">Игр</p>
            </div>
            <div className="brands__numbersBox">
              <span className="brands__span">20+</span>
              <p className="brands__numbersTxt">Game Rove</p>
            </div>
            <div className="brands__numbersBox">
              <span className="brands__span">10+</span>
              <p className="brands__numbersTxt">Валют</p>
            </div>
            <div className="brands__numbersBox">
              <span className="brands__span">10+</span>
              <p className="brands__numbersTxt">Игр</p>
            </div>
            <div className="brands__numbersBox">
              <span className="brands__span">24/7</span>
              <p className="brands__numbersTxt">Support</p>
            </div>
          </div>
          <div className="brands__subInfo">
            <div className="brands__subInfoContainer">
              <h4 className="brands__subInfoTitle">Ссылка на сайт</h4>
              <a href="#" className="brands__subInfoLink">www.redping.win.com</a>
            </div>
            <div className="brands__subInfoContainer">
              <h4 className="brands__subInfoTitle">Рынки</h4>
              <img className="brands__flag" src="/flag.png" alt=""/>
            </div>
            <div className="brands__subInfoContainer">
              <h4 className="brands__subInfoTitle">Варианты оплаты</h4>
              <span className="brands__subTxt">20</span>
            </div>
            <div className="brands__subInfoContainer">
              <h4 className="brands__subInfoTitle">Лицензия</h4>
              <span className="brands__subTxt">Curacao</span>
            </div>
          </div>
          <div className="button__start">
            <SignUpButton className="content__button">
              Начать продвижение
            </SignUpButton>
          </div>
        </div>
      </div>
      <div className="icons">
        <div className="icons__container">
          <div className="icons__icon">
            <img className="icons__img" src="/icon1.png" alt=""/>
            <span className="icons__span">CPA</span>
          </div>
          <div className="icons__icon">
            <img className="icons__img" src="/icon2.png" alt=""/>
            <span className="icons__span">RevShare</span>
          </div>
          <div className="icons__icon">
            <img className="icons__img" src="/icon3.png" alt=""/>
            <span className="icons__span">Hybrid</span>
          </div>
        </div>
      </div>
      <div className="advantages" id="about">
        <div className="advantages__container">
          <h2 className="brands__title">Наши преимущества</h2>
          <div className="brands__box">
            <div className="brands__item">
              <img src="/ad-icon1.png" alt=""/>
              <h5 className="brands__itemTitle">Лучшая<br /> конверсия</h5>
              <img src="/line-ad.png" alt=""/>
              <p className="brands__itemTxt">Не упускаем ни одного<br />
                потенциального игрока</p>
            </div>
            <div className="brands__item">
              <img src="/ad-icon2.png" alt=""/>
              <h5 className="brands__itemTitle">Пожизненный<br /> доход</h5>
              <img src="/line-ad.png" alt=""/>
              <p className="brands__itemTxt">Пожизненный доход от привлеченного игрока</p>
            </div>
            <div className="brands__item">
              <img src="/ad-icon3.png" alt=""/>
              <h5 className="brands__itemTitle">Индивидуальный<br /> подход</h5>
              <img src="/line-ad.png" alt=""/>
              <p className="brands__itemTxt">Предложим каждому партнеру более выгодное сотрудничество</p>
            </div>
            <div className="brands__item">
              <img src="/ad-icon4.png" alt=""/>
              <h5 className="brands__itemTitle">10 платежных<br /> систем</h5>
              <img src="/line-ad.png" alt=""/>
              <p className="brands__itemTxt">Большой выбор платежных систем</p>
            </div>
            <div className="brands__item">
              <img src="/ad-icon5.png" alt=""/>
              <h5 className="brands__itemTitle">Сочные промо<br /> материалы</h5>
              <img src="/line-ad.png" alt=""/>
              <p className="brands__itemTxt">Баннеры, лендинги, брендинги
                не оставят равнодушным ни одного</p>
            </div>
            <div className="brands__item">
              <img src="/ad-icon6.png" alt=""/>
              <h5 className="brands__itemTitle">Игроки остаются<br /> надолго</h5>
              <img src="/line-ad.png" alt=""/>
              <p className="brands__itemTxt">Мы активно работаем над удержанием игроков</p>
            </div>
            <div className="brands__item">
              <img src="/ad-icon7.png" alt=""/>
              <h5 className="brands__itemTitle">Оригинальный<br /> софт</h5>
              <img src="/line-ad.png" alt=""/>
              <p className="brands__itemTxt">100% гарантия честности</p>
            </div>
            <div className="brands__item">
              <img src="/ad-icon8.png" alt=""/>
              <h5 className="brands__itemTitle">Списание минусового<br /> баланса</h5>
              <img src="/line-ad.png" alt=""/>
              <p className="brands__itemTxt">Обнуление минусового баланса 1 раз в месяц</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews" id="reviews" >
        <div className="reviews__container">
          <h2 className="brands__title">Отзывы наших клиентов</h2>
          <Carousel responsive={responsive} infinite draggable={false} swipeable={false} className="reviews__carousel">
            <div className="reviews__item fake">
                {/* fake */}
            </div>
            <div className="reviews__item">
              <div className="reviews__itemTitle">
                <img src="/cas.png" alt=""/>
                <p className="reviews__itemTitleTxt">Безопасное и лицензионное казино Orange</p>
              </div>
              <p className="reviews__itemTxt">Наша компания впервые обратилась к фирме N около полугода назад. Результаты превзошли ожидания: прибыль за первый квартал составил +96%, и это в “мертвый сезон”, когда обычно у нас убыток. </p>
            </div>
            <div className="reviews__item">
              <div className="reviews__itemTitle">
                <img src="/rus.png" alt=""/>
                <p className="reviews__itemTitleTxt">Руслан , Россия</p>
              </div>
              <p className="reviews__itemTxt">С супругой копим на автомобиль. Представляю, какого будет её удивление, когда мой выигрыш однажды превысит стоимость авто.</p>
            </div>
            <div className="reviews__item fake">
              {/* fake */}
            </div>
            <div className="reviews__item">
              <div className="reviews__itemTitle">
                <img src="/cas.png" alt=""/>
                <p className="reviews__itemTitleTxt">Безопасное и лицензионное казино Orange</p>
              </div>
              <p className="reviews__itemTxt">Наша компания впервые обратилась к фирме N около полугода назад. Результаты превзошли ожидания: прибыль за первый квартал составил +96%, и это в “мертвый сезон”, когда обычно у нас убыток. </p>
            </div>
            <div className="reviews__item">
              <div className="reviews__itemTitle">
                <img src="/rus.png" alt=""/>
                <p className="reviews__itemTitleTxt">Руслан , Россия</p>
              </div>
              <p className="reviews__itemTxt">С супругой копим на автомобиль. Представляю, какого будет её удивление, когда мой выигрыш однажды превысит стоимость авто.</p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="contact" id="contact" >
        <div className="contact__container">
          <div>
            <h2 className="contact__title">Получи до <span className="info__weight">50%</span> <br /> от <span className="info__red">прибыли</span></h2>
            <div className="contact__buttons">
              <button href="" className="contact__button"><img src="/skype.png" alt=""/> Добавить в skype</button>
              <a href="" className="contact__button"><img src="/email.png" alt=""/> Отправить email</a>
            </div>
          </div>
          <img
              className="line line__bot"
              src="/dd.png"
          />
          <div className="footer">
            <div className="footer__logo">
              <img src="/red.png" alt=""/>
              <span className="footer__txtLogo">COPYRIGHT © 2020<br />RED AFFILIATES</span>
            </div>
            <a className="footer__link">
              {t('generic.tnc')}
            </a>
            <div className="social__inf">
              <a href="#"><img src="/telegram.png" alt=""/></a>
              <a href="#"><img src="/inst.png" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="relative bg-gray-900 sa">*/}
      {/*  <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">*/}
      {/*    <Menu />*/}
      {/*    <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">*/}
      {/*      <div className="text-center">*/}
      {/*        <h2 className="text-4xl text-white leading-10 sm:text-5xl sm:leading-none md:text-6xl">*/}
      {/*          {t("components.hero.title")}*/}
      {/*        </h2>*/}
      {/*        <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">*/}
      {/*          {t("components.hero.subtitle")}*/}
      {/*        </p>*/}
      {/*        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">*/}
      {/*          <div className="rounded-md shadow">*/}
      {/*            <SignUpButton className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">*/}
      {/*              {t("generic.becomeOurPartner")}*/}
      {/*            </SignUpButton>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Features */}

      {/*<div className="py-16 bg-gray-900 border-t border-gray-600">*/}
        {/*  <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">*/}
        {/*    <div className="lg:text-center">*/}
        {/*      <h3 className="mt-2 text-3xl leading-8 text-white sm:text-4xl sm:leading-10">*/}
        {/*        {t("components.whyUs.title")}*/}
        {/*      </h3>*/}
        {/*    </div>*/}
        {/*    <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-8">*/}
        {/*      <div>*/}
        {/*        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-600 text-white">*/}
        {/*          <svg*/}
        {/*            className="h-6 w-6"*/}
        {/*            fill="none"*/}
        {/*            strokeLinecap="round"*/}
        {/*            strokeLinejoin="round"*/}
        {/*            strokeWidth="2"*/}
        {/*            stroke="currentColor"*/}
        {/*            viewBox="0 0 24 24"*/}
        {/*          >*/}
        {/*            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>*/}
        {/*          </svg>*/}
        {/*        </div>*/}
        {/*        <div className="mt-5">*/}
        {/*          <h5 className="text-lg leading-6 font-medium text-gray-200">*/}
        {/*            {t("components.whyUs.one.title")}*/}
        {/*          </h5>*/}
        {/*          <p className="mt-2 text-base leading-6 text-gray-400">*/}
        {/*            {t("components.whyUs.one.subtitle")}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="mt-10 lg:mt-0">*/}
        {/*        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-600 text-white">*/}
        {/*          <svg*/}
        {/*            className="h-6 w-6"*/}
        {/*            fill="none"*/}
        {/*            strokeLinecap="round"*/}
        {/*            strokeLinejoin="round"*/}
        {/*            strokeWidth="2"*/}
        {/*            stroke="currentColor"*/}
        {/*            viewBox="0 0 24 24"*/}
        {/*          >*/}
        {/*            <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
        {/*          </svg>*/}
        {/*        </div>*/}
        {/*        <div className="mt-5">*/}
        {/*          <h5 className="text-lg leading-6 font-medium text-gray-200">*/}
        {/*            {t("components.whyUs.two.title")}*/}
        {/*          </h5>*/}
        {/*          <p className="mt-2 text-base leading-6 text-gray-400">*/}
        {/*            {t("components.whyUs.two.subtitle")}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="mt-10 lg:mt-0">*/}
        {/*        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-600 text-white">*/}
        {/*          <svg*/}
        {/*            className="h-6 w-6"*/}
        {/*            stroke="currentColor"*/}
        {/*            fill="none"*/}
        {/*            viewBox="0 0 24 24"*/}
        {/*          >*/}
        {/*            <path*/}
        {/*              strokeLinecap="round"*/}
        {/*              strokeLinejoin="round"*/}
        {/*              strokeWidth="2"*/}
        {/*              d="M13 10V3L4 14h7v7l9-11h-7z"*/}
        {/*            />*/}
        {/*          </svg>*/}
        {/*        </div>*/}
        {/*        <div className="mt-5">*/}
        {/*          <h5 className="text-lg leading-6 font-medium text-gray-200">*/}
        {/*            {t("components.whyUs.three.title")}*/}
        {/*          </h5>*/}
        {/*          <p className="mt-2 text-base leading-6 text-gray-400">*/}
        {/*            {t("components.whyUs.three.subtitle")}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

      {/* Comissions */}

      {/*<div className="bg-gray-50 pt-12 sm:pt-16">*/}
      {/*  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="max-w-4xl mx-auto text-center">*/}
      {/*      <h2*/}
      {/*        id="commission"*/}
      {/*        className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"*/}
      {/*      >*/}
      {/*        {t("generic.commission")}*/}
      {/*      </h2>*/}
      {/*      <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">*/}
      {/*        {t("components.commission.subtitle")}*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="mt-10 pb-12 bg-white sm:pb-16">*/}
      {/*    <div className="relative">*/}
      {/*      <div className="absolute inset-0 h-1/2 bg-gray-50"></div>*/}
      {/*      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*        <div className="max-w-4xl mx-auto">*/}
      {/*          <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">*/}
      {/*            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center  sm:border-r">*/}
      {/*              <dt*/}
      {/*                className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"*/}
      {/*                id="item-1"*/}
      {/*              >*/}
      {/*                FTD 0*/}
      {/*              </dt>*/}
      {/*              <dd*/}
      {/*                className="order-1 text-5xl leading-none font-extrabold text-gray-800"*/}
      {/*                aria-describedby="item-1"*/}
      {/*              >*/}
      {/*                <h2>25%</h2>*/}
      {/*              </dd>*/}
      {/*            </div>*/}
      {/*            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center  sm:border-l sm:border-r">*/}
      {/*              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">*/}
      {/*                FTD 1-5*/}
      {/*              </dt>*/}
      {/*              <dd className="order-1 text-5xl leading-none font-extrabold text-gray-800">*/}
      {/*                <h2>30%</h2>*/}
      {/*              </dd>*/}
      {/*            </div>*/}
      {/*            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center  sm:border-l">*/}
      {/*              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">*/}
      {/*                FTD 6-10*/}
      {/*              </dt>*/}
      {/*              <dd className="order-1 text-5xl leading-none font-extrabold text-gray-800">*/}
      {/*                <h2>35%</h2>*/}
      {/*              </dd>*/}
      {/*            </div>*/}
      {/*            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center  sm:border-r">*/}
      {/*              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">*/}
      {/*                FTD 11-20*/}
      {/*              </dt>*/}
      {/*              <dd className="order-1 text-5xl leading-none font-extrabold text-gray-800">*/}
      {/*                <h2>40%</h2>*/}
      {/*              </dd>*/}
      {/*            </div>*/}
      {/*            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center  sm:border-l sm:border-r">*/}
      {/*              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">*/}
      {/*                FTD 21-30*/}
      {/*              </dt>*/}
      {/*              <dd className="order-1 text-5xl leading-none font-extrabold text-gray-800">*/}
      {/*                <h2>45%</h2>*/}
      {/*              </dd>*/}
      {/*            </div>*/}
      {/*            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center  sm:border-l">*/}
      {/*              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">*/}
      {/*                FTD 31+*/}
      {/*              </dt>*/}
      {/*              <dd className="order-1 text-5xl leading-none font-extrabold text-gray-800">*/}
      {/*                <h2>50%</h2>*/}
      {/*              </dd>*/}
      {/*            </div>*/}
      {/*          </dl>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*/!* Commissions 2 *!/*/}
      {/*<div className="bg-white overflow-hidden mb-10">*/}
      {/*  <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">*/}
      {/*      <div className="lg:col-span-1">*/}
      {/*        <h3 className="text-3xl leading-9 text-gray-900 sm:text-4xl sm:leading-10">*/}
      {/*          {t("components.commission.title")}*/}
      {/*        </h3>*/}
      {/*      </div>*/}
      {/*      <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">*/}
      {/*        <div>*/}
      {/*          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">*/}
      {/*            <svg*/}
      {/*              className="h-6 w-6"*/}
      {/*              fill="none"*/}
      {/*              strokeLinecap="round"*/}
      {/*              strokeLinejoin="round"*/}
      {/*              strokeWidth="2"*/}
      {/*              stroke="currentColor"*/}
      {/*              viewBox="0 0 24 24"*/}
      {/*            >*/}
      {/*              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>*/}
      {/*            </svg>*/}
      {/*          </div>*/}
      {/*          <div className="mt-5">*/}
      {/*            <h5 className="text-lg leading-6 font-medium text-gray-900">*/}
      {/*              {t("components.commission.one.title")}*/}
      {/*            </h5>*/}
      {/*            <p className="mt-2 text-base leading-6 text-gray-500">*/}
      {/*              {t("components.commission.one.subtitle")}*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="mt-10 sm:mt-0">*/}
      {/*          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">*/}
      {/*            <svg*/}
      {/*              className="h-6 w-6"*/}
      {/*              fill="none"*/}
      {/*              strokeLinecap="round"*/}
      {/*              strokeLinejoin="round"*/}
      {/*              strokeWidth="2"*/}
      {/*              stroke="currentColor"*/}
      {/*              viewBox="0 0 24 24"*/}
      {/*            >*/}
      {/*              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>*/}
      {/*            </svg>*/}
      {/*          </div>*/}
      {/*          <div className="mt-5">*/}
      {/*            <h5 className="text-lg leading-6 font-medium text-gray-900">*/}
      {/*              {t("components.commission.two.title")}*/}
      {/*            </h5>*/}
      {/*            <p className="mt-2 text-base leading-6 text-gray-500">*/}
      {/*              {t("components.commission.two.subtitle")}*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="mt-10 sm:mt-0">*/}
      {/*          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">*/}
      {/*            <svg*/}
      {/*              className="h-6 w-6"*/}
      {/*              fill="none"*/}
      {/*              strokeLinecap="round"*/}
      {/*              strokeLinejoin="round"*/}
      {/*              strokeWidth="2"*/}
      {/*              stroke="currentColor"*/}
      {/*              viewBox="0 0 24 24"*/}
      {/*            >*/}
      {/*              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>*/}
      {/*            </svg>*/}
      {/*          </div>*/}
      {/*          <div className="mt-5">*/}
      {/*            <h5 className="text-lg leading-6 font-medium text-gray-900">*/}
      {/*              {t("components.commission.three.title")}*/}
      {/*            </h5>*/}
      {/*            <p className="mt-2 text-base leading-6 text-gray-500">*/}
      {/*              {t("components.commission.three.subtitle")}*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="mt-10 sm:mt-0">*/}
      {/*          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">*/}
      {/*            <svg*/}
      {/*              className="h-6 w-6"*/}
      {/*              fill="none"*/}
      {/*              strokeLinecap="round"*/}
      {/*              strokeLinejoin="round"*/}
      {/*              strokeWidth="2"*/}
      {/*              stroke="currentColor"*/}
      {/*              viewBox="0 0 24 24"*/}
      {/*            >*/}
      {/*              <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
      {/*            </svg>*/}
      {/*          </div>*/}
      {/*          <div className="mt-5">*/}
      {/*            <h5 className="text-lg leading-6 font-medium text-gray-900">*/}
      {/*              {t("components.commission.four.title")}*/}
      {/*            </h5>*/}
      {/*            <p className="mt-2 text-base leading-6 text-gray-500">*/}
      {/*              {t("components.commission.four.subtitle")}*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    /!*<div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-20">*!/*/}
      {/*    /!*  <div className="rounded-md shadow">*!/*/}
      {/*    /!*    <SignUverifyCallbackButton className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">*!/*/}
      {/*    /!*      {t("generic.becomeOurPartner")}*!/*/}
      {/*    /!*    </SignUverifyCallbackButton>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<About />*/}

      {/*<Faq />*/}



      {/*<Cta />*/}

      {/*<Footer />*/}
    </>
  );
}

export const getStaticProps = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`); // Import locale
  return { props: { table } }; // Passed to `/pages/_app.tsx`
};
