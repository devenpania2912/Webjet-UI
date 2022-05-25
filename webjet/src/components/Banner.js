import './Banner.css'

const Banner = () =>{

    const banner = require('./banner.png');

    return(
        <div className='banner-container'>
           <img className='banner' src={banner} alt='banner'/>
        </div>
    )
}

export default Banner