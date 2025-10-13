import { HeartFill, StarFill } from 'react-bootstrap-icons'
import './hotel.css'
export const Hotel = ({ hotel }) => {

    const { price, image, name, id, address, state, rating } = hotel
    return (
        <div className="relative card-container cursor-pointer shadow">
            <div className='product'>
                <img className="img" alt="header"
                    src={image} />
                <div className='text-container'>
                    <span className='desc'>
                        <span className="city-name">{address},{state}</span>
                        <span className='rating'><StarFill /> <span>{rating}</span></span>
                    </span>
                    <p className='view'>{name}</p>
                    <p className='rs'>Rs. {price} <span>night</span></p>
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
