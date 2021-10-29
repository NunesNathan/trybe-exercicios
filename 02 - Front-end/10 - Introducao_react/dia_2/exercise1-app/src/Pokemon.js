import React from 'react';

class Pokemon extends React.Component {
  render() {
    const id = this.props.data.id
    const name = this.props.data.name
    const type = this.props.data.types
    const weight = this.props.data.weight
    const image = this.props.data.sprites.other.dream_world.front_default
    return (
      <li>
        <div className='poke-infos'>
          <p>N.º{id}</p>
          <p>{name}</p>
          <p>{(type.map((eachType) => eachType.type.name)).join(' ')}</p>
          <p>{weight}Kg</p>
        </div>
        <img src={image} alt={name} />
      </li>
    )
  }
}

export default Pokemon