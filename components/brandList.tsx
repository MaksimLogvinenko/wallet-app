import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
//COMPONENTS
import BrandItem from './brandItem';
import Skeleton from './common/skeleton';

type Brand = {
    id: number;
    img: string;
    percent?: number;
    profit: string;
    text: string;
    title: string;
    status: string;
    date: string;
    user?: string;
};

type BrandListProps = {
    brands: Brand[];
    isLoading: boolean;
    error: string | null;
};

const BrandList: React.FC<BrandListProps> = ({ brands, isLoading, error }) => {
    return (
        <div className='flex flex-col gap-1 bg-white shadow p-3 rounded-lg'>
            {
                error ? <p className='flex items-center justify-center text-center'><FontAwesomeIcon className='text-red-500 mr-2' icon={faCircleExclamation} size="2x" />Error loading brands!</p> :
                    isLoading ? Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} />
                    )) :
                        brands.map((brand) => (
                            <BrandItem key={brand.id} brand={brand} />
                        ))
            }
        </div>
    )
}

export default BrandList;