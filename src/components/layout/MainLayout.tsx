import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import HeadSEO from "./SEOhead";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
import { NewsletterModal, NewsletterModalProvider, useNewsletterModalContext } from "../newsletter-modal";
import { useAutoNewsletterPopup } from "../../hooks/useAutoNewsletterPopup";

interface IProps {
  children: any;
}

const MainLayoutContent: React.FC<IProps> = ({ children }): JSX.Element => {
  const { pathname } = useLocation();
  const { isOpen, openModal, closeModal } = useNewsletterModalContext();

  // Set up auto-popup functionality
  useAutoNewsletterPopup(openModal);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <HeadSEO />
      {children && children}
      <Footer />
      <NewsletterModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export const MainLayout: React.FC<any> = ({
  children
}: IProps): JSX.Element => {
  return (
    <NewsletterModalProvider>
      <MainLayoutContent children={children} />
    </NewsletterModalProvider>
  );
};
