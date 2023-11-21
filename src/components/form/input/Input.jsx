import React from 'react';

const Input = ({ label, type, value, setValue, name, id, ...props }) => {
  const handleChange = ({ target }) => {
    setValue(target.value);
  }
  return (
    <div>
        <label 
        className="block font-bold py-1 sm:text-xl"
        htmlFor={id}>
        { label }
        </label>
        <input
        className="bg-transparent border-b-2 border-gray-600 w-full outline-none focus:outline-2
        focus:outline-[#593cfb] focus:border-none hover:border-blue-600"
        type={type} 
        id={id} 
        name={name} 
        value={value} 
        onChange={handleChange}
        {...props} />
    </div>
  )
}

export default Input;