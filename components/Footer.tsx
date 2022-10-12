import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className='flex h-24 w-full items-center justify-center border-t border-gray-700 gradient-bg-footer'>
				<div className='flex items-center justify-center gap-2 text-gray-100'>Powered by </div>
				<img
					src='https://avatars.githubusercontent.com/u/57015700?v=4'
					className=' rounded-full -mt-1 ml-2'
					alt='AM Logo'
					width={30}
					height={16}
				/>
			</footer>
		</div>
	);
};

export default Footer;
