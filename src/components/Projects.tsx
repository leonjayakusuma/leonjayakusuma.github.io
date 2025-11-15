import { Container, Box, Typography, Card, CardContent, Grid, Link } from '@mui/material'
import AnimatedHeading from '../utils/AnimatedHeading'

interface Project {
  id: number
  title: string
  description: string
  demoUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project Title',
    description: 'A brief description of the project and what technologies were used.',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Project Title',
    description: 'A brief description of the project and what technologies were used.',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Project Title',
    description: 'A brief description of the project and what technologies were used.',
    demoUrl: '#',
    githubUrl: '#'
  }
]

export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 } }}>
      <Container maxWidth="lg">
        {AnimatedHeading({content: 'Featured Projects'})}
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box 
                  sx={{ 
                    height: 192, 
                    background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Project {project.id}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {project.demoUrl && (
                      <Link href={project.demoUrl} sx={{ color: 'primary.main', fontWeight: 500, '&:hover': { color: 'primary.dark' } }}>
                        Live Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link href={project.githubUrl} sx={{ color: 'primary.main', fontWeight: 500, '&:hover': { color: 'primary.dark' } }}>
                        GitHub
                      </Link>
                    )}
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

