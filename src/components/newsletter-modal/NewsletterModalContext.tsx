import React, { createContext, useContext } from 'react';
import { useNewsletterModal } from '../../hooks/useNewsletterModal';

interface NewsletterModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const NewsletterModalContext = createContext<NewsletterModalContextType | undefined>(undefined);

export const useNewsletterModalContext = () => {
  const context = useContext(NewsletterModalContext);
  if (!context) {
    throw new Error('useNewsletterModalContext must be used within a NewsletterModalProvider');
  }
  return context;
};

interface NewsletterModalProviderProps {
  children: React.ReactNode;
}

export const NewsletterModalProvider: React.FC<NewsletterModalProviderProps> = ({ children }) => {
  const modalState = useNewsletterModal();

  return (
    <NewsletterModalContext.Provider value={modalState}>
      {children}
    </NewsletterModalContext.Provider>
  );
};
