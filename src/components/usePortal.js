import { useCallback, useEffect, useState } from "react";
import { createPortal, unmountComponentAtNode } from "react-dom";

const usePortal = (el) => {
  const [portal, setPortal] = useState({
    render: () => null,
    remove: () => null,
  });

  const myCreatePortal = useCallback((el) => {
    const Portal = ({ children }) => createPortal(children, el);
    const remove = () => unmountComponentAtNode(el);
    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (el) portal.remove();
    const newPortal = myCreatePortal(el);
    setPortal(newPortal);
    return () => newPortal.remove(el);
  }, [el]);

  return portal.render;
};
export default usePortal;
