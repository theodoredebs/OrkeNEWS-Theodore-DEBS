import { Button, CardMedia, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet-async";

const NewsDetails = () => {
  const { state } = useLocation();
  const {
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
    source,
  } = state;

  return (
    <div className="flex flex-col gap-3 items-center ">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content="your,keywords,here" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={urlToImage} />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={urlToImage} />
      </Helmet>

      <div className="flex gap-3 items-center">
        <Typography
          variant="body2"
          className="text-white bg-black w-fit py-2 px-3 uppercase"
        >
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          {moment(publishedAt).format("MMM D, YYYY h:mm A")}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          Source: {source.name}
        </Typography>{" "}
      </div>

      <Typography variant="h1" fontSize={36}>
        {title}
      </Typography>
      <Typography fontSize={20}>{description}</Typography>
      <CardMedia
        sx={{ height: 500, width: "100%" }}
        image={
          urlToImage ||
          "https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png"
        }
        title={title}
      />
      <Typography>{content}</Typography>
      <Button
        variant="outlined"
        className="w-fit"
        size="small"
        component={"a"}
        href={url}
      >
        Read More
      </Button>
    </div>
  );
};

export default NewsDetails;
