import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="bg-neutral-900">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <Image src="/logo.png" alt="Logo" width={64} height={64} />
                </div>

                <p
                    className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400"
                >
                    Vaidik Innovation Labs Pvt. Ltd. (VIL) is formed by Industry experts with goal to offer CBS (Finacle) services with perfection.
                </p>

                <nav aria-label="Footer Nav" className="mt-12">
                    <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <Link
                                className="transition text-white hover:text-white/75"
                                href="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition text-white hover:text-white/75"
                                href="/services"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition text-white hover:text-white/75"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <div className='flat-under'>
                        <li className='grow-container'>
                            <Link href="#" className='to-twitter circle-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" className='h-6 w-6 fa fa-twitter fa-fw'><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                            </Link>
                        </li>
                        <li className='grow-container'>
                            <Link href="#" className='to-red circle-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="white" className='h-6 w-6 fa fa-google-plus fa-fw'><path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" /></svg>
                            </Link>
                        </li>
                        <li className='grow-container'>
                            <Link href="#" className='to-facebook circle-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" className='h-6 w-6 fa fa-facebook fa-fw'><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            </Link>
                        </li>
                        <li className='grow-container'>
                            <Link href="https://www.linkedin.com/company/vinnovationlabs/" target="_blank" className='to-linkedin circle-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" className='h-6 w-6 fa fa-linkedin fa-fw'><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                            </Link>
                        </li>
                        <li className='grow-container'>
                            <Link href="#" className='to-reddit circle-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" className='h-6 w-6 fa fa-reddit-alien fa-fw'><path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z" /></svg>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer