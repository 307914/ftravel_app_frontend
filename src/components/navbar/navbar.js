import { Person, Search } from 'react-bootstrap-icons';
import './navbar.css';
export const Navbar = () => {
  return (
    <header className='heading d-flex gap-bolder align-center'>
      <h1 className='heading-title'>
        <a className='link' href='/'>
          TravelO
        </a>
      </h1>
      <div className='form-container d-flex align-items-center shadow'>
        <span className='form-option'>Any Where</span>
        <span className='border-right-1px'></span>

        <span className='form-option'>Any Week</span>
        <span className='border-right-1px'></span>

        <span className='form-option'>Any Guest</span>
        <span className='search'>
          <Search size={18} className='search-btn' />
        </span>
      </div>
      <nav className='nav'>
        <div className='nav-con'>
          <span className='material-symbols-outlined profile-option menu cursor-pointer'>
            menu
          </span>
          <Person className='profile-option person cursor-point'></Person>
        </div>
      </nav>
    </header>
  );
};
