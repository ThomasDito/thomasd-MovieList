import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import NavbarProd from "../components/navigation/NavbarProd";
import banner from "../assets/banner404.webp";
import Footer from "../components/navigation/Footer";

const NotFound = () => {
    const navigate = useNavigate();
    const homeRef = useRef(null);

    const image = {
        banner,
    };

    const goto = (el) => {
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="container mx-auto pt-12 sm:pt-14" ref={homeRef}>
            <NavbarProd />
            <div className="container mx-auto h-screen flex flex-col gap-6 justify-center items-center p-4">
                <div className="aspect-video w-full sm:w-125 overflow-hidden mx-auto">
                    <img
                        src={image.banner}
                        alt="404 banner"
                        loading="eager"
                        className="h-full w-full object-cover rounded-4xl"
                    />
                </div>
                <h1 className="text-center text-2xl font-bold">
                    Oppps, gak ketemu nihh...
                </h1>
                <p className="max-w-prose mx-auto text-center text-base/loose opacity-50">
                    sudah aku cari kemana-mana, tapi apa yang kamu cari tidak tersedia.
                </p>
                <button
                className="block mx-auto text-center bg-indigo-600 p-3 rounded-2xl w-full sm:w-40 cursor-pointer"
                onClick={() => navigate("/")}
                >
                    Go Back
                </button>
            </div>
            <Footer homeScroll={() => goto(homeRef.current)} />
        </div>
    );
};

export default NotFound;
