import Image from "next/image";
import nextFlixN from "../../../public/images/NextflixN.png";
import castIcon from "../../../public/images/chromecast.png";
import Link from "next/link";
import arrowIcon from "../../../public/images/Arrow.png"
import classNames from "classnames";

interface HeaderMobileProps {
  onTop?: boolean
}

const HeaderMobile = (props: HeaderMobileProps) => {
  const { onTop = true } = props;
  return (
    <div className="lg:hidden px-[30px] py-[24px] md:px-[39px]">
      <div className="flex justify-between items-center">
        <div className="relative w-[30px] h-[53px] md:w-[44px] md:h-[79px]">
          <Image
            src={nextFlixN}
            fill
            alt="Nextflix N character"
          />
        </div>

        <div className="flex items-center">
          <Image
            src={castIcon}
            width={54}
            height={44}
            alt="Chromecast Icon"
          />
          <div className="avatar-box ml-[24px] md:ml-[50px] w-[58px] h-[59px]" />
        </div>
      </div>
      <div className={classNames("mt-[44px] flex justify-center items-center text-[18px] sm:text-[30px] lg:text-[38px]", { "hidden": !onTop })}>
        <Link href="/">
          <div className="desktop-menu-item">
            TV Shows
          </div>
        </Link>
        <Link href="/">
          <div className="desktop-menu-item ml-[24px] sm:ml-[48px] md:ml-[106px]">
            Movies
          </div>
        </Link>
        <Link href="/">
          <div className="desktop-menu-item ml-[24px] sm:ml-[48px] md:ml-[106px]">
            Categories
            <div className="ml-[9px] md:hidden">
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
              />
            </div>
            <div className="ml-[9px] hidden md:block">
              <Image
                src={arrowIcon}
                width={35}
                height={17}
                alt="Arrow Icon"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default HeaderMobile