import { Outlet } from 'react-router-dom'

import { FooterLanding, HeaderLanding } from '@components'

export const HomeLayouts = () => {
    return (
        <>
            <HeaderLanding />
            <Outlet />
            <FooterLanding />
        </>
    )
}
