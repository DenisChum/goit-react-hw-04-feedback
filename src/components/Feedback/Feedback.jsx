import React from 'react';
import propTypes from 'prop-types';
import { List, Item } from './Feedback.styled'


export default function Feedback({options, handleIncrement}) {
    const buttonName = Object.keys(options);
    return (
        <List>{buttonName.map(namestate => (
            <Item key={namestate}>
                <button onClick={() => handleIncrement (namestate)} type='button'>{namestate}</button>   
        </Item>
        ))}
    </List>)
}

Feedback.propTypes = {
options: propTypes.object.isRequired
}