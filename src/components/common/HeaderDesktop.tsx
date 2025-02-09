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
    <div className="header-desktop hidden lg:flex justify-between items-center px-[40] xl-px-[60] 2xl:px-[90] h-[80] 2xl:h-[102] text-[12px] xl:text-[16px] 3xl:text-[22px]">
      <div className="flex items-center">
        <div className="header-logo-box">
          <Image src={netflixLogo} alt="Netlix logo" />
        </div>
        <div className="header-left-menu flex items-center ml-[24] xl:ml-[30] 2xl:ml-[67]">
          {
            desktopMenuItems.map(item => (
              <Link href={item.href} key={item.name}>
                <div className={classNames("desktop-menu-item ml-[24] 2xl:ml-[28]", { "active": activeMenu === item.name })}>
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
        <div className="desktop-menu-item ml-[24] 2xl:ml-[33]">
          Kids
        </div>
        <div className="ml-[33]">
          <Image src={bellIcon} alt="Bell Icon" />
        </div>
        <div className="avatar-box ml-[24]  2xl:ml-[33]"/>
        <div className="ml-[15]">
          <Image src={arrowIcon} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  )
}
export default HeaderDesktop