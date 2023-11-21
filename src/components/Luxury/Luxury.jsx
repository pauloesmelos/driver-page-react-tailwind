import React from 'react';
import CardImage from '../Card/CardImage';

const Luxury = () => {
  return (
    <div className="py-6 w-full px-3">
        <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold">Luxury Selection</h1>
            <p className="text-lg lg:text-2xl font-medium my-8">
                Select from the top luxury vehicles to roll in style.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            <CardImage
            src={"https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600"}
            title={"Rolls Royce"}
            />
            <CardImage
            src={"https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600"}
            title={"Maserati"}
            />
            <CardImage
            src={`https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-1.2.1&ixid=MnwxMjA3fD
            B8MHxzZWFyY2h8MTF8fHJhbmdlJTIwcm92ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
            title={"Range Rover"}
            />
            <CardImage
            src={`https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fD
            B8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
            title={"Porsche"}
            />
        </div>
    </div>
  )
}

export default Luxury;