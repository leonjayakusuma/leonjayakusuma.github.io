import { Button, type ButtonProps } from '@mui/material'
import { type ReactNode } from 'react'

interface SocialButtonProps extends Omit<ButtonProps, 'startIcon'> {
  icon: ReactNode
  label: string
  href: string
  bgColor?: string
  hoverBgColor?: string
}

export default function SocialButton({ 
  icon, 
  label, 
  href, 
  bgColor, 
  hoverBgColor,
}: SocialButtonProps) {
  return (
    <Button
      href={href}
      target="_blank"
      variant="contained"
      startIcon={icon}
      sx={{
        px: 3,
        py: 1.5,
        boxShadow: 2,
        bgcolor: bgColor,
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        fontSize: '1.2rem',
        '&:hover': {
          bgcolor: hoverBgColor,
          boxShadow: '0 8px 16px rgba(255, 255, 255, 0.3)',
          transform: 'scale(1.1)',
        }
      }}
    >
      {label}
    </Button>
  )
}
