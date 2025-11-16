import { Container, Box } from '@mui/material'
import AnimatedHeading from '../utils/AnimatedHeading'
import type { Project } from './interface'
import ProjectCard from './ProjectCard/ProjectCard'
import IFFAThumbnail from '../../assets/projects/IFFA/IFFA_thumbnail.png'
import MyTeamThumbnail from '../../assets/projects/FrontendMentor/Myteam/thumbnail.png'
import SoilThumbnail from '../../assets/projects/Soil/soil_thumbnail.png'

const projects: Project[] = [
  {
    id: 1,
    title: 'IFFA Awards - Movie Nominations Website',
    description: ' Created a Movie Nominations Website featuring movie highlights, top nominations, and movie finalist showcase for International Film Festivals Australia.',
    bulletPoints: [
      'Worked with Figma, Vite, React, Typescript, Express, MySQL, and Firebase as tech stack.',
      'Built a movie nominations website with a modern and responsive design.',
      'Managed a team of five engineers using Jira, Git, and GitHub.'
    ],
    dateRange: 'Aug 2024 - Jan 2025',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Express', 'MySQL', 'Firebase'],
    demoUrl: 'https://iffa.com.au/',
    githubUrl: '#',
    imageUrl: IFFAThumbnail
  },
  {
    id: 2,
    title: 'SOIL Organic Foods - Ecommerce Website',
    description: 'Full stack web application for a whole-foods supermarket, featuring a modern and responsive design with a clean and intuitive user interface.',
    bulletPoints: ['Search bar to search for products', 'Shopping Cart and Checkout Page', 'Profile Management Feature', 'Meal Planning Functionality'],
    dateRange: 'Feb 2024 - Jun 2024',
    technologies: ['Vite', 'React.js', 'React Hooks', 'GraphQL', 'Sequelize.js', 'TypeScript', 'Front-end Development', 'Back-End Web Development', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#',
    imageUrl: SoilThumbnail
  },
  {
    id: 3,
    title: 'Frontend Mentor - MyTeam Multi-Page Website',
    description: 'Created a multi-page website for a fictional company called MyTeam. The website features a modern and responsive design with a clean and intuitive user interface.',
    bulletPoints: [
      'Worked with Figma, Vite, React, Typescript, and Tailwind CSS as tech stack.',
      'Built a multi-page website with a modern and responsive design.',
      'Deployed the website using Vercel.'
    ],
    dateRange: 'Nov 2023 - Dec 2023',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://frontend-mentor-xi-roan.vercel.app/myteam-multi-page-website',
    githubUrl: '#',
    imageUrl: MyTeamThumbnail
  },
  
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
