import Download from "../../images/download.png"
import Home from "../../images/home.png"
import Search from "../../images/search.png"
import Explore from "../../images/explore.png"
import Spotify from "../../images/spotify-icon.png"
import Notification from "../../images/notification.png"
import Image from 'next/image' 
import "./navbar.css"

export default async function NavBar() {
    return (
        <nav className="bg-black grid grid-cols-3 h-[70px] items-center 
                        max-[1200px]:grid-cols-[auto,1fr,1fr] max-[800px]:gap-2">
            <div className="flex max-[1200px]:mr-2 max-[615px]:h-[40px] max-[615px]:w-[40px]">
                <Image 
                    width="40" 
                    height="40" 
                    src={Spotify} 
                    alt="Spotify-Icon" 
                    className="invert ml-4"
                />
            </div>
            
            <div className="flex items-center">
                <div id="icon-home" className="bg-[#1f1f1f] cursor-pointer rounded-full h-[50px] w-[50px] flex items-center transition duration-200 justify-center mr-4 hover:bg-[#313131] hover:scale-105">
                    <Image 
                        width="23" 
                        height="23" 
                        src={Home} 
                        alt="Home-Icon"
                        id="icon-home-img" 
                        className="invert opacity-55"
                    />
                </div>

                <div id="search-nav" className="flex bg-[#1f1f1f] transition duration-500 ease-in-out rounded-full h-[50px] w-[500px] justify-between hover:bg-[#313131] outline outline-1 outline-transparent hover:outline-[#757575]
                                                max-[1000px]:w-[320px]">
                    <div id="search-nav-div" className="flex items-center justify-center">
                        <Image 
                            id="search-nav-img"
                            src={Search} 
                            alt="Search-Icon" 
                            className="w-[30px] h-[30px] ml-2 mr-3 opacity-50 cursor-pointer transition-all duration-500 brightness-200"
                        />
                        <input 
                            type="search" 
                            placeholder="O que você quer ouvir?"
                            id="" 
                            className="bg-transparent cursor-pointer placeholder:text-[0.9rem]"
                        />
                    </div>
                    <div className="flex items-center justify-center mr-3">
                        <span>|</span>
                        <Image 
                            src={Explore} 
                            alt="Explore-Icon" 
                            className="invert w-[30px] h-[30px] ml-3 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center ml-[20%]">
                <div className="flex justify-center items-center mr-10 opacity-75 hover:opacity-100 contrast-200 brightness-200 hover:scale-105">
                    <Image 
                        src={Download} 
                        alt="Download-Icon" 
                        className="invert w-[17px] h-[17px] mr-2"
                    />
                    <h2 className="text-[0.8rem] text-[#b3b3b3] font-extrabold cursor-pointer
                                   max-[975px]:text-[12px]">Instalar Aplicativo</h2>
                </div>
                <Image 
                    src={Notification} 
                    alt="Notification-Icon" 
                    className="invert w-[18px] h-[18px] mr-5 cursor-pointer contrast-200 brightness-200 opacity-75 hover:opacity-100 hover:scale-105"
                />
                <span className="bg-pink-500 outline outline-8 outline-gray-800 rounded-full w-[30px] p-1 flex items-center justify-center cursor-pointer text-black">R</span>
            </div>
        </nav>
    );
}