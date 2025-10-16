import { Person, Search } from 'react-bootstrap-icons';
import './navbar.css';
import { useAuth, useCategory, useDate } from '../../context';
import { Link } from 'react-router';
export const Navbar = () => {
  const { single, setSingle } = useCategory();
  const {
    ismodalopen,
    checkInDate,
    date,
    checkOutDate,
    destination,
    datedispatch,
  } = useDate();

  const { isAuthOpen, authDispatch } = useAuth();

  const handlesearch = () => {
    datedispatch({ type: 'IS_SEARCH_MODAL' });
  };

  const handleauth = () => {
    authDispatch({
      type: "IS_AUTHOPEN"
    })
  }
  return (
    <header className='heading d-flex gap-bolder align-center'>
      <h1 className='heading-title'>
        <Link className='travel' to='/'>
          TravelO
        </Link>
      </h1>

      <div
        className='form-container d-flex align-items-center shadow'
        onClick={handlesearch}
      >
        <span className='form-option'>{destination || 'Any Where'}</span>
        <span className='border-right-1px'></span>
        <span className='form-option'>
          {checkInDate && checkOutDate
            ? `${checkInDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            })} -${checkOutDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            })}`
            : 'Any week'}
        </span>
        <span className='border-right-1px'></span>
        <span className='form-option'>
          {date && date > 0 ? `${date} guests` : `Add guests`}
        </span>
        <span className='search'>
          <Search size={18} className='search-btn' />
        </span>
      </div>

      <nav className='nav' onClick={handleauth}>
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
