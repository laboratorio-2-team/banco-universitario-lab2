import { RouteObject } from "react-router-dom";

const homeRouter: RouteObject[] = [
  {
    path: "/",
    children: [],
    lazy: async () => {
      const { Home } = await import("../pages/Home")
      return { Component: Home, }
    },
  },
]

export default homeRouter;