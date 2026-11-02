import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 800);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a href="#top" className={`back-to-top${visible ? " is-visible" : ""}`} tabIndex={visible ? 0 : -1} aria-hidden={!visible}>
      <span aria-hidden="true">↑</span> Back to top
    </a>
  );
};

export default BackToTop;
