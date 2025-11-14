import { Container, Box, Typography, Card, CardContent, Grid } from '@mui/material'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['Figma','React', 'TypeScript', 'TailwindCSS', 'Vite', 'Svelte']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'Firebase', 'Supabase', 'AWS', 'Azure', 'GCP', 'Prisma']
  },
  {
    title: 'Tools',
    skills: ['Git & GitHub', 'Vite', 'VS Code', 'CI/CD']
  },
  {
    title: 'Deep Learning',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'SciPy']
  }
]

export default function Skills() {
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
                      <Box component="li" key={skill} sx={{ mb: 1, color: 'text.secondary' }}>
                        {skill}
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

