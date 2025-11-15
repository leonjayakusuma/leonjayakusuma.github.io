import { Box, CardContent, Grid, Typography } from "@mui/material";
import { Card } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import type { SkillCategory, Skill } from "./interface";
import SkillCard from "./SkillCard";

function useScrollVisibility<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { isVisible, ref }
}

export default function SkillCategoryCard({category}: {category: SkillCategory}) {
  const { isVisible, ref } = useScrollVisibility<HTMLDivElement>()
  
  return <Grid size={{ xs: 12, md: 4 }} key={category.title}>
    <Card 
      ref={ref}
      sx={{
        textAlign: 'center',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(90px)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
        '&:hover': {
          boxShadow: '0 4px 6px -1px rgb(255, 255, 255), 0 8px 12px -1px rgba(255, 255, 255, 0.2)'
        }
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h3"
          sx={{
            fontWeight: 700,
            display: 'inline-block',
            px: 3,
            py: 1,
            mb: 3,
            borderRadius: '5px',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'primary.main',
              transform: 'scale(1.1)',
              cursor: 'pointer',
              backgroundColor: 'rgba(255, 255, 255, 1)',
            }
          }}
        >
          {category.title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          {category.skills.map((skill: Skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </Box>
      </CardContent>
    </Card>
  </Grid>
}