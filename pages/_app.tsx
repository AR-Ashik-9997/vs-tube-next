import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
  }
   
  type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
  }
  export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

	const getLayout = Component.getLayout ?? ((page) => page)
   
	return getLayout(<NextUIProvider>
		<NextThemesProvider>
			<Component {...pageProps} />
		</NextThemesProvider>
	</NextUIProvider>)
  }


export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
