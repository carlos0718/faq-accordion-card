import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon-32x32.png' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
