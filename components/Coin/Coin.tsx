import { spawn } from 'child_process';
import React, { FunctionComponent } from 'react';
import { Price } from '../../interface/type';
import { formatNumber } from '../../utils/formatNumber';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

const Coin: FunctionComponent<{ value: Price }> = ({
	value: {
		id,
		market_cap_rank,
		current_price,
		image,
		market_cap,
		name,
		price_change_percentage_24h,
		symbol,
		total_volume,
	},
}) => {
	return (
		<tr className='bg-gray-800 border-b border-gray-700 hover:bg-gray-900'>
			<td className='px-6 text-center font-bold py-4'>{market_cap_rank}</td>
			<th scope='row' className='px-6 py-4 font-medium text-gray-200 whitespace-nowrap'>
				<div className='flex items-center'>
					<img src={image} className=' rounded-full -ml-2 mr-2' alt={name} width={30} height={16} />
					<span className='font-bold'>{name}</span>
					<div className='px-2 ml-2 uppercase text-xs bg-gray-900'>{symbol}</div>
				</div>
			</th>
			<td className='px-6 py-4'>Rp. {formatNumber(current_price)}</td>
			<td className='px-6 py-4'>
				{price_change_percentage_24h <= 0 ? (
					<div className='text-red-500 flex'>
						<BsFillCaretDownFill className='mt-1 mr-1' />
						<span>{price_change_percentage_24h.toFixed(2)} %</span>
					</div>
				) : (
					<div className='text-green-500 flex'>
						<BsFillCaretUpFill className='mt-0.5 mr-1' />
						<span>{price_change_percentage_24h.toFixed(2)} %</span>
					</div>
				)}
			</td>
			<td className='px-6 py-4'>Rp. {formatNumber(total_volume)}</td>
			<td className='px-6 py-4'>Rp. {formatNumber(market_cap)}</td>
		</tr>
	);
};

export default Coin;
