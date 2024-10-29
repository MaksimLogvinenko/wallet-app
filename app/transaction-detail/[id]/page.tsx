'use client';
import React from 'react'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
//COMPONENTS
import BrandDetail from '@/components/brandDetail'
import Spiner from '@/components/common/spiner';

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

const BrandPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);
    const [brand, setBrand] = React.useState<Brand>({})

    React.useEffect(() => {
        const fetchBrand = async () => {
            try {
                const res = await fetch(`http://localhost:3004/brands/${id}`);
                const data = await res.json();
                setBrand(data);
            } catch (error) {
                console.error("Error loading brand:", error);
                setError("Error loading brand!");
            } finally {
                setIsLoading(false);
            }
        };

        fetchBrand();
    }, []);



    return (
        <main className='py-5'>
            <div className="container">
                <div className='flex flex-col'>
                    <Link href="/">
                        <FontAwesomeIcon className='text-gray-400 mr-auto mb-5' icon={faAngleLeft} size="2x" />
                    </Link>
                    {
                        error ? <p className='flex items-center justify-center text-center'><FontAwesomeIcon className='text-red-500 mr-2' icon={faCircleExclamation} size="2x" />Error loading brand!</p> :
                            isLoading ? <Spiner /> :
                                <div>
                                    <h2 className='text-5xl font-bold text-center mb-3'>{brand.profit}</h2>
                                    <h3 className='text-gray-500 text-center font-medium'>{brand.title}</h3>
                                    <p className='text-gray-500 text-center font-medium mb-7'><span>{brand.date}</span>, <span>12:47</span></p>

                                    <BrandDetail brand={!isLoading && brand} />
                                </div>
                    }
                </div>
            </div>
        </main>
    )
}

export default BrandPage