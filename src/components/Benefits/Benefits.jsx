import React from 'react';
import Drive from '../../assets/drive.png';

const Benefits = () => {
  return (
    <section className="my-24 px-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
        <div>
            <img 
            className="w-[500px]"
            src={Drive} 
            alt="Benefícios"
            title="Benefícios" />
        </div>
        <div className="flex flex-col">
            <h1 className="text-4xl lg:text-6xl font-bold sm:mt-16">
                Find your perfect car
                <span className="text-[#593cfb] ml-5">
                    to try before you buy
                </span>
            </h1>
            <p className="text-gray-600 font-medium text-xl lg:text-2xl my-8">
                Make sure your future wheels work well with your lifestyle by talking your time in the drive.
            </p>
            <button className="p-3 w-full max-w-[300px] bg-[#593cfb] text-white font-bold mx-auto rounded-lg
            hover:bg-blue-900 duration-500">
                Browser Cars
            </button>
        </div>
    </section>
  )
}

export default Benefits;