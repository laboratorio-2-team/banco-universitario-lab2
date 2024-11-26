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
    }
]