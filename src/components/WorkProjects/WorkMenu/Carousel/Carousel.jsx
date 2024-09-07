import React, { useState } from 'react'
import './Carousel.css'

//get image array as props

const Carousel = (props) => {
    const [index, setIndex] = useState(0);
    const length = props.project.imgArr.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className="carousel">
            {props.linkDisable ? <img src={props.project.imgArr[index]} alt="" /> : <a href={props.project.href}><img src={props.project.imgArr[index]} alt="" /></a>}
            <button onClick={handlePrevious}><i className="fa-solid fa-arrow-left"></i></button>
            <button onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default Carousel
