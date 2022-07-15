import Footer from "./Footer"
import Navbar from "./Navbar"
import Side_Nav from "./Side_Nav";


export default function Layout ({ children }) {
    return (
        <div className="bg-gray-500">
            <Navbar/>
            <div className="bg-gray-300 inline-flex w-full">
                <Side_Nav />
                { children }
            </div>
            <Footer/>
        </div>
    );
}