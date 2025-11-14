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
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 2,
                      justifyContent: 'flex-start',
                    }}
                  >
                    {category.skills.map((skill) => (
                      <Card
                        key={skill.name}
                        sx={{
                          width: { xs: 'calc(50% - 8px)', sm: '120px' },
                          height: { xs: '120px', sm: '120px' },
                          minWidth: '100px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 2,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease-in-out',
                          position: 'relative',
                          overflow: 'hidden',
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
                              size={48}
                            />
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