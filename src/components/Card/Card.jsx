import React from 'react';

const Card = ({ src, title }) => {
  return (
    <div className="shadow-md w-[200px] p-3 text-center hover:translate-y-[-5px] hover:shadow-lg
    hover:text-blue-600 duration-500 cursor-help">
        <img 
        className="w-full h-[250px] object-cover rounded-t-lg"
        src={src}
        alt={`Carro da ${title}`}
        title={`Carro da ${title}`}
        />
        <h3 className="font-bold p-2">{title}</h3>
    </div>
  )
}

export default Card;