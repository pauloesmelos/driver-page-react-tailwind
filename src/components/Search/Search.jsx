import React from 'react';
import Input from '../form/input/Input';
import { AiOutlineSearch } from 'react-icons/ai';
const Search = () => {
  const [where, setWhere] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [until, setUntil] = React.useState("");

  return (
    <section className="w-full h-[500px] my-3 bg-car bg-cover bg-no-repeat bg-center relative px-4">
        <div className="w-full flex justify-center items-center h-full">
            <form className="bg-[rgba(247,247,247,0.8)] flex flex-col w-full max-w-[700px]  p-3 h-[270px]
            mb-[20%] sm:mb-0 rounded-xl sm:flex-row sm:items-center sm:justify-center sm:gap-3
            sm:h-24">
                <Input
                label="Where"
                type="text"
                id="where" 
                name="where" 
                value={where} 
                setValue={setWhere}
                placeholder="Your localization"/>
                <Input
                label="From"
                type="date"
                id="from" 
                name="from" 
                value={from} 
                setValue={setFrom}/>
                <Input
                label="Until"
                type="date"
                id="until" 
                name="until" 
                value={until} 
                setValue={setUntil}/>
                <button
                className="hidden sm:block text-5xl ml-10 hover:text-blue-600"
                type="submit">
                    <AiOutlineSearch/>
                </button>
                <button
                className="sm:hidden bg-[#593cfb] text-white font-bold rounded-md mx-auto my-4
                px-6 py-2 hover:bg-[#fff] hover:text-[#593cfb] hover:border-2 hover:border-[#593cfb]"
                type="submit">
                    Search for cars
                </button>
            </form>
        </div>
    </section>
  )
}

export default Search;