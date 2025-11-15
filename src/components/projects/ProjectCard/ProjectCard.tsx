import { Grid } from "@mui/material"
import ImageSection from "./ImageSection"
import DescriptionSection from "./DescriptionSection"
import type { Project } from "../interface"
import { useEffect, useRef, useState } from "react"

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

export default function ProjectCard({ project, isOdd }: { project: Project, isOdd: boolean }) {
    return (  
      isOdd ? <ProjectCardOdd project={project} /> : <ProjectCardEven project={project} />
    )
  }
  
  function ProjectCardOdd({ project }: { project: Project }) {
    const { isVisible, ref } = useScrollVisibility<HTMLDivElement>()
    
    return (
      <Grid 
        container 
        spacing={4} 
        ref={ref}
        sx={{ 
          alignItems: 'center', 
          backgroundColor: 'background.paper', 
          borderRadius: 3, 
          p: 4,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
          transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
        }}
      >
        <ImageSection />
        <DescriptionSection project={project} />
      </Grid>
    )
  }
  
  function ProjectCardEven({ project }: { project: Project }) {
    const { isVisible, ref } = useScrollVisibility<HTMLDivElement>()
    
    return (
      <Grid 
        container 
        spacing={4} 
        ref={ref}
        sx={{ 
          alignItems: 'center', 
          backgroundColor: 'background.paper', 
          borderRadius: 3, 
          p: 4,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
          transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
        }}
      >
        <DescriptionSection project={project} />
        <ImageSection />
      </Grid>
    )
  }
  