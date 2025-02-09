import Image from "next/image";
import netflixLogo from "../../../public/images/NetflixLogo.png"
const Loading = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <Image src={netflixLogo} alt="Netlix logo" />
    </div>
  )
}
export default Loading