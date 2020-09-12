import React from 'react';
import './Home.css';
import Product from './Product';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {

    const properties = {
        duration: 1000,
        autoplay: true,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        // indicators: i => <div className="indicator">{i + 1}</div>
    };

    const slideImages = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/MonsterSeries/V203057508_SamsungM_M21_M31_GW_tall_hero_1500x600._CB410822764_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/LPG/LPG_Hero_PC_1500x600._CB407755280_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/September/SSW/GW/GW_PC_1500x600._CB404931378_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Sports/XCM_Manual_ORIGIN_1261289_1333735_IN_in_fitness_days_event_sep_gw_in_en_3328889_1500x600_1X_en_IN._CB405086418_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Accessories/GW/PC-acc_june20_DesktopHero_1500x600._CB429195970_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/realmeBudsClassic/White/V248982080_WLA-realme_Buds_Classic_White_Mob_Hero_1242x450._CB405393760_.jpg"
    ];

    return (
        <div className='home'>

            {/* <p>I am the home component</p> */}

            <div className='home__container'>
                {/* <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg' alt='Samsung Galazy M51' /> */}

                <Slide {...properties}>
                    {slideImages.map((each, index) => (
                        //   <div key={index} className="each-slide">
                        <img key={index} className='home__image' src={each} alt="sample" />
                        //   </div>
                    ))}
                </Slide>


                {/* <div className="slide-container">
                    <Slide duration={2000} {...properties}>
                        {slideImages.map((each, index) => (
                            <div key={index} className="each-slide">
                                <img className="lazy" src={each} alt="sample" />
                            </div>
                        ))}
                    </Slide>
                </div> */}


                <div className='home__row'>
                    <Product
                        id='214324'
                        title={`The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses`}
                        price={29.99}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                        rating={5}
                    />
                    <Product
                        id='4326483'
                        title={'KenWood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Doug Hook and Whisk, 5 Litre Glass Bowl'}
                        price={239.0}
                        image={'https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SX679_.jpg'}
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
                        title={'Apple iPad Pro (2017) 12.9in 64GB Wi-Fi Tablet, Space Gray (Renewed)'}
                        price={799.77}
                        image={'https://m.media-amazon.com/images/I/61jpKblMqtL._AC_UY218_.jpg'}
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
