import { Send } from "@mui/icons-material";
import { Paper, IconButton, InputBase, Divider } from "@mui/material";
import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setSearchParams({ q: searchTerm });
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "50%",
          minWidth: 300,
        }}
        onSubmit={handleSearch} // Attach onSubmit to the handleSearch function
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search OrkeNEWS"
          inputProps={{ "aria-label": "search orkenews" }}
          onChange={(e) => setSearchTerm(e.target.value)}
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
      <Outlet />
    </>
  );
};

export default Search;
