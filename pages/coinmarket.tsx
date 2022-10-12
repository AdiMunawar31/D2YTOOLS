import React from 'react';
import CoinTable from '../components/Coin/CoinTable';
import Header from '../components/Header';
import Layout from '../components/Layout';

const coinmarket = () => {
	return (
		<Layout>
			<Header />
			<CoinTable />
		</Layout>
	);
};

export default coinmarket;
