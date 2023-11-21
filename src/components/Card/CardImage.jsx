import React from 'react';

const CardImage = ({ src, title }) => {
  return (
    <div className="shadow-lg p-4">
        <img 
        className="object-cover w-full h-[250px] rounded-t-lg brightness-90 hover:brightness-100"
        src={src}
        alt={`Carro da ${title}`}
        title={`Carro da ${title}`}
        />
        <h3 className="font-bold p-2 text-center">{title}</h3>
    </div>
  )
}

export default CardImage