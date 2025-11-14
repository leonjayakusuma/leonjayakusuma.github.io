import { AppBar, Toolbar, Container, Box, Typography, Button, Card, CardContent, Grid, Link, useScrollTrigger, Slide } from '@mui/material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation */}
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

      {/* Hero Section */}
      <Box 
        id="home" 
        sx={{ 
          pt: { xs: 20, sm: 25 }, 
          pb: 10, 
          px: { xs: 2, sm: 3 }, 
          background: 'linear-gradient(135deg, #1e293b 0%, #312e81 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '3rem', sm: '4rem', lg: '5rem' }, 
                fontWeight: 700, 
                mb: 2,
                color: 'text.primary'
              }}
            >
              Hi, I'm <Box component="span" sx={{ color: 'primary.main' }}>Leon Jayakusuma</Box>
            </Typography>
            <Typography variant="h4" sx={{ mb: 2, color: 'text.secondary', fontWeight: 400 }}>
              Full Stack Developer
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
              I build beautiful and functional web applications with modern technologies
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <Button 
                href="#contact" 
                variant="contained" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  boxShadow: 3,
                  '&:hover': { boxShadow: 6 }
                }}
              >
                Get In Touch
              </Button>
              <Button 
                href="#projects" 
                variant="outlined" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  borderWidth: 2,
                  '&:hover': { borderWidth: 2, bgcolor: 'rgba(99, 102, 241, 0.1)' }
                }}
              >
                View My Work
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            About Me
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
              I'm a passionate developer who loves creating innovative solutions and 
              bringing ideas to life through code. With a strong foundation in modern 
              web technologies, I enjoy building user-friendly applications that make 
              a difference.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'text.secondary' }}>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            Skills & Technologies
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Frontend
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2, listStyle: 'none' }}>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>React</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>TypeScript</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>HTML/CSS</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>JavaScript</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Backend
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2, listStyle: 'none' }}>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>Node.js</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>RESTful APIs</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>Database Design</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>Server Management</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    Tools
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2, listStyle: 'none' }}>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>Git & GitHub</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>Vite</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>VS Code</Box>
                    <Box component="li" sx={{ mb: 1, color: 'text.secondary' }}>CI/CD</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((num) => (
              <Grid item xs={12} sm={6} md={4} key={num}>
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
                      Project {num}
                    </Typography>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      Project Title
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', flexGrow: 1 }}>
                      A brief description of the project and what technologies were used.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Link href="#" sx={{ color: 'primary.main', fontWeight: 500, '&:hover': { color: 'primary.dark' } }}>
                        Live Demo
                      </Link>
                      <Link href="#" sx={{ color: 'primary.main', fontWeight: 500, '&:hover': { color: 'primary.dark' } }}>
                        GitHub
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" component="section" sx={{ py: 10, px: { xs: 2, sm: 3 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
              Get In Touch
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <Button 
                href="mailto:your.email@example.com"
                variant="contained"
                startIcon={<Email />}
                sx={{ 
                  px: 3, 
                  py: 1.5,
                  boxShadow: 2,
                  '&:hover': { boxShadow: 4 }
                }}
              >
                Email Me
              </Button>
              <Button 
                href="https://github.com"
                target="_blank"
                variant="contained"
                startIcon={<GitHub />}
                sx={{ 
                  px: 3, 
                  py: 1.5,
                  bgcolor: '#1f2937',
                  boxShadow: 2,
                  '&:hover': { bgcolor: '#111827', boxShadow: 4 }
                }}
              >
                GitHub
              </Button>
              <Button 
                href="https://linkedin.com"
                target="_blank"
                variant="contained"
                startIcon={<LinkedIn />}
                sx={{ 
                  px: 3, 
                  py: 1.5,
                  bgcolor: '#2563eb',
                  boxShadow: 2,
                  '&:hover': { bgcolor: '#1d4ed8', boxShadow: 4 }
                }}
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          py: 4, 
          px: { xs: 2, sm: 3 }, 
          bgcolor: 'background.paper', 
          color: 'text.secondary',
          textAlign: 'center'
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Leon Jayakusuma. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default App
