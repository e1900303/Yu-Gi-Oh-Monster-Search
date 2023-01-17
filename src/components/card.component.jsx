import { React } from 'react';
import './card.styles.css';

const Card = ({ monster }) => (
    <div className='card-container' key={monster.id}>
        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`${monster.name}`} />
        <h2>{monster.name}</h2>
        <h3>LEVEL: {monster.level}</h3>
        <h3>ATK: {monster.atk}</h3>
        <h3>DEF: {monster.def}</h3>
    </div>
)




export default Card;