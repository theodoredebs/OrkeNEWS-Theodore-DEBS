import { Link, useLocation } from "react-router-dom";
import { categories } from "../utils/consts";
import { IconButton, Tab, Tabs, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const matches = useMediaQuery("(min-width:600px)");
  const closeDrawer = () => setOpen(false);
  const openDrawer = () => setOpen(true);
  return (
    <header className="flex  items-center justify-between mx-auto px-[5%] py-3 gap-3 overflow-hidden border-b-2 border-solid border-[#C3181555]">
      <Link to="/" className="text-5xl">
        OrkeNEWS
      </Link>
      {matches ? (
        <nav className=" md:max-w-[400px] lg:max-w-[80%]">
          <Tabs
            value={
              categories.find(
                (cat) => cat.toLowerCase() === pathname.split("/")[1]
              ) || false
            }
            variant="scrollable"
            role="navigation"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="nav tabs"
          >
            {categories.map((cat) => (
              <Tab
                key={cat}
                label={cat}
                component={Link}
                to={`/${cat.toLowerCase()}`}
                value={cat.toLowerCase()}
                sx={{ paddingTop: "0", paddingBottom: "0", fontSize: 12 }}
                className="p-0 text-sm"
              />
            ))}
          </Tabs>
        </nav>
      ) : (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openDrawer}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Sidebar open={open} onClose={closeDrawer}>
            <Tabs
              value={
                categories.find(
                  (cat) => cat.toLowerCase() === pathname.split("/")[1]
                ) || false
              }
              variant="scrollable"
              role="navigation"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="nav tabs"
              orientation="vertical"
              className="min-w-[250px]"
            >
              {categories.map((cat) => (
                <Tab
                  key={cat}
                  label={cat}
                  component={Link}
                  to={`/${cat.toLowerCase()}`}
                  value={cat.toLowerCase()}
                  sx={{ paddingTop: "0", paddingBottom: "0", fontSize: 12 }}
                  className="p-0 text-sm"
                  onClick={closeDrawer}
                />
              ))}
            </Tabs>
          </Sidebar>
        </>
      )}
    </header>
  );
};
export default Header;
