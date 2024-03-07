import { useInfiniteQuery } from "@tanstack/react-query";
import { axios } from "../../utils/apis/main";

import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import NewsCard from "../../components/Card/Card";
import { Fragment, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { languageOptions, sortOptions } from "../../utils/consts";
import DatePicker from "react-datepicker";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";
import NewsCardSkeleton from "../../components/Card/NewsCardSkeleton";
import { ArticleSource } from "./IHome";

const Home = () => {
  const { ref, inView } = useInView();
  const { type } = useParams();
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  const [selectedLanguages, setSelectedLanguages] = useState("en");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [
      "everything",
      type,
      sortBy,
      selectedLanguages,
      startDate,
      endDate,
    ],
    queryFn: async ({ pageParam }) =>
      axios
        .get(`top-headlines?&pageSize=10`, {
          params: {
            sortBy: sortBy,
            page: pageParam,
            language: selectedLanguages || "en",
            from: startDate,
            to: endDate,
            category: type,
          },
        })
        .then((res) => res),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.config.params.page + 1,
  });

  const sortByHandler = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };
  const languageshandler = (event: SelectChangeEvent) => {
    setSelectedLanguages(event.target.value);
  };

  //this useEffect is for infinite scroll detection when scrolling down to the button
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      <Helmet>
        <title>{type || "OrkeNEWS- bitcoins"}</title>
        <meta property="og:title" content={type || "OrkeNEWS- bitcoins"} />
        <meta name="twitter:title" content={type || "OrkeNEWS- bitcoins"} />
      </Helmet>

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <strong>
          OrkeNEWS:
          <TypeAnimation
            sequence={[
              "Unveiling the Symphony of Stories.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Where Every Story Finds its Beat.",
              1000,
              "Your Daily News Overture.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </strong>
        <div className="flex gap-3 ml-auto">
          <DatePicker
            className=""
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: [Date, Date]) => {
              setDateRange(update);
            }}
            withPortal
            maxDate={new Date()}
            placeholderText="Select Date Range"
          />

          <Select
            value={selectedLanguages}
            onChange={languageshandler}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size="small"
          >
            {languageOptions.map((opt) => (
              <MenuItem value={opt.value} key={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>

          <Select
            value={sortBy}
            onChange={sortByHandler}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size="small"
          >
            {sortOptions.map((opt) => (
              <MenuItem value={opt.value} key={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      {status === "pending" ? (
        <Grid container spacing={4}>
          <NewsCardSkeleton />
        </Grid>
      ) : status === "error" ? (
        <span>Error: {error.message}</span> //we can update this fallback component later
      ) : (
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
      )}
    </>
  );
};

export default Home;
