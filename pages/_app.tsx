import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
// import { Hydrate } from 'react-query/hydration';

// const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient());
	const dehydratedState = dehydrate(queryClient);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps}>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
