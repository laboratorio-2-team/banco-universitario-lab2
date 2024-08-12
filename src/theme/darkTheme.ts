import createPalette from "@mui/material/styles/createPalette"
import { Theme } from "@mui/material"
import { defaultTheme } from "./defaultTheme"

export const darkTheme: Theme = {
    ...defaultTheme,
    palette: createPalette({
        mode: "dark",
        secondary:{
            main: "#fafafafa"
        },
    }),
}

