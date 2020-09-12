import React from 'react';
import './Home.css';
import Product from './Product';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

function Home() {
    const properties = {
        buttonsDisabled: true,
        dotsDisabled: true,
        autoPlay: true,
        autoHeight: true,
        duration: 1000,
        mouseTrackingEnabled: false,
        touchTrackingEnabled: false,
        swipeDisabled: true,
        preventEventOnTouchMove: true,
        autoPlayInterval: 2000,
        disableAutoPlayOnAction: false,
    };
    const slideImages = [
        `${process.env.PUBLIC_URL}/slide_1.jpg`,
        `${process.env.PUBLIC_URL}/slide_2.jpg`,
        `${process.env.PUBLIC_URL}/slide_3.jpg`,
        `${process.env.PUBLIC_URL}/slide_4.jpg`,
        `${process.env.PUBLIC_URL}/slide_6.jpg`,
        `${process.env.PUBLIC_URL}/slide_7.jpg`,
    ];

    return (
        <div className='home'>
            <div className='home__container'>
                {/* <img className='home__image' src={`${process.env.PUBLIC_URL}/slide_1.jpg`} alt='Sample' /> */}

                <AliceCarousel {...properties}>
                    {slideImages.map((each, index) => (
                        <img className="home__image" src={each} alt="sample" />
                    ))}
                </AliceCarousel>

                <div className='home__row'>
                    <Product
                        id='214324'
                        title={`Razer Blade 15 Gaming Laptop 2019: Intel Core i7-9750H 6 Core, NVIDIA GeForce RTX 2070 Max-Q, 15.6" FHD 1080p 240Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB Lighting, Thunderbolt 3`}
                        price={2250.24}
                        image={'https://m.media-amazon.com/images/I/71VniIMpMkL._AC_UY218_.jpg'}
                        rating={5}
                    />
                    <Product
                        id='4326483'
                        title={'MSI GS75 Stealth 10SGS-271 17.3" 300Hz 3ms Ultra Thin and Light Gaming Laptop Intel Core i7-10750HK RTX 2080 Super 32GB 512GB NVMe SSD Win10PRO VR Ready'}
                        price={2699.0}
                        image={'https://m.media-amazon.com/images/I/710pmUkw2rL._AC_UY218_.jpg'}
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='987098'
                        title={'Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor'}
                        price={199.99}
                        image={'https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg'}
                        rating={3}
                    />
                    <Product
                        id='098774'
                        title={'Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Sandstone'}
                        price={59.99}
                        image={'https://m.media-amazon.com/images/I/51hZ1Ix1bdL._AC_UL320_.jpg'}
                        rating={5}
                    />
                    <Product
                        id='984738'
                        title={'Oculus Quest All-in-one VR Gaming Headset – 128GB'}
                        price={765.00}
                        image={'https://images-na.ssl-images-amazon.com/images/I/31AZvhYLyeL._AC_SY200_.jpg'}
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    {/* Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)
 */}
                    <Product
                        id='56577'
                        title={'Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)'}
                        price={1094.98}
                        image={'https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg'}
                        rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
