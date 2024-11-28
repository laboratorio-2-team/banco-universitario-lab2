import { Box } from "@mui/material"
import { SidebarItem } from "./SidebarItem"
import { pathList } from "./pathList"

export const SideBar = () => (
    <Box className="flex flex-col justify-start">

        {
            pathList.map(({ icon, ...rest }, index) => (
                <SidebarItem key={index} children={icon} {...rest} />
            ))
        }

    </Box>
)
