"use client"

import { useState, useRef, useEffect } from "react";
import LibraryImg from "../../images/library.png";
import RightArrow from "../../images/right-arrow (1).png";
import Add from "../../images/add.png";
import RightArrow2 from "../../images/right-arrow.png";
import RightArrowHover from "../../images/right-arrowhover.png";
import Search from "../../images/search.png";
import Lines from "../../images/lines.png";
import LikedSongs from "../../images/liked-songs.jpg";
// import pt1 from "../../images/covers/pt1.jpg"
import pt2 from "../../images/covers/pt2.jpg"
import pt3 from "../../images/covers/pt3.jpg"
import pt4 from "../../images/covers/pt4.jpg"
import pt5 from "../../images/covers/pt5.jpg"
import pt6 from "../../images/covers/pt6.jpg"
import pt7 from "../../images/covers/pt7.jpg"
import pt8 from "../../images/covers/pt8.jpg"
// import pt9 from "../../images/covers/pt9.jpg"
// import pt10 from "../../images/covers/pt10.jpg"
// import pt11 from "../../images/covers/pt11.jpg"
// import pt12 from "../../images/covers/pt12.jpg"
// import pt13 from "../../images/covers/pt13.jpg"
// import pt14 from "../../images/covers/pt14.jpg"
// import pt15 from "../../images/covers/pt15.jpg"
// import pt16 from "../../images/covers/pt16.jpg"
// import pt17 from "../../images/covers/pt17.jpg"
// import pt18 from "../../images/covers/pt18.jpg"
// import pt19 from "../../images/covers/pt19.jpg"
import pt20 from "../../images/covers/pt20.jpg"
import pt21 from "../../images/covers/pt21.jpg"
import pt22 from "../../images/covers/pt22.jpg"
import pt23 from "../../images/covers/pt23.jpg"
import OIP from "../../images/covers/OIP.jpg"

import Image from "next/image";
import { Button, Playlists, PlaylistsH1, PlaylistsH2, SearchIcon } from "../../styles/styles";
import "./styles.css"

