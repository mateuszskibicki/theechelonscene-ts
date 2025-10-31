import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'newsletter_auto_popup_last_shown';
const AUTO_POPUP_DELAY = 40000; // 40 seconds in milliseconds
const POPUP_COOLDOWN = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

export const useAutoNewsletterPopup = (onShowModal: () => void) => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const shouldShowAutoPopup = (): boolean => {
    const lastShownStr = localStorage.getItem(STORAGE_KEY);
    if (!lastShownStr) return true;

    const lastShown = parseInt(lastShownStr, 10);
    const now = Date.now();
    const timeSinceLastShown = now - lastShown;

    return timeSinceLastShown >= POPUP_COOLDOWN;
  };

  const markAsShown = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  useEffect(() => {
    // Only show auto popup if user hasn't seen it recently and hasn't been triggered yet
    if (shouldShowAutoPopup() && !hasTriggered) {
      timeoutRef.current = setTimeout(() => {
        onShowModal();
        setHasTriggered(true);
        markAsShown();
      }, AUTO_POPUP_DELAY);
    }

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasTriggered, onShowModal]);

  return {
    hasTriggered,
    markAsShown
  };
};
