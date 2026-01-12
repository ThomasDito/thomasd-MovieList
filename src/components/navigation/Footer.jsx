import { NavLink, useNavigate } from 'react-router-dom'
import './Footer.css'

const Footer = ({ homeScroll }) => {
    const navigate = useNavigate()

    const github = import.meta.env.VITE_GITHUB

    const currentYear = new Date().getFullYear()

    return(
        <footer className="mt-12 bg-neutral-primary-soft">
            <div className="mx-auto w-full p-4 py-2">
                <hr className="my-6 border-zinc-600 sm:mx-auto lg:my-8" />
                <div className="lg:flex lg:justify-between px-4 gap-2">
                    <div className="mb-6 lg:mb-0 hidden lg:flex lg:flex-col items-start gap-2">
                        <div className="logo">
                            <h1 className='text-5xl font-bold cursor-pointer' onClick={() => navigate('/')}>MovieList</h1>
                        </div>
                        <h2 className='max-w-prose text-sm font-light opacity-60'>
                            MovieList is a movie catalog website that provides a curated listing of films from around the world, ranging from local productions to international releases. The website features multiple movie categories such as now playing, trending, popular, top rated, and upcoming. Each movie is presented in a card format containing its poster, title, release year, and rating. MovieList also offers a detailed movie page that displays comprehensive information including synopsis, genres, director, cast, and other relevant details, allowing users to easily explore and discover movies of interest.
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-heading uppercase">Category</h2>
                            <ul className="text-body font-medium">
                                <li className="mb-4">
                                    <NavLink to={'/'} className="text-red-700 hover:opacity-70 hover:underline">
                                        Now Playing
                                    </NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to={'/popular'} className="text-red-700 hover:opacity-70 hover:underline">
                                        Popular
                                    </NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to={'/toprated'} className="text-red-700 hover:opacity-70 hover:underline">
                                        Top Rated
                                    </NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to={'/upcoming'} className="text-red-700 hover:opacity-70 hover:underline">
                                        Upcoming
                                    </NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to={'/trending'} className="text-red-700 hover:opacity-70 hover:underline">
                                        Trending
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-heading uppercase">Resources</h2>
                            <ul className="text-body font-medium">
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" target='_blank' rel='noopener noreferrer' className="text-red-700 hover:opacity-70 hover:underline">Tailwind CSS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" target='_blank' rel='noopener noreferrer' className="text-red-700 hover:opacity-70 hover:underline">Flowbite</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="https://headlessui.com/" target='_blank' rel='noopener noreferrer' className="text-red-700 hover:opacity-70 hover:underline">HeadlessUI</a>
                                </li>
                                <li>
                                    <a href="https://www.themoviedb.org/" target='_blank' rel='noopener noreferrer' className="text-red-700 hover:opacity-70 hover:underline">TMDB</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-heading uppercase">Legal</h2>
                            <ul className="text-body font-medium">
                                <li className="mb-4">
                                    <a href="https://www.themoviedb.org/privacy-policy" target='_blank' rel='noopener noreferrer' className="text-red-700 hover:opacity-70 hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://www.themoviedb.org/api-terms-of-use" target='_blank' rel='noopener noreferrer' className="text-red-700 hover:opacity-70 hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-start lg:hidden gap-2 mt-6">
                        <div className="logo">
                            <h1 className='text-5xl font-bold cursor-pointer'>MovieList</h1>
                        </div>
                        <h2 className='max-w-prose text-sm font-light opacity-60'>
                            {/* MovieList adalah sebuah website katalog film yang menyediakan daftar film dari berbagai belahan dunia, mulai dari film lokal hingga internasional. Website ini menyajikan berbagai segmen film seperti now playing, trending, popular, top rated, hingga film yang akan segera dirilis. Setiap film ditampilkan dalam bentuk kartu yang memuat poster, judul, tahun rilis, dan rating. Selain itu, MovieList juga menyediakan halaman detail film yang menampilkan informasi lengkap seperti deskripsi, genre, sutradara, pemeran, dan detail penting lainnya, sehingga pengguna dapat dengan mudah menemukan dan mengenal film yang ingin mereka tonton. */}
                            MovieList is a movie catalog website that provides a curated listing of films from around the world, ranging from local productions to international releases. The website features multiple movie categories such as now playing, trending, popular, top rated, and upcoming. Each movie is presented in a card format containing its poster, title, release year, and rating. MovieList also offers a detailed movie page that displays comprehensive information including synopsis, genres, director, cast, and other relevant details, allowing users to easily explore and discover movies of interest.
                        </h2>
                    </div>
                </div>
                
                <hr className="my-6 border-zinc-600 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between mb-2">
                    <div className="flex items-center justify-center sm:hidden gap-6 sm:gap-3 mb-3">
                        <button className='px-2 bg-zinc-700 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125' onClick={() => homeScroll()}>
                            <i className="ri-arrow-up-s-line text-3xl font-bold"></i>
                        </button>
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label='Github' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                            <i className="ri-github-fill text-3xl"></i>
                        </a>
                        <a href="#" rel="noopener noreferrer" aria-label='Discord' className='transition-transform duration-300 ease-in-out hover:scale-135' onClick={(e) => e.preventDefault()}>
                            <i className="ri-discord-fill text-3xl"></i>
                        </a>
                        <a href="#" rel="noopener noreferrer" aria-label='Instagram' className='transition-transform duration-300 ease-in-out hover:scale-135' onClick={(e) => e.preventDefault()}>
                            <i className="ri-instagram-line text-3xl"></i>
                        </a>
                        <a 
                        href="#" rel="noopener noreferrer" aria-label='Telegram'
                        className='transition-transform duration-300 ease-in-out hover:scale-135'
                        onClick={(event) => event.preventDefault()}
                        >
                            <i className="ri-telegram-2-fill text-3xl"></i>
                        </a>
                    </div>
                    <div className="max-w-prose text-sm/loose">
                        &copy; 2025-{currentYear} <strong>MovieList</strong> by <a href="https://thomasdito-portfolio.vercel.app/" target='_blank' rel="noopener noreferrer" className='transition-all duration-200 ease-in-out hover:opacity-60 hover:text-red-500'>Thomas D. Rigorastio</a>. All Rights Reserved.
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:gap-3 ">
                        <button className='px-2 bg-zinc-700 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125' onClick={() => homeScroll()}>
                            <i className="ri-arrow-up-s-line text-3xl lg:text-2xl font-bold"></i>
                        </button>
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label='Github' className='transition-transform duration-300 ease-in-out hover:scale-135'>
                            <i className="ri-github-fill text-3xl lg:text-2xl"></i>
                        </a>
                        <a href="#" rel="noopener noreferrer" aria-label='Discord' className='transition-transform duration-300 ease-in-out hover:scale-135' onClick={(e) => e.preventDefault()}>
                            <i className="ri-discord-fill text-3xl lg:text-2xl"></i>
                        </a>
                        <a href="#" rel="noopener noreferrer" aria-label='Instagram' className='transition-transform duration-300 ease-in-out hover:scale-135' onClick={(event) => event.preventDefault()}>
                            <i className="ri-instagram-line text-3xl lg:text-2xl"></i>
                        </a>
                        <a 
                        href="#" rel="noopener noreferrer" aria-label='Telegram'
                        className='transition-transform duration-300 ease-in-out hover:scale-135'
                        onClick={(event) => event.preventDefault()}
                        >
                            <i className="ri-telegram-2-fill text-3xl lg:text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer