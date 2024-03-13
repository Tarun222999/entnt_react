import React from 'react'
import { Link } from 'react-router-dom';
import { SlArrowRightCircle } from "react-icons/sl";
function Card({ title, text, image, to }) {
    return (
        <Link to={to} className='ml-12 rounded-lg shadow-sm planet-background-1 cursor-pointer block mb-8 overflow-hidden w-80'>
            <div className='relative'>
                <div className='flex items-center justify-center h-40 bg-indigo-700 rounded-t-md overflow-hidden'>
                    <img
                        src={image}
                        className='w-full h-full object-cover'
                        alt='product image'
                    />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60'></div>
            </div>

            <div className='p-4 bg-white rounded-b-md text-black'>
                <h3 className='text-lg font-semibold mb-2'>{title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-sm'>{text}</p>
                    <SlArrowRightCircle size={30} />
                </div>


            </div>

        </Link>
    );
}
export default Card
