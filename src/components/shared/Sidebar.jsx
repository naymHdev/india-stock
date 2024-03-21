"use client";
import React, { useState } from "react";
import { Drawer, Space } from "antd";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
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
        <div className="bg-[#0A1237] px-4 py-2 rounded-md hover:cursor-pointer" onClick={showDrawer}>
          <VscThreeBars className=" text-xl text-white" />
        </div>
      </Space>
      <Drawer
      onClose={onClose}
        placement={placement}
        open={open}
        key={placement}
        extra={
          <Space>
            <h2 className=" text-xl text-white font-semibold -ml-[280px]">
              Hello, User
            </h2>
            <IoMdNotificationsOutline className="text-3xl hover:cursor-pointer text-white" />
          </Space>
        }
        style={{ background: "#0B1337" }}
      >
        <hr />
        {navLinks.map((item) => (
          <Link key={item} href={item.pathname}>
            <div className="font-bold grid text-start hover:shadow-xl py-3 px-5 rounded-sm text-white">
              {item.route}
            </div>
          </Link>
        ))}
      </Drawer>
    </>
  );
};
export default Sidebar;
