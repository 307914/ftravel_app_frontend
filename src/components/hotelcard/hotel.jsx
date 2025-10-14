import { HeartFill, StarFill } from 'react-bootstrap-icons'
import './hotel.css'
import { useNavigate } from 'react-router'
import { useCategory } from '../../context';
import { useEffect } from 'react';
export const Hotel = ({ hotel }) => {
    const navigate = useNavigate();


    const { name, _id, address, state, rating, category } = hotel

    const handlehotelcard = () => {
        navigate(`/hotels/${name}/${category}/${_id}/reserve`)
    }
    return (
        <div className="relative card-container cursor-pointer shadow">
            <div className='product' onClick={handlehotelcard}>
                <img className="img" alt="header"
                    src={hotel?.image} />
                <div className='text-container'>
                    <span className='desc'>
                        <span className="city-name">{address},{state}</span>
                        <span className='rating'><StarFill /> <span>{rating}</span></span>
                    </span>
                    <p className='view'>{name}</p>
                    <p className='rs'>Rs. {hotel?.price} <span>night</span></p>
                </div>
            </div>
            <div className='absolute heart'>
                <button className='button btn-wishlist  d-flex align-center'>
                    <span>
                        <HeartFill size={25} />
                    </span>
                </button>
            </div>
        </div>
    )
}
