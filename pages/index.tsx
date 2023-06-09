import Head from 'next/head'
import Hero from '../components/Hero'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Vaidik Innovation Labs Pvt. Ltd.</title>
                <link rel='canonical' href='https://www.vaidiklabs.com' />
                <meta name="description" content="Vaidik Innovation Labs Pvt. Ltd. (VIL) is formed by Industry experts with goal to offer CBS services with perfection. We thrive to serve the industry with our unique model of expertise deliberation. We target to serve Banking Industry at the fullest. VIL has strong credentials in the area of core banking implementation. VIL&apos;s Leadership come with a blend of Technical and Subject Matter Experts who have executed projects of high complexity." />
                <meta name='keywords' content='banking solutions, banking solutions meaning, banking solutions companies, banking solutions investors group, banking solutions in india, banking solution architect, banking solution architecture, advanced banking solutions, banking industry trends, banking industry analysis' />
                <meta name="robots" content="index, follow" />
            </Head>
            <main>
                <Hero screen={0} />
                <section className="bg-white mt-10 mb-20">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize md:text-3xl lg:text-4xl">Why<br /> Choose Us?</h1>

                        <div className="mt-2">
                            <span className="inline-block w-40 h-1 bg-[#FF7000] rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-[#FF7000] rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-[#FF7000] rounded-full"></span>
                        </div>

                        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-8 md:grid-cols-2">
                                <Link href='/contact'>
                                    <div data-aos="fade-right" data-aos-delay="300" className="space-y-3 border rounded-lg p-6 borer-black shadow-lg transition-all hover:translate-x-2 hover:shadow-xl md:-translate-y-4 group">
                                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize group-hover:text-blue-500">Core Banking Solutions</h1>

                                        <p className="text-gray-500">
                                            Our products work seamlessly with the renowned CBS platform.
                                        </p>
                                    </div>
                                </Link>

                                <Link href='/contact'>
                                    <div data-aos="fade-right" className="space-y-3 border rounded-lg p-6 borer-black shadow-lg transition-all hover:translate-x-2 hover:shadow-xl md:translate-y-4 group">
                                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize group-hover:text-blue-500">IT Support and Consultancy</h1>

                                        <p className="text-gray-500">
                                            We  offer a range of consulting services, business process engineering, software product development to meet your dynamic IT requirement.
                                        </p>
                                    </div>
                                </Link>

                                <Link href='/contact'>
                                    <div data-aos="fade-right" data-aos-delay="300" className="space-y-3 border rounded-lg p-6 borer-black shadow-lg transition-all hover:translate-x-2 hover:shadow-xl md:-translate-y-4 group">
                                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize group-hover:text-blue-500">Application Integration Channels</h1>

                                        <p className="text-gray-500">
                                            Allow your consumers to easily access financial services like loan servicing and application.
                                        </p>
                                    </div>
                                </Link>

                                <Link href='/contact'>
                                    <div data-aos="fade-right" className="space-y-3 border rounded-lg p-6 borer-black shadow-lg transition-all hover:translate-x-2 hover:shadow-xl md:translate-y-4 group">
                                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize group-hover:text-blue-500">Experienced Team</h1>

                                        <p className="text-gray-500">
                                            We are a team of talented software engineers trying to deliver outstanding and practical solutions for your daily life and work.
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="500" className="hidden lg:flex lg:w-1/2 lg:justify-center">
                                <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <h3 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    More Than a Decade of Experience in BFSI Industry <br className="md:block hidden" />
                </h3>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center md:px-10">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden sm:pr-0 pr-10" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0 sm:pr-0 pr-10" />

                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-2/5 bg-white sm:absolute relative z-5 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-semibold text-gray-800">500+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Software Solutions</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-2/5 bg-white sm:absolute relative z-5 mt-4 ml-auto xl:-mt-80 sm:-mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-gray-800">10+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Consultants</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-2/5 bg-white sm:absolute relative z-5 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-gray-800">10+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Clients</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-2/5 bg-white sm:absolute relative z-5 md:mt-0 sm:-mt-5 mt-4 ml-auto right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-gray-800">10+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Countries</p>
                    </div>
                </div>
                <Hero screen={1} />
            </main>
        </>
    )
}
