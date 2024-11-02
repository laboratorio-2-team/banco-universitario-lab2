
export const Logo = () => {
    const logoSrc = {
        fullLogo: 'src/assets/logo-no-background.png',
        compactLogo: 'src/assets/banco-universitario-website-favicon-color.png'
    }
    return (
        <>
            <img
                alt="logo"
                src={logoSrc.fullLogo}
                className="max-w-[300px] flex-grow hidden lg:block"
            />
            <img
                alt="logo"
                src={logoSrc.compactLogo}
                className="max-w-[40px] flex-grow block lg:hidden mr-3"
            />
        </>
    )
}
