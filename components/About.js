import {useI18n} from "next-rosetta";

function About() {
  const { t } = useI18n();

  return (
    <div className="py-16 bg-gray-900 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="brand"
            className="text-3xl leading-9 text-white sm:text-4xl sm:leading-10"
          >
            {t('components.about.title')}
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-300 sm:mt-4">
            {t('components.about.subtitle')}
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
              {t('components.about.one.title')}
            </dt>
            <dd className="order-1 text-5xl leading-none text-white">
              <h2>
                <div className="mb-3">💬</div>
                {t('components.about.one.subtitle')}
              </h2>
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
              {t('components.about.two.title')}
            </dt>
            <dd className="order-1 text-5xl leading-none text-white">
              <h2>
                <div className="mb-3">🎰</div>
                {t('components.about.two.subtitle')}
              </h2>
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-300">
              {t('components.about.three.title')}
            </dt>
            <dd className="order-1 text-5xl leading-none text-white">
              <h2>
                <div className="mb-3">🏆 </div>
                {t('components.about.three.subtitle')}
              </h2>
            </dd>
          </div>
        </dl>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-white uppercase">
                      {t('components.about.license')}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-300">
                      {t('components.about.curacao')}
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-white uppercase">
                      {t('components.about.software')}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-300">
                      NetEnt, Microgaming, Play’N GO, Amatic Industries,
                      Endorphina, Pragmatic Play, Yggdrasil, Betsoft,
                      iSoftBet, BGaming (SoftSwiss), Red Tiger, Quickspin,
                      Thunderkick, GameArt, Booming Games, Habanero, Belatra,
                      Spinomenal, EGT, Platipus, ELK, Ezugi, Lucky Streak,
                      Vivogaming, Quickfire, Nolimit City, Wazdan, iGTech,
                      Relax Gaming, BigTimeGaming, Booongo, Playson, Push
                      Gaming, Felix Gaming, Rabcat, JFTW, IronDogStudio,
                      Genesis Gaming, Igrosoft, Lucky.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-white uppercase">
                      {t('components.about.payments')}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-300">
                      Visa, MasterCard, Bitcoin, Skrill, Neteller,
                      Paysafecard, EcoPayz, NeoSurf, WebMoney, Rapid Transfer,
                      iWallet, Astropay, SticPay, Siru, CashtoCode, iDebit,
                      Yandex Money, QIWI.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-white uppercase">
                      {t('components.about.languages')}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-300">
                      English, German, Polish, Norwegian, Finnish, Russian.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-white uppercase">
                      {t('components.about.currencies')}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-300">
                      EUR, USD, NOK, AUD, CAD, NZD, PLN, BTC, ETH, LTC, BCH,
                      DOG, RUB.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <span className=" ml-4 mt-10 inline-flex rounded-md shadow">
                <a
                  href="https://redpingw.in"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-800 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-gray-700 transition duration-150 ease-in-out"
                >
                  {t('components.about.visitCasino')}
                </a>
              </span>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0">
            <img
              className="relative mx-auto"
              width="490"
              src="/brand.png"
              alt="red pingwin casino affiliate program"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
