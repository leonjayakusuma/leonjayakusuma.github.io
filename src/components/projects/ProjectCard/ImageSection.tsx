import { Box, Card, Typography, Grid } from "@mui/material";

export default function ImageSection() {
  return (
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
}