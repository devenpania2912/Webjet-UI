import './HotelCard.css'

const HotelCard = (hotel) =>{

    const img= require('./hotel_image1.jpg');

    console.log("Im here",hotel);

    return(
        <div className="card flex">
            
            <div className='image-container'><img className='image' src={hotel.hotel.image} alt='Hotel'/></div>
            
            <div className='hotel-info flex'>
                <div className='info flex'>
                    <div className='hotel-name bold tb-padding'>{hotel.hotel.name}</div>
                    <div className='hotel-stars tb-padding'>{hotel.hotel.stars}</div>
                    <div className='hotel-room tb-padding'><div className='bold'>Room type:</div>{hotel.hotel.room}</div>
                
                </div>
                <div className='price flex bold'>${hotel.hotel.price}</div>
            </div>

        </div>
    )
}

export default HotelCard