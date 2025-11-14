import { Box } from '@mui/material'
import type { ReactNode } from 'react'

interface SkillIconProps {
  name: string
  icon?: ReactNode
  size?: number
  color?: string
}

export default function SkillIcon({ icon, size = 20, color }: SkillIconProps) {
  if (!icon) {
    // Fallback: return a placeholder if no icon is provided
    // Custom SVG icons should be imported in skillIcons.ts instead
    return (
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '4px',
          bgcolor: 'primary.main',
          opacity: 0.3
        }}
      />
    )
  }

  return (
    <Box
      sx={{
        width: size,
        height: size,
        color: color || 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${size}px`,
        '& svg': {
          width: '100%',
          height: '100%'
        }
      }}
    >
      {icon}
    </Box>
  )
}