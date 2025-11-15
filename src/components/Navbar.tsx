import { AppBar, Toolbar, Container, Link, useScrollTrigger, Slide, Box } from '@mui/material'

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
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: 6,
          }}>
              <NavLinkSeparator />
              {NavLink({ href: '#home', text: 'Home' })}
              <NavLinkSeparator />
              {NavLink({ href: '#about', text: 'About' })}
              <NavLinkSeparator />
              {NavLink({ href: '#skills', text: 'Skills' })}
              <NavLinkSeparator />
              {NavLink({ href: '#projects', text: 'Projects' })}
              <NavLinkSeparator />
              {NavLink({ href: '#contact', text: 'Contact' })}
              <NavLinkSeparator />
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

function NavLinkSeparator() {
  return <Box
    sx={{
      width: '1px',
      height: '24px',
      bgcolor: 'white',
      opacity: 0.5,
    }}
  />
}

function NavLink({ href, text }: { href: string, text: string }) {
  return <Link href={href} sx={{ 
    textDecoration: 'none',
    color: 'text.primary',
    '&:hover': { 
      color: 'primary.main',
      transform: 'scale(1.1)',
      transition: 'transform 0.3s ease',
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    fontSize: '1.25rem',
    fontWeight: 700,
    transition: 'color 0.3s ease',
    padding: '10px 20px',
    borderRadius: '5px',
  }}>
    {text}
  </Link>
}
