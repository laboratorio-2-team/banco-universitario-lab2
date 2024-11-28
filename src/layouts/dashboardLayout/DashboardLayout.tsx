import { Box } from "@mui/material"
import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Header, SideBar } from "./components"

export const DashboardLayout: FC = () => {
  return (
    <Box className="grid grid-cols-12 grid-rows-12 py-4 min-h-screen ">
      <Box className="col-span-12 row-span-1 px-8">
        <Header />
      </Box>
      <Box className="col-span-2 row-span-11 pl-8 mt-10 ">
        <SideBar />
      </Box>
      <Box className="col-span-10 row-span-11 ">
        <Outlet />
      </Box>
    </Box>
  )
}
