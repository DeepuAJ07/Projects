import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

export default function Banner(){
    return <div>
        <Carousel infiniteLoop autoPlay>
            <div className='image'>
                <img src='https://vemalls.online/images/slider-main-vemalls.jpg' alt='Vemalls'/>

            </div>
            <div className='image'>
                <img src='https://vemalls.online/images/vemalls-banner.jpg' alt='Vemalls'/>

            </div>
            <div className='image'>
                <img src='https://vemalls.online/images/slider-main-vemalls.jpg' alt='Vemalls'/>

            </div>

        </Carousel>
    </div>
}