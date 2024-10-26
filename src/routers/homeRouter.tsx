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
          const { HomePage } = await import("@pages/Home")
          return { Component: HomePage, }
        },
      }
    ],

  },
]

export default homeRouter;