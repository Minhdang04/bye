import React from 'react';

function Items(props) {
  const { image, name, price } = props;

  return (
    <div className='item'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}

export default Items;