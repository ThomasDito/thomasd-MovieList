import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './NavbarProd.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavbarProd = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(true);

    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;

        const onScroll = () => {
            const currentY = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                const goingDown = currentY > lastY;
                const scrollTrue = goingDown

                // opsional: jangan ngilang saat masih dekat atas
                if (currentY < 80) setShow(true);
                else setShow(!scrollTrue);

                lastY = currentY;
                ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navigation = [
        { name: 'Popular', Link: '/popular', current: false },
        { name: 'Top Rated', Link: '/toprated', current: false },
        { name: 'Upcoming', Link: '/upcoming', current: false },
        { name: 'Trending', Link: '/trending', current: false },
    ]

    return (
        <Disclosure
            as="nav"
            className={`header fixed left-0 right-0 top-0 z-40 bg-zinc-950/80 backdrop-blur-md after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 transition-all ease-in-out duration-500 ${show ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="mx-auto h-24 py-6 px-2 sm:px-8 lg:px-10">
                <div className="relative flex items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-8 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex items-center justify-center lg:items-stretch lg:justify-start mx-auto lg:mx-0">
                        <div className="flex items-center">
                            <h1 
                            className='logo text-2xl lg:text-4xl font-bold cursor-pointer' 
                            onClick={() => navigate('/')}>
                                MovieList
                            </h1>
                        </div>
                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink to={item.Link}
                                        key={item.name}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={({ isActive }) => 
                                            classNames(
                                                isActive ? "text-red-600" : "transition-colors ease-in-out duration-100 hover:text-red-600", "px-3 py-2 text-base/loose font-semibold"
                                            )
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                        <ul>
                            <NavLink 
                                to={'/search'}
                                className={({ isActive }) => 
                                    classNames(
                                        isActive ? "text-red-600" : "transition-colors duration-100 ease-in-out hover:text-red-600"
                                    )
                                }
                            >
                                <li className='text-base/loose font-semibold'>
                                    Search <span><i className="ri-search-line"></i></span>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>

            <DisclosurePanel className={`lg:hidden`}>
                <div className="space-y-1 px-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-950/50 text-white' : 'hover:bg-white/5',
                                'block w-full rounded-md',
                                )
                            }
                            >
                                <Link to={item.Link}
                                    key={item.name}
                                    aria-current={item.current ? 'page' : undefined}
                                    className="block rounded-md px-3 py-2 text-base/loose font-semibold transition-colors ease-in-out duration-100 hover:text-red-600"
                                >
                                    {item.name}
                                </Link>
                        </DisclosureButton>
                    ))}
                    <div className='block sm:hidden'>
                        <Link to={'/search'}>
                            <li className='block w-full text-center rounded-md px-3 py-2 text-base/loose font-semibold transition-colors duration-100 ease-in-out hover:text-red-600 hover:bg-white/5'>
                                Search <span><i className="ri-search-line"></i></span>
                            </li>
                        </Link>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export default NavbarProd
