import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { getTimeAgo } from "../../utils/functions/functions";

interface NewsCardProps {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const NewsCard = (props: NewsCardProps) => {
  const {
    urlToImage,
    title,
    description,
    publishedAt,
    source,
    author,
    url,
    content,
  } = props;

  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={
          urlToImage ||
          "https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png"
        }
        title={title}
      />
      <CardContent sx={{ height: 200, overflow: "auto" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "", gap: "1px", alignItems: "center" }}>
        <Typography variant="body2">{getTimeAgo(publishedAt)}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          By {author}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          Source: {source.name}
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" component={"a"} href={url}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
