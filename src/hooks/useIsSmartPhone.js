import { useState, useEffect } from "react";

const useIsSmartPhone = (num) => {
  const [isSmartPhone, setIsSmartPhone] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (num) setIsSmartPhone(window.innerWidth <= num);
      else setIsSmartPhone(window.innerWidth <= 600);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [isSmartPhone]);

  return isSmartPhone;
};

export default useIsSmartPhone;
