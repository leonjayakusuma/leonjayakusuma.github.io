import { Box, Card, Grid, Link } from "@mui/material";

interface ImageSectionProps {
  imageUrl?: string;
  alt?: string;
  linkUrl?: string;
}

export default function ImageSection({ imageUrl, alt = "Project thumbnail", linkUrl }: ImageSectionProps) {
  const imageContent = imageUrl ? (
    <Box
      component="img"
      src={imageUrl}
      alt={alt}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block',
      }}
      loading="lazy"
      decoding="async"
    />
  ) : (
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
      {/* Placeholder content when no image */}
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', opacity: 0.7 }}>
          No image available
        </Box>
      </Box>
    </Box>
  );

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
            boxShadow: '0 20px 60px rgba(255, 255, 255, 0.4)',
            transition: 'transform 0.3s ease, boxShadow 0.3s ease',
            cursor: 'pointer',
          }
        }}
      >
        {linkUrl && linkUrl !== '#' ? (
          <Link
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
              textDecoration: 'none',
            }}
          >
            {imageContent}
          </Link>
        ) : (
          imageContent
        )}
      </Card>
    </Grid>
  )
}