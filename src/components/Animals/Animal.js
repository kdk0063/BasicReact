import React, { useState } from 'react';

import './Animal.css';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    
    return animals[Math.floor(Math.random() * animals.length)];
}

function Animals() {
    // this array is js destructuring, fancy way to get access to the piece of 'state' + 'setter'
    // const [count, setCount] = useState(0); //define piece of state w/initial value
    // Never going to... 
    // count = 123 - do not change 'count' state directly, use 'stateSetter' to modify the value   

    // this event handler || callback function = ( this is called automatically by some other piece of code)
    // Naming convention = handle + EventName || on + Button + Click - not required but community convention
    // const handleClick = () => {
    //     setCount(count + 1)
    //     //updating piece of state *WILL CAUSE* React to render(re-run) the component
    // };

    const [animals, setAnimals] = useState([]);

    const handleClick = () =>{
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Very Basic React Event Handling</p>
                </div>
            </section>

            <div className="animalShowContainer">
                {/* pass the function as prop to plain element "{handleClick}" into onClick event handler */}
                <button className="" onClick={handleClick}>Add Animal</button>
                {/* <div>Number of animals: {count}</div> */}

                <div className="animal-list">{renderedAnimals}</div>
            </div>
        </div>
    )
};

export default Animals;
