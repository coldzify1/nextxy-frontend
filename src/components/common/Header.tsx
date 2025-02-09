import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
const Header = () => {
  const [top, setTop] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setTop(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const onTop = top === 0
  return (
    <div className={classNames("header fixed z-[1000] w-full top-0",{"onTop" : onTop})} ref={headerRef}>
      <HeaderDesktop />
      <HeaderMobile onTop={onTop} />
    </div>
  )
}
export default Header;