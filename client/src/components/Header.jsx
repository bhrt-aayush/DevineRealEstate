import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-4xl mx-auto p-2'>
        <Link to="/" className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-emerald-700'>Devine</span>
          <span className='text-slate-500'>RealEstate</span>
        </Link>
        <form className='relative'>
          <input 
            type="text" 
            placeholder="Address ,City ,Or Postal" 
            className="border border-gray-300 rounded-lg pl-1 pr-10 py-1 text-sm sm:text-base focus:outline-none focus:border-slate-400"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </form>
        <ul className='flex gap-5' p>
          <li className='hidden sm:inline hover:text-teal-600'>
            <Link to="/">Home</Link>
          </li>
          <li className='hidden sm:inline hover:text-teal-600'>
            <Link to="/About">About</Link>
          </li>
          <li className='hover:text-teal-600'>
            <Link to="/SignIn">Sign In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
