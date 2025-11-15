import { 
  SiReact, SiTypescript, SiTailwindcss, SiVite, SiSvelte, SiFigma,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiDocker,
  SiFirebase, SiSupabase, SiAmazon, SiGooglecloud,
  SiPrisma, SiPython, SiTensorflow, SiPytorch,
  SiNumpy, SiPandas
} from 'react-icons/si'
import { FaGithub, FaMicrosoft } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import type { ReactElement } from 'react'

// Import custom SVG icons if they exist
// Example: import KerasIcon from '../assets/icons/keras.svg?react'

export const getSkillIcon = (skillName: string): ReactElement | null => {
  switch (skillName) {
    // Frontend
    case 'Figma':
      return <SiFigma />
    case 'React':
      return <SiReact />
    case 'TypeScript':
      return <SiTypescript />
    case 'TailwindCSS':
      return <SiTailwindcss />
    case 'Vite':
      return <SiVite />
    case 'Svelte':
      return <SiSvelte />
    
    // Backend
    case 'Node.js':
      return <SiNodedotjs />
    case 'Express':
      return <SiExpress />
    case 'MongoDB':
      return <SiMongodb />
    case 'PostgreSQL':
      return <SiPostgresql />
    case 'Docker':
      return <SiDocker />
    case 'Firebase':
      return <SiFirebase />
    case 'Supabase':
      return <SiSupabase />
    case 'AWS':
      return <SiAmazon />
    case 'Azure':
      return <FaMicrosoft />
    case 'GCP':
      return <SiGooglecloud />
    case 'Prisma':
      return <SiPrisma />
    
    // Tools
    case 'Git & GitHub':
      return <FaGithub />
    case 'VS Code':
      return <VscCode />
    case 'CI/CD':
      return <VscCode />
    
    // Deep Learning
    case 'Python':
      return <SiPython />
    case 'TensorFlow':
      return <SiTensorflow />
    case 'PyTorch':
      return <SiPytorch />
    case 'NumPy':
      return <SiNumpy />
    case 'Pandas':
      return <SiPandas />
    
    // Add custom icons here for ones not in react-icons
    // case 'Keras':
    //   return <KerasIcon />
    // case 'Matplotlib':
    //   return <MatplotlibIcon />
    // case 'Seaborn':
    //   return <SeabornIcon />
    // case 'Scikit-learn':
    //   return <ScikitIcon />
    // case 'SciPy':
    //   return <SciPyIcon />
    
    default:
      return null
  }
}

