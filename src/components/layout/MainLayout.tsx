import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import HeadSEO from "./SEOhead";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";

interface IProps {
  children: any;
}

export const MainLayout: React.FC<any> = ({
  children
}: IProps): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <HeadSEO />
      {children && children}
      <Footer />
    </>
  );
};
