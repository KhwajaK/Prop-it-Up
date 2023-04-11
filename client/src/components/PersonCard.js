import React, { useState } from 'react';

const Header = (props) => {
    const [ bDay, setBDay ] = useState(props.initialAge);
    return (
        <div>
            <h1>
                {props.lastName}, {props.firstName}
            </h1>
            <h6>Age: { bDay }</h6>
            <h6>Hair Color: {props.hairColor}</h6>
            <button onClick= { () => setBDay(bDay + 1 )}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );

}
export default Header;