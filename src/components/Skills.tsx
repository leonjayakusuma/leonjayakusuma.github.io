import { Container, Box, Typography, Card, CardContent, Grid } from '@mui/material'
import { useMemo } from 'react'
import SkillIcon from './icons/SkillIcon'
import { getSkillIcon } from '../utils/skillIcons'

interface Skill {
  name: string
  icon: React.ReactElement | null
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = useMemo(() => [
    {
      title: 'Frontend',
      skills: ['Figma', 'React', 'TypeScript', 'TailwindCSS', 'Vite', 'Svelte'].map(name => ({
        name,
        icon: getSkillIcon(name)
      }))
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'Firebase', 'Supabase', 'AWS', 'Azure', 'GCP', 'Prisma'].map(name => ({
        name,
        icon: getSkillIcon(name)
      }))
    },
    {
      title: 'Tools',
      skills: ['Git & GitHub', 'Vite', 'VS Code', 'CI/CD'].map(name => ({
        name,
        icon: getSkillIcon(name)
      }))
    },
    {
      title: 'Deep Learning',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'SciPy'].map(name => ({
        name,
        icon: getSkillIcon(name)
      }))
    }
  ], [])
  return (
    <Box id="skills" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
          Skills & Technologies
        </Typography>
        <Grid container spacing={3}>
          {skillCategories.map((category) => (
            <Grid size={{ xs: 12, md: 4 }} key={category.title}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2, listStyle: 'none' }}>
                    {category.skills.map((skill) => (
                      <Box 
                        component="li" 
                        key={skill.name} 
                        sx={{ 
                          mb: 1.5, 
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5
                        }}
                      >
                        <SkillIcon 
                          name={skill.name} 
                          icon={skill.icon}
                          size={20}
                        />
                        {skill.name}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}