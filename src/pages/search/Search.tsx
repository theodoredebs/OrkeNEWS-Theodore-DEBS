import { Send } from "@mui/icons-material";
import { Paper, IconButton, InputBase, Divider } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Outlet, useSearchParams } from "react-router-dom";

interface SearchFormData {
  search: string;
}

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleSubmit, control } = useForm<SearchFormData>({
    defaultValues: {
      search: searchParams.get("q") || "",
    },
  });

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    setSearchParams({ q: data.search });
  };

  return (
    <>
      <Paper
        component="form"
        className="px-[4px] py-[2px] flex items-center w-fit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="search"
          control={control}
          rules={{ required: "Search term is required" }}
          render={({ field, fieldState: { error } }) => (
            <div className="relative">
              <InputBase
                {...field}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search OrkeNEWS"
                inputProps={{ "aria-label": "search orkenews" }}
              />
              {error && (
                <span className="text-[red] absolute bottom-[-45px] whitespace-nowrap left-0">
                  {error.message}
                </span>
              )}
            </div>
          )}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          type="submit"
        >
          <Send />
        </IconButton>
      </Paper>

      {/* Render your search results or other content using the Outlet */}
      <Outlet />
    </>
  );
};

export default Search;
