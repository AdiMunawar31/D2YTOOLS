import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home: NextPage = () => {
	return (
		<Layout>
			<div className='flex min-h-screen flex-col items-center justify-center py-2'>
				<Head>
					<title>D2YTOOLS</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
					<h1 className='text-6xl font-bold text-gray-300'>
						Welcome to{' '}
						<a className='text-yellow-400' href='https://adi31.vercel.app/'>
							D2YTOOLS!
						</a>
					</h1>

					<p className='mt-3 text-2xl text-gray-300'>Choose your favorite app</p>

					<Link href='/playground'>
						<button className='mt-8 flex items-center justify-center h-32 w-64 hover:scale-95 animate-pulse hover:animate-none transition-all'>
							<span className='fortnite-btn-inner p-3 pt-5 w-11/12 text-5xl truncate'>Play</span>
						</button>
					</Link>

					{/* Content */}
				</main>
			</div>
		</Layout>
	);
};

export default Home;
