import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import tokens from './tokens'

const Theme: FC<CustomInterfaces.ReactChildren> = ({ children }) => (
    <ThemeProvider theme={tokens}> {children} </ThemeProvider>
)

export default Theme
