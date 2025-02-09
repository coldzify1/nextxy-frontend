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
    <div className="lg:hidden px-[30] py-[24] md:px-[39]">
      <div className="flex justify-between items-center">
        <div className="relative w-[30] h-[53] md:w-[44] md:h-[79]">
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
          <div className="avatar-box ml-[24] md:ml-[50] w-[58] h-[59]" />
        </div>
      </div>
      <div className={classNames("mt-[44] flex justify-center items-center text-[18px] sm:text-[30px] md:text-[38px]", { "hidden": !onTop })}>
        <Link href="/">
          <div className="desktop-menu-item">
            TV Shows
          </div>
        </Link>
        <Link href="/">
          <div className="desktop-menu-item ml-[24] md:ml-[106]">
            Movies
          </div>
        </Link>
        <Link href="/">
          <div className="desktop-menu-item ml-[24] md:ml-[106]">
            Categories
            <div className="ml-[9] md:hidden">
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
              />
            </div>
            <div className="ml-[9] hidden md:block">
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