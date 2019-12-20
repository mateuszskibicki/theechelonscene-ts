import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface IProps {
  children: any;
}

export const MainLayout: React.FunctionComponent<any> = ({
  children
}: IProps) => {
  return (
    <>
      <Navbar />
      {children && children}
      <Footer />
    </>
  );
};
