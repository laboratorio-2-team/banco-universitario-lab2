import { Outlet } from 'react-router-dom'

import { FooterLanding, HeaderLanding } from './components'
import { Container } from '@mui/material'

export const HomeLayouts = () => {
    return (
        < >
            <HeaderLanding />
            <Container>
                <Outlet />
            </Container>
            <FooterLanding />
        </>
    )
}
