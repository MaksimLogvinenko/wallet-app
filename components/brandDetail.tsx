import React from 'react'

type Brand = {
    id?: number;
    img?: string;
    percent?: number;
    profit?: string;
    text?: string;
    title?: string;
    status?: string;
    date?: string;
    user?: string;
};

type BrandItemProps = {
    brand: Brand;
};

const BrandDetail: React.FC<BrandItemProps> = ({ brand }) => {
    return (
        <div className='flex flex-col bg-white shadow p-3 rounded-lg'>
            <h3 className='text-lg font-bold'>{brand.title}</h3>
            <p className='text-gray-500 pb-3 border-b border-gray-300'>{brand.status === "pending" && `Pending - `}{brand.text}</p>

            <div className="flex items-center justify-between gap-3 pt-3">
                <h3 className='text-lg font-bold'>Total:</h3>
                <h3 className='text-lg font-bold'>{brand.profit}</h3>
            </div>
        </div>
    )
}

export default BrandDetail;