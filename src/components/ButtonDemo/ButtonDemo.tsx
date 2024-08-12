import { Button, ButtonProps, Theme } from '@mui/material'
import { DefaultTheme } from '@mui/styled-engine'
import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'



const BaseButton = styled(Button)`
  color: ${({theme} : {theme:DefaultTheme | Theme}) => theme.palette.secondary.main}
`

const ButtonContained = styled(BaseButton)`

`

const ButtonText = styled(BaseButton)`

`

const ButtonOutlined = styled(BaseButton)`
  border-color: ${({theme} : {theme:DefaultTheme | Theme}) => theme.palette.secondary.main }
`

interface Props extends ButtonProps, PropsWithChildren {
  variant: keyof typeof buttonType,
}

const buttonType = {
  contained: ButtonContained,
  text: ButtonText,
  outlined: ButtonOutlined,
}

export const ButtonDemo: FC<Props> = ({ children, variant, ...props }) => {

  const Button = buttonType[variant];

  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  )
}
