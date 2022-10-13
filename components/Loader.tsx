import React from 'react';
import { ScaleLoader } from 'react-spinners';

function Loader() {
	return (
		<div className='h-screen bg-gray-800 w-full flex justify-center items-center'>
			<ScaleLoader loading color='#ede801' />
		</div>
	);
}

export default Loader;
