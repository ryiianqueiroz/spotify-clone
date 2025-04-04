import Image from "next/image";
//import AlbumCover from "../../images/album-cover.jpeg"
import Check from "../../images/check.png"
import RefreshArrow from "../../images/refresh-arrow.png"
import Back from "../../images/back.png"
import Arrow from "../../images/right-arrowhover.png"
import Shuffle from "../../images/shuffle.png"
import PlayImg from "../../images/play.png"
import Microphone from "../../images/microphone.png"
import Stack from "../../images/stack.png"
import Laptop from "../../images/laptop-computer.png"
import Volume from "../../images/volume.png"
import Fullscreen from "../../images/fullscreen.png"
import Expand from "../../images/expand.png"
import OIP from "../../images/covers/OIP.jpg"

export default function Play() {
    return (
        <div className="grid grid-cols-3 absolute bg-black h-[90px] w-full bottom-0 z-50
                        max-[1000px]:grid-cols-[auto,2fr,1fr] max-[800px]:min-w-[800px]">
            <div className="flex ml-8 my-auto items-center">
                <Image alt="album-cover" src={OIP} className="w-[55px] h-[55px]"></Image>
                <div className="flex flex-col ml-4 break-keep min-w-[60px] overflow-hidden">
                    <h1 className="text-[14px]">The Hills</h1>
                    <p className="text-[11px] text-[#c0c0c0]">The Weeknd</p>
                </div>
                <div className="bg-green-400 rounded-full w-4 h-4 ml-4 flex items-center justify-center">
                    <Image src={Check} alt="liked" className="w-2 h-2"/>
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <div className="flex gap-7 items-center justify-center max-[1000px]:gap-4">
                    <Image alt="img" src={Shuffle} className="w-5 h-[18px] invert cursor-pointer contrast-50 hover:contrast-100 hover:scale-105"></Image>
                    <Image alt="img" src={Back} className="w-4 h-4 invert cursor-pointer contrast-50 hover:contrast-100 hover:scale-105"></Image>
                    <div className="flex justify-center items-center bg-white rounded-full p-2 cursor-pointer">
                        <Image alt="img" src={Arrow} className="w-3 h-3 invert ml-[1px] cursor-pointer"></Image>
                    </div>
                    <Image alt="img" src={Back} className="w-4 h-4 invert rotate-180 cursor-pointer contrast-50 hover:contrast-100 hover:scale-105"></Image>
                    <Image alt="img" src={RefreshArrow} className="w-5 h-[18px] invert cursor-pointer contrast-50 hover:contrast-200 hover:scale-105"></Image>
                </div>
                <div className="flex mt-2 gap-2 items-center justify-center">
                    <p className="text-[0.8rem] text-[#b3b3b3]">0:00</p>
                    <input type="range" className="h-1 w-[550px] appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none bg-[#464646]
                                                   max-[1200px]:w-[30vw] max-[1000px]:w-[20vw]"/>
                    <p className="text-[0.8rem] text-[#b3b3b3]">2:56</p>
                </div>
            </div>
            <div className="flex absolute items-center gap-4 mr-4 top-0 bottom-0 right-0 max-[1000px]:gap-2">
                <Image alt="img" src={PlayImg} className="w-5 h-5 invert contrast-50 max-[1000px]:w-4 max-[1000px]:h-4"></Image>
                <Image alt="img" src={Microphone} className="w-4 h-4 invert contrast-50 max-[1000px]:w-4 max-[1000px]:h-4"></Image>
                <Image alt="img" src={Stack} className="w-4 h-5 invert contrast-50 max-[1000px]:w-4 max-[1000px]:h-4"></Image>
                <Image alt="img" src={Laptop} className="w-4 h-5 invert contrast-50 max-[1000px]:w-4 max-[1000px]:h-4"></Image>
                <Image alt="img" src={Volume} className="w-4 h-5 invert mr-[-10px] contrast-50 max-[1000px]:w-4 max-[1000px]:h-4"></Image>
                <input type="range" className="h-1 w-[95px] appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none bg-[white]"/>
                <Image alt="img" src={Fullscreen} className="w-5 h-5 invert contrast-50 max-[1000px]:w-4 max-[1000px]:h-4"></Image>
                <Image alt="img" src={Expand} className="w-3 h-3 invert contrast-50 max-[1000px]:w-3 max-[1000px]:h-3"></Image>
            </div>
        </div>
    )
}