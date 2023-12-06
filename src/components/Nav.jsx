import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
        <nav className='flex items-center justify-between max-container '>
            <a href="/">
                <img 
                    src={headerLogo}
                    alt='Logo'
                    width={130}
                    height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                        href={item.href}
                        className='font-montserrat laeding-normal text-lg text-slate-gray '
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            {/* <div className='hidden max-lg:block'>
                <img src={ hamburger } alt="Hamburger" width={25} height={25} />
            </div> */}
            <a href="#" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-orange-500 outline-none ring-indigo-300 transition duration-100 hover:bg-orange-500 hover:text-white focus-visible:ring active:text-orange-500 md:text-base lg:inline-block">Contact Sales</a>

            <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-orange-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-orange-500 md:text-base lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Menu
            </button>
        </nav>
    </header>
  )
}

export default Nav