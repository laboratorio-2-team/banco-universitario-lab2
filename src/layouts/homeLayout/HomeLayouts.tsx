import { Outlet } from 'react-router-dom'

import { FooterLanding, HeaderLanding } from './components'
import { Box } from '@mui/material'

export const HomeLayouts = () => {
    return (
        <div className='p-0 m-0 border-0 flex flex-col flex-nowrap'>
            <HeaderLanding />
            <Box component='div' className='mt-[10.5%] xl:mt-[7.5%] 2xl:mt-[4%]'>
                <Outlet />
            </Box>
            <FooterLanding />
        </div>
    )
}
