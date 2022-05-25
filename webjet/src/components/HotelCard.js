import './HotelCard.css'


const HotelCard = (hotel) =>{

    const stars=[];

    for(let i=0; i<hotel.hotel.stars; i++){
        stars.push(<div>&#9830;</div>);
    }

    return(
        <div className="card flex">
            
            <div className='image-container'><img className='image' src={hotel.hotel.image} alt='Hotel'/></div>
            
            <div className='hotel-info flex'>
                <div className='info flex'>
                    <div className='hotel-name bold tb-padding'>{hotel.hotel.name}</div>
                    <div className='hotel-stars tb-padding flex'>{stars}</div>
                    <div className='hotel-room tb-padding'><div className='bold'>Room type:</div>{hotel.hotel.room}</div>
                
                </div>
                <div className='price flex bold'>
                    <div className='right-padding'>${hotel.hotel.price}</div>
                    <div className='arrow-holder'><div className='arrow-right'></div></div>
                    
                </div>
            </div>

        </div>
    )
}

export default HotelCard