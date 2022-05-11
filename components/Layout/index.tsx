import { FC } from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import ThemeProvider from '@/theme/ThemeProvider'

const Layout: FC<CustomInterfaces.ReactChildren> = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <Navbar />
                {children}
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Layout
