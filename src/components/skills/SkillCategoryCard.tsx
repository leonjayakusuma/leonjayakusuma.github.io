import { Box, CardContent, Grid, Typography } from "@mui/material";
import { Card } from "@mui/material";
import type { SkillCategory, Skill } from "./interface";
import SkillCard from "./SkillCard";

export default function SkillCategoryCard({category}: {category: SkillCategory}) {
    return <Grid size={{ xs: 12, md: 4 }} key={category.title}>
      <Card sx={{ height: '100%', textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
            {category.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            {category.skills.map((skill: Skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  }