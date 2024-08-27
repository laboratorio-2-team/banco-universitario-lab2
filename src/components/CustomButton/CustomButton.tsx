import {  ButtonProps } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { ButtonContained } from './ButtonContained'
import { ButtonText } from './ButtonText'
import { ButtonOutlined } from './ButtonOutlined'

interface Props extends ButtonProps, PropsWithChildren {
  variant: keyof typeof buttonType,
}

const buttonType = {
  contained: ButtonContained,
  text: ButtonText,
  outlined: ButtonOutlined,
}

export const CustomButton: FC<Props> = ({ children, variant,...props }) => {

  const Button = buttonType[variant];

  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  )
}
