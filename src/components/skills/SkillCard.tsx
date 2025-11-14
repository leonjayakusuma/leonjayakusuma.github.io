import { Box, Card, CardContent, Typography } from "@mui/material";
import SkillIcon from "../icons/SkillIcon";
import type { SkillCardProps } from "./interface";



export default function SkillCard({skill}: SkillCardProps) {
    return <Card
      key={skill.name}
      sx={{
        width: { xs: 'calc(50% - 8px)', sm: 'calc(33.333% - 12px)' },
        maxWidth: '140px',
        height: 120,
        minWidth: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        padding: 2,
        '&:hover': {
          transform: 'translateY(-8px) scale(1.05)',
          boxShadow: '0 12px 24px rgba(99, 102, 241, 0.3)',
          '&::before': {
            opacity: 1,
          },
          '& .skill-icon': {
            transform: 'scale(1.2) rotate(5deg)',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
          zIndex: 0,
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 1,
          padding: '16px !important',
        }}
      >
        <Box
          className="skill-icon"
          sx={{
            transition: 'transform 0.3s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SkillIcon
            name={skill.name}
            icon={skill.icon}
            size={48} />
        </Box>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            color: 'text.primary',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            lineHeight: 1.2,
          }}
        >
          {skill.name}
        </Typography>
      </CardContent>
    </Card>
  }