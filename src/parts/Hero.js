import React from 'react';

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrames from 'assets/images/img-hero-frame.png';
import IconCities from 'assets/images/icons/ic-cities.svg';
import IconTraveler from 'assets/images/icons/ic-traveler.svg';
import IconTreasure from 'assets/images/icons/ic-treasure.svg';
import Button from 'elements/button';
import Fade from 'react-reveal/Fade';

import numberFormat from 'utils/formatNumber'

export default function Hero(props) {
    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }


    return (
        <Fade bottom>
            <section className="container pt-4 mb-7">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 align-items-center">
                        <h1 className="font-weight-bold line-height-1 mb-3 text-left">
                            Forget Busy Work, <br/>
                            Start Next Vacation
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 text-justify w-75">
                            We provide what you need to enjoy your holiday with family. Time to
                            make another memrable moments.
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show Me Now
                        </Button>

                        <div className="row" style={{ marginTop: 80}}>
                            <div className="col" style={{marginRight: 35}}>
                                <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                                <h6 className="mt-3 font-weight-bolder">
                                    {numberFormat(props.data.travelers)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        travelers
                                    </span>
                                </h6>
                            </div>
                            <div className="col" style={{marginRight: 35}}>
                                <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasure`} />
                                <h6 className="mt-3 font-weight-bolder">
                                    {numberFormat(props.data.treasures)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        treasures
                                    </span>
                                </h6>
                            </div>
                            <div className="col">
                                <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
                                <h6 className="mt-3 font-weight-bolder">
                                    {numberFormat(props.data.cities)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-none d-lg-block d-xl-block">
                            <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute"
                                style={{ margin: '-30px 0 0 -30px', zIndex: 1}} />
                            <img src={ImageHeroFrames} alt="Room with frame" className="img-fluid position-absolute"
                                style={{ margin: '0 -15px -15px 0'}} />
                    </div>
                </div>
            </section>
        </Fade>
    )
}
