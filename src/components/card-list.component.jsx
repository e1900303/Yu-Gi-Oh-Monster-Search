import { React, Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    const { name, level, atk, def, id } = monster;
                    return (
                        <div className='card-container' key={id}>
                            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name}`} />
                            <h2>{name}</h2>
                            <h3>LEVEL: {level}</h3>
                            <h3>ATK: {atk}</h3>
                            <h3>DEF: {def}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardList;