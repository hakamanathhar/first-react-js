import React, { Component } from 'react';

import Header from 'parts/Header';
import LandingPages from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories';
import Testimonial from 'parts/Testimonial';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount(){
        window.title = "Staycation | Home";
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <>
                <Header {...this.props}/>
                <Hero refMostPicked={this.refMostPicked} data={LandingPages.hero}/>
                <MostPicked refMostPicked={this.refMostPicked} data={LandingPages.mostPicked}/>
                <Categories data={LandingPages.categories}/>
                <Testimonial data={LandingPages.testimonials}/>
                <Footer/>
            </>
        );
    }
    
}
