import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the URL's #anchor after a client-side navigation, which React Router doesn't do. */
export const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);
};
