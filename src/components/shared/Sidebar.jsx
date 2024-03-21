"use client";
import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { VscThreeBars } from "react-icons/vsc";
import Link from "next/link";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const navLinks = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Discussion Forum",
      pathname: "/discussionForum",
    },
    {
      route: "Market Stories",
      pathname: "/marketStories",
    },
    {
      route: "Sentiment",
      pathname: "/sentiment",
    },
    {
      route: "Market",
      pathname: "/market",
    },
    {
      route: "Sector",
      pathname: "/sector",
    },
    {
      route: "Watch list",
      pathname: "/watchList",
    },
    {
      route: "Events",
      pathname: "/events",
    },
    {
      route: "News/Interview",
      pathname: "/newsInterview",
    },
  ];

  return (
    <>
      <Space>
        <Button onClick={showDrawer}>
          <VscThreeBars className=" text-xl" />
        </Button>
      </Space>
      <Drawer
        title="Hello, User"
        placement={placement}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {navLinks.map((item) => (
          <Link key={item} href={item.pathname}>
            <div className="text-black font-bold grid mt-4 text-start border py-2 px-5 rounded-md bg-slate-50">
              {item.route}
            </div>
          </Link>
        ))}
      </Drawer>
    </>
  );
};
export default Sidebar;
