export interface Skill {
    name: string
    icon: React.ReactElement | null
  }
  
  export interface SkillCategory {
    title: string
    skills: Skill[]
  }
export interface SkillCardProps {
    skill: Skill
}