import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PaymentCard: React.FC = () => {
    const [currentMonth, setCurrentMonth] = React.useState<string | null>(null);

    React.useEffect(() => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const currentMonthName = monthNames[new Date().getMonth()];
        setCurrentMonth(currentMonthName);
    }, []);

    return (
        <div className='flex flex-col justify-between bg-white shadow p-3 rounded-lg row-span-2 col-start-2 row-start-1'>
            <div className="flex flex-col gap-1">
                <h3 className='font-medium'>No Payment Due</h3>
                <p className='text-sm text-gray-500'>You've paid your {currentMonth !== null ? currentMonth : "..."} balance.</p>
            </div>
            <div className='flex items-center justify-center bg-gray-200 w-16 h-16 rounded-full ml-auto'>
                <FontAwesomeIcon icon={faCheck} size="2x" />
            </div>
        </div>
    )
}

export default PaymentCard;