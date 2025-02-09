import Image, { StaticImageData } from "next/image";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: StaticImageData;
};

const Button = (props: ButtonProps) => {
  const {children,icon} = props
  return (
    <button {...props} className={["btn px-[24] 3xl:px-[31] py-[10] 3xl:py-[13] text-[16px] 2xl:text-[20px] 3xl:text-[24px]",props.className ?? ""].join(" ")}>
      {
        !!icon && (
          <Image className="mr-[25] w-[30] lg:w-[49]" src={icon} alt="button-icon"/>
        ) 
      }
      {children}
    </button>
  )
}

export default Button;