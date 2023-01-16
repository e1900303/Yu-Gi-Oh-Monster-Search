import { React, Component } from 'react';
import './card.styles.css';

class Card extends Component {
    render() {
        const { id, name, level, atk, def } = this.props.monster
        return (
            <div className='card-container' key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name}`} />
                <h2>{name}</h2>
                <h3>LEVEL: {level}</h3>
                <h3>ATK: {atk}</h3>
                <h3>DEF: {def}</h3>
            </div>
        )
    }
}

export default Card;