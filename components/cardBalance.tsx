"use client";
import React from 'react'

const CardBalance: React.FC = () => {
    const [number, setNumber] = React.useState<number | null>(null);
    const [available, setAvailable] = React.useState<string | null>(null);

    React.useEffect(() => {
        const randomNum = Math.floor(Math.random() * 1501);
        setNumber(randomNum);
        setAvailable((1500 - randomNum).toString());
    }, []);

    return (
        <div className='flex flex-col gap-1 bg-white shadow p-3 rounded-lg'>
            <h3 className='font-medium'>Card Balance</h3>
            <h2 className='text-4xl font-bold'>${number !== null ? number : "..."}</h2>
            <p className='text-sm text-gray-500'>${available !== null ? available : "..."} Available</p>
        </div>
    )
}

export default CardBalance;