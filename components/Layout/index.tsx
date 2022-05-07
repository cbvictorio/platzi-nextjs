import { FC } from 'react'
import Navbar from 'components/Navbar'

const Layout: FC<CustomInterfaces.ReactChilden> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <footer> This is a footer </footer>
        </>
    )
}

export default Layout
