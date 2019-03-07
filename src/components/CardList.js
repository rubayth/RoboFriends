import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return(
        <div>
           {robots.map((person, i)=>{
        return (
        <Card 
            key={i} 
            id={person.id} 
            name={person.name} 
            email={person.email}
        />)

    })} 
        </div>
    );

    
}

export default CardList;