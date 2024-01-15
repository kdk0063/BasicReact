import { useState } from 'react';

import './Animalshow.css';

import bird from '../../images/Animals/bird.svg'
import cat from '../../images/Animals/cat.svg'
import cow from '../../images/Animals/cow.svg'
import dog from '../../images/Animals/dog.svg'
import gator from '../../images/Animals/gator.svg'
import heart from '../../images/Animals/heart.svg'
import horse from '../../images/Animals/horse.svg'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse,
}

function AnimalShow({type}){
    const [clicks, setClicks] = useState(0);

    const handleAnimalClick = () =>{
        setClicks(clicks + 1)
    }

    return (
        <div className="animal-show" onClick={handleAnimalClick}>
            <img className="animal" alt="animal" src={svgMap[type]} />  
            <img className="heart"
                alt="heart" 
                src={heart} 
                style={{width: 10 + 10 * clicks + 'px' }}
            />
        </div>
    )
};

export default AnimalShow;