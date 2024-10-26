import { HomeLayouts } from "@layouts";
import { RouteObject } from "react-router-dom";

const homeRouter: RouteObject[] = [
  {
    path: "",
    Component: HomeLayouts,
    children: [
      {
        path: "",
        lazy: async () => {
          const { Home } = await import("@pages/Home/index")
          return { Component: Home, }
        },
      }
    ],

  },
]

export default homeRouter;