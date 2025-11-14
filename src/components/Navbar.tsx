import { AppBar, Toolbar, Container, Box, Link, useScrollTrigger, Slide } from '@mui/material'

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Navbar() {
  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: 'rgba(15, 23, 42, 0.8)', 
          backdropFilter: 'blur(10px)',
          boxShadow: 1
        }}
      >
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Link 
              href="#home" 
              sx={{ 
                textDecoration: 'none', 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: 'primary.main',
                '&:hover': { color: 'primary.dark' }
              }}
            >
              Portfolio
            </Link>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link href="#home" sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                Home
              </Link>
              <Link href="#about" sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                About
              </Link>
              <Link href="#skills" sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                Skills
              </Link>
              <Link href="#projects" sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                Projects
              </Link>
              <Link href="#contact" sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                Contact
              </Link>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

