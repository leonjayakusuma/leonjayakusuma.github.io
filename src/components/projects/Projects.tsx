import { Container, Box } from '@mui/material'
import AnimatedHeading from '../../utils/AnimatedHeading'
import type { Project } from './interface'
import ProjectCard from './ProjectCard/ProjectCard'

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


export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {AnimatedHeading({content: 'Featured Projects'})}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {projects.map((project) => {
            const isOdd = project.id % 2 === 1
            return (
              <ProjectCard key={project.id} project={project} isOdd={isOdd} />
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
