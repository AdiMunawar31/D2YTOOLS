import React from 'react';

const InputForm = ({ register, errors, label, id, ...formInput }: any) => {
	return (
		<div>
			<label htmlFor={id} className='mb-2 block text-sm font-medium text-gray-300'>
				{label}
			</label>
			<input
				{...register(id)}
				id={id}
				name={id}
				{...formInput}
				className='w-full font-sans bg-gray-800 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
			/>
			{errors && <div className='m-1 text-sm font-light text-red-500 font-sans'>{errors.message}</div>}
		</div>
	);
};

export default InputForm;
