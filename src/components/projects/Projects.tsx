import { Container, Box, Typography, Card, Grid } from '@mui/material'
import AnimatedHeading from '../../utils/AnimatedHeading'
import type { Project } from './interface'
import DescriptionSection from './DescriptionSection'

const projects: Project[] = [
  {
    id: 1,
    title: 'Frontend Mentor - MyTeam Multi-Page Website',
    description: 'My first full-scale website that I deployed. This is a website for an example service-based company that offers coaching services to build dynamic teams made up of global talent.',
    bulletPoints: [
      'Part of Frontend Mentor Projects',
      'Built with Tailwind CSS',
      'Built with Next.js'
    ],
    dateRange: 'Nov 2023 - Dec 2023',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Frontend Development'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Project Title',
    description: 'A brief description of the project and what technologies were used.',
    bulletPoints: ['Feature 1', 'Feature 2', 'Feature 3'],
    dateRange: 'Jan 2024 - Feb 2024',
    technologies: ['React', 'TypeScript'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Project Title',
    description: 'A brief description of the project and what technologies were used.',
    bulletPoints: ['Feature 1', 'Feature 2'],
    dateRange: 'Mar 2024 - Apr 2024',
    technologies: ['React', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#'
  }
]

const ImageSection = () => (
  <Grid size={{ xs: 12, md: 6 }}>
    <Card
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        height: '400px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          transition: 'transform 0.3s ease, boxShadow 0.3s ease',
        }
      }}
    >
      <Box
        sx={{
          height: '100%',
          background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          color: 'white'
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, mb: 3, fontSize: '0.875rem' }}>
          <Typography>home</Typography>
          <Typography>about</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            the <Box component="span" sx={{ color: '#ec4899' }}>talent</Box>
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Finding the right people and building high performing teams can be hard. We provide the tools and insights needed to build dynamic teams made up of global talent.
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
)


export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {AnimatedHeading({content: 'Featured Projects'})}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {projects.map((project) => {
            const isOdd = project.id % 2 === 1
            return (
              <Grid container spacing={4} key={project.id}
                sx={{ alignItems: 'center', backgroundColor: 'background.paper', borderRadius: 3, p: 4 }}>
                {isOdd ? (
                  <>
                    <ImageSection />
                    <DescriptionSection project={project} />
                  </>
                ) : (
                  <>
                    <DescriptionSection project={project} />
                    <ImageSection />
                  </>
                )}
              </Grid>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

