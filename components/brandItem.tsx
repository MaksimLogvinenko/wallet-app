import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { parse, isThisWeek, isYesterday, format } from 'date-fns';

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

type BrandItemProps = {
    brand: Brand;
};

const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
    const [displayDate, setDisplayDate] = React.useState<string>('');

    React.useEffect(() => {
        const parsedDate = parse(brand.date, 'dd.MM.yyyy', new Date());

        // Проверка, была ли дата на этой неделе
        if (isYesterday(parsedDate)) {
            setDisplayDate('Yesterday');
        } else if (isThisWeek(parsedDate, { weekStartsOn: 1 })) {
            setDisplayDate('This week');
        } else {
            setDisplayDate(format(parsedDate, 'dd.MM.yyyy'));
        }
    }, [brand.date]);

    return (
        <Link href={`/transaction-detail/${brand.id}`} className='flex items-center gap-3 border-b border-gray-300 pb-3 last:pb-0 last:border-none'>
            <Image
                src={`/img/${brand.img}`}
                width={40}
                height={40}
                alt={brand.title}
                loading='lazy'
                className='w-10 h-10'
            />
            <div className="flex flex-col w-full">
                <div className="flex justify-between gap-2">
                    <h3 className='text-lg font-bold'>{brand.title}</h3>
                    <div className="flex items-center gap-3">
                        <span className='font-medium'>{brand.profit}</span>
                        <FontAwesomeIcon className='text-gray-300' icon={faAngleRight} size="1x" />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <p className='text-gray-500 line-clamp-1'>{brand.status === "pending" ? `Pending - ${brand.text}` : brand.text}</p>
                    {
                        brand.percent &&
                        <span className='p-[2px] bg-gray-100 text-gray-500 mr-5'>{brand.percent}%</span>
                    }
                </div>
                <p className='text-gray-500'>{brand.user && `${brand.user} - `}{displayDate}</p>
            </div>
        </Link>
    )
}

export default BrandItem;