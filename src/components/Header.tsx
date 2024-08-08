import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link className="flex justify-center items-center text-3xl font-bold tracking-tight text-orange-500" to="/">
            <img className="inline w-16 mr-2 mb-2" src="../../apple-touch-icon.png"/>
            āeCHEF
            </Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>
        </div>
    </div>
  )
}

export default Header;