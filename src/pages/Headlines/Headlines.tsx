import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import NewsCard from "../../components/Card/Card";
import { axios } from "../../utils/apis/main";

interface ArticleSource {
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
const Headlines = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["Top"],
    queryFn: () =>
      axios.get("top-headlines?country=fr").then((res) => res.data),
  });
  console.log("data :>> ", data);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Grid container spacing={4}>
        {data?.articles?.map((art: ArticleSource) => (
          <Grid item key={art.url} lg={4} md={6} xs={12}>
            <NewsCard {...art} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Headlines;
