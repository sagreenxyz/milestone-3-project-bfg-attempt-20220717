import Footer from "./Footer"
import Navbar from "./Navbar"


export default function Layout ({ children }) {
    return (
        <div className="bg-gray-500">
            <Navbar/>
            { children }
            <Footer/>
        </div>
    );
}