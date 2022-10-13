import React from 'react';
import CoinTable from '../components/Coin/CoinTable';
import Header from '../components/Header';
import Layout from '../components/Layout';

const coinmarket = () => {
	return (
		<Layout>
			<Header />
			<div className='text-3xl text-gray-100 font-bold ml-12 mt-8 -mb-4'>#D2YCOINMARKET</div>
			<CoinTable />
		</Layout>
	);
};

export default coinmarket;
