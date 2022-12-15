//DECLArATIONS: react -----------------
import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

//GALLERY COMPONENT =====================
function Gallery({ currentCategory }) {
    
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name}/>
        </section>
    );
};

//EXPORT Gallery -----------------------
export default Gallery;