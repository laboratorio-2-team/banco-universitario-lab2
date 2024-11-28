import compactLogo from '@assets/banco-universitario-website-favicon-color.png'
import fullLogo from '@assets/logo-no-background.png'
import { FC } from 'react'

type Props = {
    className?: string
}

export const Logo: FC<Props> = ({ className = '' }) => {
    const logoSrc = {
        fullLogo,
        compactLogo
    }
    return (
        <>
            <img
                alt="logo"
                src={logoSrc.fullLogo}
                className={`max-w-[300px] flex-grow hidden lg:block ${className}`}
            />
            <img
                alt="logo"
                src={logoSrc.compactLogo}
                className={`max-w-[40px] flex-grow block lg:hidden mr-3 ${className}`}
            />
        </>
    )
}
