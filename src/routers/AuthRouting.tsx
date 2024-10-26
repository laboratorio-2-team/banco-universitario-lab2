import { RouteObject } from "react-router-dom";

export const authRouting: RouteObject[] = [
  {
    path: "/",
    children: [
        {
            path: "login",
            lazy: async () => {
                const { Login } = await import("../pages/auth")
                return { Component: Login, }
            },
        },
        {
            path: "register",
            lazy: async () => {
                const { Register } = await import("../pages/auth")
                return { Component: Register, }
            },
        },
    ],
    
  },
]
