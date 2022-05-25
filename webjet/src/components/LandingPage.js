import './LandingPage.css'
import { hotelData } from '../data/hotel-data-mock';
import HotelCard from './HotelCard';
import Filter from './Filter';
import Banner from './Banner';

const LandingPage = () => {
    
    const logo = require('../assets/webjet_logo.png') ;
    const menu = require('../assets/menu-ss.png');

    return(
        <div className='page'>
            <div className='outer-wrapper width-100'>
                <img className='menu' src={menu} alt='burgerIcon' />
                <img src={logo} className='logo' alt='webjet logo'/>

                <div className='inner-wrapper flex'>
                    <div className='heading-text'>550 Hotels Available in Melbourne</div>

                    <div className='content-container flex width-100'>
                        <div className='tablet-off'><Filter/></div>
                        <div className='hotel flex width-100'>
                            {hotelData && hotelData.map((hotel)=>
                            <HotelCard hotel={hotel} key={hotel.id}/>
                            )}
                        </div>
                        <div className='tablet-off'><Banner/></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LandingPage