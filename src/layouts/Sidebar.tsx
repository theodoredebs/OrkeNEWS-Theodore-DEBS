import { Drawer } from "@mui/material";
import React from "react";

interface SidebarProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean | undefined;
}

const Sidebar = (props: SidebarProps) => {
  const { open, onClose, children } = props;
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      {children}
    </Drawer>
  );
};

export default Sidebar;
