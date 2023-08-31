import Image from "next/image";
import Link from "next/link";
import myImg from "@/images/MyImg.png";

const Header = () => {
    return (
        <header className="flex items-center justify-center sm:justify-between space-x-2 font-bold px-10 py-2">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        src={myImg}
                        alt="logo"
                        height={50}
                        width={50}
                        className="rounded-full bg-yellow-500"
                    />
                </Link>
                <h1 className="text-xl">Blink Blog</h1>
            </div>
            <div className="hidden sm:block">
                <Link
                    href="#"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-yellow-500 flex items-center rounded-full text-center"
                >
                    Sign up for daily Blog
                </Link>
            </div>
        </header>
    );
};

export default Header;
