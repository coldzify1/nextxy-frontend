import nextFlixSans from "@/fonts/nextflix-sans";
import Header from "./Header"
import Loading from "./Loading";
import Error from "./Error";

type LayoutProps = {
  children?: React.ReactNode;
  loading?: boolean;
  error?: boolean;
};

const Layout = (props: LayoutProps) => {
  const {loading = false, error = false} = props;
  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }
  return (
    <div className={`layout ${nextFlixSans.className}`}>
      <Header/>
      <div className="main">
        {props.children}
      </div>
    </div>
  )
}

export default Layout