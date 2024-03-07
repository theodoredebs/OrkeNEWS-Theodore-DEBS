import { Grid, Skeleton, Box } from "@mui/material";

const NewsCardSkeleton = () => {
  return [...Array(3)].map((_, index) => (
    <Grid item key={index} lg={4} md={6} xs={12}>
      <Skeleton variant="rectangular" height={200} />
      <Box height={200}>
        <Skeleton />
        <Skeleton width="40%" />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Grid>
  ));
};

export default NewsCardSkeleton;
