import { Box, Chip, Grid, Typography } from "@mui/material";
import type { Project } from "../interface";

export default function DescriptionSection({ project }: { project: Project }) {
    return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
          {project.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          {project.description}
        </Typography>
        {project.bulletPoints && (
          <Box component="ul" sx={{ pl: 2, mb: 2, color: 'text.secondary' }}>
            {project.bulletPoints.map((point, index) => (
              <Typography key={index} component="li" variant="body2" sx={{ mb: 0.5 }}>
                {point}
              </Typography>
            ))}
          </Box>
        )}
        {project.dateRange && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, textAlign: 'right' }}>
            {project.dateRange}
          </Typography>
        )}
        {project.technologies && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  color: 'text.primary',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  }
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Grid>
  )}