import React from 'react';
import SectionList from './SectionList';

const places=[
    {
        name:'Restaurants',
        img:'https://i.ibb.co/ThVs0Zn/camera.png'
    },
    {
        name:'Sightseeing',
        img:'https://i.ibb.co/6v2FvXN/map.png'
    },
    {
        name:'Shops & Boutiques',
        img:'https://i.ibb.co/phFDfwD/t-shirt.png'
    },
    {
        name:'Where to Stay',
        img:'https://i.ibb.co/PhtpJ0v/earth-globe.png'
    }
]

const AnotherSection = () => {
    return (
        <section className="container">
            <div className="text-center mb-5  ">
                <h5 className="mt-5 mb-5">Enjoys Your</h5>
                <h1>Winter Holiday</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum.</p>
            </div>
            <div style={{height:'300px'}} className="row text-center mt-4 pt-5">
               {
                    places.map(place=><SectionList place={place}></SectionList>)
                }
            </div>
        </section>
    );
};

export default AnotherSection;