import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Application } from '../interface/type';

const Application: FunctionComponent<{ value: Application }> = ({ value: { img, title, desc, link } }) => {
	return (
		<Link href={link}>
			<div
				title={title}
				className='col-span-10 mx-4 cursor-pointer hover:scale-105 transition-all md:col-span-6 lg:col-span-3 border-gray-500 border-2 rounded shadow-md  bg-gradient-to-br from-black to-gray-900'
			>
				<a className='relative block h-48 overflow-hidden rounded'>
					<img alt={title} className='block h-full w-full object-cover object-center' src={img} />
				</a>
				<div className='mt-4 mb-2 text-center'>
					<h3 className='title-font mb-1 text-xs tracking-widest text-gray-500'>{desc}</h3>
					<h1 className='title-font text-lg font-medium text-gray-300'>{title}</h1>
				</div>
			</div>
		</Link>
	);
};

export default Application;
