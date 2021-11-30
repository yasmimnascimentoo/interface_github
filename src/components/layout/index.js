import React from "react";
import Header from "../header";
import {WrapperLayout} from "./style";

const Layout = ({ children }) => {
  return (
    <WrapperLayout>
      <Header />
      {children}
    </WrapperLayout>
  );
};

export default Layout;
