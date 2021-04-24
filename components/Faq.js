import {useI18n} from "next-rosetta";

function Faq() {
  const { t } = useI18n();

  function createMarkup(str) {
    return {__html: str};
  }

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2
          id="faq"
          className="text-3xl leading-9 font-extrabold text-gray-900"
        >
          {t('components.faq.title')}
        </h2>
        <div className="mt-6 border-t-2 border-gray-100 pt-10">
          <dl className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <h3>{t('components.faq.one.title')}</h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    {t('components.faq.one.subtitle')}
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <h3>{t('components.faq.two.title')}</h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    {t('components.faq.two.subtitle')}
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <h3>{t('components.faq.three.title')}</h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    {t('components.faq.three.subtitle')}
                  </p>
                </dd>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <h3>{t('components.faq.four.title')}</h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    {t('components.faq.four.subtitle')}
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <h3>{t('components.faq.five.title')}</h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500" dangerouslySetInnerHTML={createMarkup(t('components.faq.five.subtitle'))} />
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <h3>{t('components.faq.six.title')}</h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500" dangerouslySetInnerHTML={createMarkup(t('components.faq.six.subtitle'))} />
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Faq
