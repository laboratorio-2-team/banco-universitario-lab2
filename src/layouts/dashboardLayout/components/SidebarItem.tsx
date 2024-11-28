import { CustomButton } from "@components/CustomButton"
import { FC, PropsWithChildren, useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import styled from "styled-components"

interface Props extends PropsWithChildren {
    to: string,
    text: string
}

const SideBarButton = styled(CustomButton) `
    font-family: "Inter", sans-serif;
    justify-content: start;
`

export const SidebarItem: FC<Props> = ({ children, text, to }) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [className, setClassName] = useState('')

    useEffect(() => {
        setClassName(() => {
            if (pathname.split('/')[1] === to) {
                return `!text-gray-700 `;
            } else {
                return ``
            }
        })

    }, [pathname])


    const handleClick = () => {
        navigate(to);
    }

    return (
        <SideBarButton
            size="large"
            className={className}
            onClick={handleClick}
            variant="text"
            startIcon={children}
        >
            {text}
        </SideBarButton>
    )
}
