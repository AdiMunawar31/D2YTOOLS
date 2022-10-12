import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta name='description' content='D2YTOOLS APP' />
					<meta name='keywords' content='Web Developer, React JS, NEXT JS' />
					<meta name='theme-color' content='#2F71F0' />
					{/* <link rel='shortcut icon' href='https://avatars.githubusercontent.com/u/57015700?v=4' type='image/x-icon' /> */}
					<link href='https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap' rel='stylesheet'></link>
				</Head>
				<body className='gradient-bg-welcome'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
