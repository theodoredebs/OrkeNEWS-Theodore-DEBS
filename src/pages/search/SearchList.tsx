import { Grid, Button } from "@mui/material";
import { Fragment, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NewsCard from "../../components/NewsCard/NewsCard";
import NewsCardSkeleton from "../../components/NewsCard/NewsCardSkeleton";
import { ArticleSource } from "../home/IHome";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { axios } from "../../utils/apis/main";

const SearchList = () => {
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");
  const { ref, inView } = useInView();

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["everything", q],
    queryFn: async ({ pageParam }) =>
      axios
        .get(`everything?&pageSize=10`, {
          params: {
            page: pageParam,
            q: q,
          },
        })
        .then((res) => res),
    enabled: Boolean(q),

    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.config.params.page + 1,
  });
  //this useEffect is for infinite scroll detection when scrolling down to the button
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  if (!q) return null;
  console.log("data?.pages?.length :>> ", data?.pages?.[0]);
  return (
    <div>
      {status === "pending" ? (
        <Grid container spacing={4}>
          <NewsCardSkeleton />
        </Grid>
      ) : status === "error" ? (
        <span>Error: {error.message}</span> //we can update this fallback component later
      ) : data?.pages?.[0]?.data?.articles?.length ? (
        <>
          <Grid container spacing={4}>
            {data?.pages?.map((el, index) => (
              <Fragment key={index}>
                {el?.data?.articles?.map((art: ArticleSource) => (
                  <Grid
                    item
                    key={art.url}
                    lg={4}
                    md={6}
                    xs={12}
                    className="cardHome"
                  >
                    <Link to={`/news-details/${art.title}`} state={art}>
                      <NewsCard {...art} />
                    </Link>
                  </Grid>
                ))}
              </Fragment>
            ))}
          </Grid>
          <Button
            variant="outlined"
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load Newer"
              : "Nothing more to load"}
          </Button>
          <div>
            {isFetching && !isFetchingNextPage
              ? "Background Updating..."
              : null}
          </div>
        </>
      ) : (
        <>No Search found</> //we can update the UI of No data found component
      )}
    </div>
  );
};

export default SearchList;
