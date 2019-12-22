import React from "react";
import { Navbar } from "./Navbar";
import HeadSEO from "./SEOhead";
import { Footer } from "./Footer";

interface IProps {
  children: any;
}

export const MainLayout: React.FC<any> = ({
  children
}: IProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <HeadSEO />
      {children && children}
      <Footer />
    </>
  );
};
