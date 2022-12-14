import Link from 'next/link';
import React from 'react';
import ApplicationList from '../components/ApplicationList';
import Header from '../components/Header';
import Layout from '../components/Layout';

const playground = () => {
	return (
		<Layout>
			<Header />
			<ApplicationList />
		</Layout>
	);
};

export default playground;
