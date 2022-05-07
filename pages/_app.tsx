import App, { AppProps } from 'next/app'
import Layout from '@/components/Layout'

/*
- The Component prop refers to every page
- This is where you could include the following features:
    - Every Provider from your React contexts
    - Create custom themes
    - Layouts (header, footers)
    - Any additional prop you can think of
*/

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