export default function Library() {
  const [mostrarElemento, setMostrarElemento] = useState(true);
  const [showLeftClick, setShowLeftClick] = useState(false);
  
  const divRef = useRef<HTMLDivElement | null>(null); 
  const isResizing = useRef(false);
  const lastX = useRef(0);

  const items5 = [[LikedSongs, "Músicas Curtidas", ""], [pt2, "amor de verão", ""], [pt3, "Projeto Verão", ""], [pt4, "VERÃO 2025", ""], [pt5, "CAOS", "Alee"], [pt6, "UTOPIA", "Travis Scott"], [pt7, "MUSIC", "Playboy Carti"], [pt8, "Afrobeat"], [OIP, "Beauty Behind The Madness", "The Weeknd"], [pt20, "RENT'S DUE", "Nemzzz"], [pt21, "MAIOR QUE O TEMPO", "Teto"], [pt22, "Melhor Só", "Kayblack"], [pt23, "M4", "Teto, Matuê"]];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const larguraAtual = Math.round(entry.contentRect.width); // Garante um número inteiro
          setMostrarElemento(larguraAtual <= 360); // Mostra só se for <= 420px
        }
      });
  
      if (divRef.current) {
        observer.observe(divRef.current);
      }
  
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing.current && divRef.current) {
        const deltaX = e.clientX - lastX.current;
        const newWidth = divRef.current.offsetWidth + deltaX;

        // Impede que a largura fique menor que 200px ou maior que 80% da tela
        const minWidth = 200; // Largura mínima
        const maxWidth = window.innerWidth * 0.8; // Largura máxima (80% da tela)
        
        if (newWidth > minWidth && newWidth < maxWidth) {
          divRef.current.style.width = `${newWidth}px`;
          lastX.current = e.clientX;
        }
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      isResizing.current = true;
      lastX.current = e.clientX;
    };

    // Adiciona os ouvintes de eventos
    if (divRef.current) {
      const resizeHandle = divRef.current.querySelector(".resize-handle") as HTMLElement;
      resizeHandle?.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (divRef.current) {
        const resizeHandle = divRef.current.querySelector(".resize-handle") as HTMLElement;
        resizeHandle?.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const goLeft = () => {
    const navGroup = document.querySelector("#nav-group") as HTMLElement;
    
    if (navGroup) {
      navGroup.scrollBy({
        left: -200, // Ajuste esse valor para aumentar/diminuir o movimento
        behavior: "smooth",
      });
    }
  };

  const goRight = () => {
    const navGroup = document.querySelector("#nav-group") as HTMLElement;
    
    if (navGroup) {
      navGroup.scrollBy({
        left: 200, // Ajuste esse valor para aumentar/diminuir o movimento
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={divRef}
      className="relative flex flex-col p-[1.5%] border-l-8 border-l-black bg-[#141414] rounded-md"
    >
        <div className="resize-handle absolute right-0 top-0 h-full w-[1px] cursor-ew-resize bg-black hover:bg-gray-400" />

            <div className="overflow-hidden relative">
              <div className="flex justify-between mb-6 items-center">
                <div className="flex cursor-pointer ml-1 hover:filter hover:brightness-200 ease-in-out transform transition-all duration-500">
                    <Image
                      className="w-[20px] h-[20px] invert mr-2"
                      alt="Library-Icon"
                      src={LibraryImg}
                    />
                    <h1 className="font-bold text-gray-400 text-[0.95rem]">Sua Biblioteca</h1>
                </div>

                <div className="flex">
                  <div className="w-[35px] h-[35px] bg-[#1f1f1f] rounded-full flex items-center justify-center relative mr-3 shadow-2xl transition-all ease-in-out duration-300">
                    <Image
                      className="w-[20px] h-[20px] invert cursor-pointer filter contrast-50 hover:contrast-100"
                      src={Add}
                      alt="Library-Icon"
                    />
                  </div>
                  <div className="w-[35px] h-[35px] bg-transparent hover:bg-[#1f1f1f] rounded-full flex items-center justify-center relative shadow-2xl transition-all ease-in-out duration-300">
                    <Image
                      className="w-[17px] h-[17px] invert cursor-pointer filter contrast-[0.2] hover:contrast-75"
                      src={RightArrow2}
                      alt="Library-Icon"
                    />
                  </div>
                </div>
              </div>

              <div className="flex relative" id="nav-buttons">
                <div id="nav-group" className="flex gap-2 overflow-x-auto scrollbar-hide">
                    { showLeftClick && (<div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-l from-transparent via-[#31313100] to-[#131313]"></div>)}
                    <Button>Playlists</Button>
                    <Button>Artistas</Button>
                    <Button>Álbuns</Button>
                    <Button>Podcasts e Programas</Button>
                    { mostrarElemento && ( <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-[#31313100] to-[#131313]"></div>)}
                </div>

                {showLeftClick && (
                  <div onClick={() => { goLeft(); setShowLeftClick(false); setMostrarElemento(true)}} className="flex justify-center items-center mt-[-2px] min-w-[33px] h-[33px] bg-[#1f1f1f] left-0 absolute rounded-full shadow-2xl">
                    <Image
                      className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75 rotate-180"
                      src={RightArrow}
                      alt="Library-Icon"
                    />
                  </div>
                )}

                { mostrarElemento && (
                  <div onClick={() => { goRight(); setShowLeftClick(true); setMostrarElemento(false)}} className="flex justify-center items-center mt-[-2px] min-w-[33px] h-[33px] bg-[#1f1f1f] right-0 absolute rounded-full shadow-2xl">
                    <Image
                      className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75"
                      src={RightArrow}
                      alt="Library-Icon"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <SearchIcon>
                <Image
                  className="w-[20px] h-[20px] m-auto invert cursor-pointer filter brightness-50"
                  src={Search}
                  alt="Search-Icon"
                />
              </SearchIcon>

              <div className="flex gap-3 items-center cursor-pointer hover:scale-105 hover:filter hover:brightness-200 hover:transition">
                <p className="text-[13px] text-[#b4b4b4]">Recentes</p>
                <Image
                  className="w-[20px] h-[20px] invert"
                  src={Lines}
                  alt="Library-Icon"
                />
              </div>
            </div>

          <div className="library-scroll mt-4 items-center hover:overflow-y-auto max-h-[65vh]"> 
            { items5.map((item, index) => (
              <Playlists key={index}>
                <div id="img-background" className="relative flex w-[50px] h-[50px] mr-3">
                    <Image 
                        alt="#"
                        id="icon-img" 
                        src={item[0]} 
                        className="relative w-full h-full bg-red-500 rounded-md flex justify-center items-center">
                    </Image>

                    <Image
                        className="w-4 h-4 -z-10"
                        alt="icon"
                        id="icon-hover"
                        src={RightArrowHover}/>
                </div>

                <div className="my-auto">
                    <PlaylistsH1>{`${item[1]}`}</PlaylistsH1>
                    <PlaylistsH2>{`${item[2]}`}</PlaylistsH2>
                </div>
            </Playlists>
            ))}
        </div>
      </div>
    );
}