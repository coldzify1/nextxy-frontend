import Image from "next/image";
import netflixLogo from "../../../public/images/NetflixLogo.png"
import searchIcon from "../../../public/images/Search.png"
import bellIcon from "../../../public/images/Bell.png"
import arrowIcon from "../../../public/images/Arrow.png"
import desktopMenuItems from "@/constants/desktop-menu-items";
import Link from "next/link";
import classNames from "classnames";

interface HeaderDesktopProps {
  activeMenu?: string
}
const HeaderDesktop = (props: HeaderDesktopProps) => {
  const { activeMenu = 'Home' } = props;
  return (
    <div className="header-desktop hidden lg:flex justify-between items-center px-[40px] xl-px-[60px] 2xl:px-[90px] h-[80px] 2xl:h-[102px] text-[12px] xl:text-[16px] 3xl:text-[22px]">
      <div className="flex items-center">
        <div className="header-logo-box">
          <Image src={netflixLogo} alt="Netlix logo" />
        </div>
        <div className="header-left-menu flex items-center ml-[24px] xl:ml-[30px] 2xl:ml-[67px]">
          {
            desktopMenuItems.map(item => (
              <Link href={item.href} key={item.name}>
                <div className={classNames("desktop-menu-item ml-[24px] 2xl:ml-[28px]", { "active": activeMenu === item.name })}>
                  {item.name}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <Image src={searchIcon} alt="Search Icon" />
        </div>
        <div className="desktop-menu-item ml-[24px] 2xl:ml-[33px]">
          Kids
        </div>
        <div className="ml-[33px]">
          <Image src={bellIcon} alt="Bell Icon" />
        </div>
        <div className="avatar-box ml-[24px]  2xl:ml-[33px]"/>
        <div className="ml-[15px]">
          <Image src={arrowIcon} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  )
}
export default HeaderDesktop