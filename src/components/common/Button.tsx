import Image, { StaticImageData } from "next/image";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: StaticImageData;
};

const Button = (props: ButtonProps) => {
  const {children,icon} = props
  return (
    <button {...props} className={["btn px-[24px] 3xl:px-[31px] py-[10px] 3xl:py-[13px] text-[16px] 2xl:text-[20px] 3xl:text-[24px]",props.className ?? ""].join(" ")}>
      {
        !!icon && (
          <Image className="mr-[25px] w-[30px] lg:w-[49px]" src={icon} alt="button-icon"/>
        ) 
      }
      {children}
    </button>
  )
}

export default Button;