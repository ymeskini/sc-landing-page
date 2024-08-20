import React, { FC, PropsWithChildren } from "react";
import { GlobalStyles } from "./layout/GlobalStyles";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default Layout;
