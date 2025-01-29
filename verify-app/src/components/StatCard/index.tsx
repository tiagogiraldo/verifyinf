"use client"

import { StatCardProps } from '@/interfaces';
import Image from 'next/image';


const StatCard: React.FC<StatCardProps> = ({ iconSrc, title, value, format }) => {
  const formattedValue = format === 'number' 
    ? new Intl.NumberFormat('en-US').format(value as number)
    : `${(value as number).toFixed(2)}%`;

  return (
    <div className="rounded-lg shadow-md p-4 flex items-start">
      <div className="mr-4 flex-shrink-0">
        <Image src={"/icons"+`${iconSrc}`} alt={title} width={40} height={40} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white-700">{title}</h3>
        <p className="text-2xl font-bold text-white-900">{formattedValue}</p>
      </div>
    </div>
  );
};

export default StatCard;