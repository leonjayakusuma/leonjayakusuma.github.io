import { AppBar, Toolbar, Container, Link, useScrollTrigger, Slide } from '@mui/material'

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
          boxShadow: 1,
          py: 1
        }}
      >
        <Toolbar>
          <Container maxWidth="lg" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap: 6,
          }}>
              {NavLink({ href: '#home', text: 'Home' })}
              {NavLink({ href: '#about', text: 'About' })}
              {NavLink({ href: '#skills', text: 'Skills' })}
              {NavLink({ href: '#projects', text: 'Projects' })}
              {NavLink({ href: '#contact', text: 'Contact' })}
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}


function NavLink({ href, text }: { href: string, text: string }) {
  return <Link href={href} sx={{ textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' }, fontSize: '1.25rem', fontWeight: 700 }}>
    {text}
  </Link>
}
