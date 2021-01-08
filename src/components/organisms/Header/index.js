import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return (
        <Router>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                            <Link to="#">
                                <span className="sr-only">Ajisaka</span>
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            <Link to="#" className="font-medium text-gray-500 hover:text-gray-900">Program</Link>

                            <Link to="#" className="font-medium text-gray-500 hover:text-gray-900">Blog</Link>

                            <Link to="#" className="font-medium text-gray-500 hover:text-gray-900">Career</Link>

                            <Link to="#" className="font-medium text-gray-500 hover:text-gray-900">Company</Link>

                            <Link to="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Masuk</Link>
                        </div>
                        </nav>
                    </div>

                    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                            </div>
                            <div className="-mr-2">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Product</Link>

                            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Features</Link>

                            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Marketplace</Link>

                            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Company</Link>
                            </div>
                            <div role="none">
                            <Link to="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                                Log in
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Provider Pelatihan dan Konsultan</span>
                            <span className="block text-indigo-600 xl:inline"> Bersertifikasi</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Menyediakan berbagai pelatihan bersertifikasi dan konsultasi di bidang Keselamatan dan Kesehatan kerja (K3), lingkungan, manajemen data, dan kualitas/produktivitas.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                            <Link to="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                Daftar Sekarang
                            </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link to="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                Telusuri Pelatihan
                            </Link>
                            </div>
                        </div>
                        </div>
                    </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i2.wp.com/www.ajisaka.co/wp-content/uploads/2019/08/OPERATOR-RIGGER.jpg?resize=840%2C560" alt="" />
                </div>
            </div>
        </Router>
    )
}

export default Header
