import React from "react";
import { Navbar } from "./Navbar";
import HeadSEO from "./SEOhead";
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
      <HeadSEO />
      {children && children}
      <Footer />
    </>
  );
};
