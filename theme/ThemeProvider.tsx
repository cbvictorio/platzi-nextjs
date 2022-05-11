import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import colors from './tokens'

const Theme: FC<CustomInterfaces.ReactChildren> = ({ children }) => (
    <ThemeProvider theme={colors}> {children} </ThemeProvider>
)

export default Theme
