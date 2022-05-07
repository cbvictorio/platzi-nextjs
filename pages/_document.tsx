import Document, { Html, Head, Main, NextScript } from 'next/document'

/*

This component is used to extend the functionalities of the Document on Next JS, 
this is something more SSR-focused, everything you add in here will be included
on EVERY PAGE of your Next application, but somehow will live outside of the context of the 
app itself

This is how Next renders everything:
    1. <Document /> (component in this file)
    2. <App /> (this is something included on Next, this App component is a wrapper for everything
        that lives within our pages folder)
    3. Our whole application (everything within the pages folder)

* Note: every change in here requires an app reboot with yarn dev

    - <Head />
        - Add a favicon
        - Adding Webfonts (Open Sans, Lato, etc)
        - Adding external styles (stylesheet)
        - Adding external scripts/js

*/

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>{/* add a favi */}</Head>
                <body className='something'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
