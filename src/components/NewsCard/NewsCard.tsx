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
import { NewsCardProps } from "./INewsCard";

/**
 * NewsCardProps interface defines the props expected by the NewsCard component.
 
 * NewsCard is a React component that displays news information in a card format.
 *
 * @param {NewsCardProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered NewsCard component.
 */
const NewsCard = (props: NewsCardProps): JSX.Element => {
  const { urlToImage, title, description, publishedAt, source, author } = props;

  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={
          urlToImage ||
          "https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png"
        }
        alt={title}
        component="img"
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
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
