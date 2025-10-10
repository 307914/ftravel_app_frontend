import { Person } from 'react-bootstrap-icons';
import './navbar.css';
export const Navbar = () => {
  return (
    <header className='heading d-flex gap-bolder align-center'>
      <h1 className='heading-title'>
        <a className='link' href='/'>
          TravelO
        </a>
      </h1>
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
