import { CREATE_ROUTE } from "@pages/index";
import { RouteObject } from "react-router-dom";

export const dashBoardRouting: RouteObject[] = [
    {
        path: "/dashboard",
        children: [
            {
                path: "",
                lazy: async () => {
                    const { DashboardPage } = await import("../pages/dashboard")
                    return { Component: DashboardPage }
                }
            }
        ]
    },
    {
        path: "/history",
        children: [
            {
                path: "",
                lazy: async () => {
                    const { HistoryPage } = await import("../pages/dashboard")
                    return { Component: HistoryPage }
                }
            }
        ]
    },
    {
        path: "/config",
        children: [
            {
                path:"",
                lazy: async () => {
                    const { ConfigPage } = await import("../pages/dashboard")
                    return { Component: ConfigPage }
                }
            }
        ]
    },
    {
        path: "/contacts",
        children: [
            {
                path:"",
                lazy: async () => {
                    const { ContactsPage } = await import("../pages/dashboard")
                    return { Component: ContactsPage }
                }
            },
            {
                path:`/contacts${CREATE_ROUTE}`,
                lazy: async () => {
                    const { CreateContactPage } = await import("../pages/dashboard")
                    return { Component: CreateContactPage }
                }
            }
        ]
    },
    {
        path: "/transfer",
        children: [
            {
                path:"",
                lazy: async () => {
                    const { TransferPage } = await import("../pages/dashboard")
                    return { Component: TransferPage }
                }
            }
        ]
    }
]