import React, { FC, PropsWithChildren } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Navbar } from "../navbar";
import styled from "styled-components";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  height: 100%;
`;

export default Layout;
