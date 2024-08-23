import React, { FC, PropsWithChildren } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Navbar } from "../navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
