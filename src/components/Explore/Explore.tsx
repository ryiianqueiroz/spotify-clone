"use client"

import { ButtonExploreNav, RectangleDiv, RotationPlaylistSection, RotationPlaylistH1, RotationPlaylistA, Cards, Card, CardH1, CardP } from "../../styles/styles"
//import AlbumCover from "../../images/album-cover.jpeg"
import RightArrow from "../../images/right-arrowhover.png"
import RightArrowButton from "../../images/right-arrow (1).png";
import pt1 from "../../images/covers/pt1.jpg"
import pt2 from "../../images/covers/pt2.jpg"
import pt3 from "../../images/covers/pt3.jpg"
import pt4 from "../../images/covers/pt4.jpg"
import pt5 from "../../images/covers/pt5.jpg"
import pt6 from "../../images/covers/pt6.jpg"
import pt7 from "../../images/covers/pt7.jpg"
import pt8 from "../../images/covers/pt8.jpg"
//import pt9 from "../../images/covers/pt9.jpg"
import pt10 from "../../images/covers/pt10.jpg"
import pt11 from "../../images/covers/pt11.jpg"
import pt12 from "../../images/covers/pt12.jpg"
// import pt13 from "../../images/covers/pt13.jpg"
import pt14 from "../../images/covers/pt14.jpg"
import pt15 from "../../images/covers/pt15.jpg"
import pt16 from "../../images/covers/pt16.jpg"
import pt17 from "../../images/covers/pt17.jpg"
import pt18 from "../../images/covers/pt18.jpg"
import pt19 from "../../images/covers/pt19.jpg"
import pt20 from "../../images/covers/pt20.jpg"
import pt21 from "../../images/covers/pt21.jpg"
import pt22 from "../../images/covers/pt22.jpg"
import pt23 from "../../images/covers/pt23.jpg"
import OIP from "../../images/covers/OIP.jpg"
import LikedSongs from "../../images/liked-songs.jpg";

import Image from 'next/image' 
import "./styles.css"
import { useState, useEffect } from "react"

export default function Explore() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [hoverAlbumIndex, setAlbumHoverIndex] = useState<{ id: number | null; value: number }>({
        id: null,
        value: 0,
    });
    const [numSelect, setNumSelect] = useState(0)

    const [moves, setMoves] = useState(["0", "0", "0", "0"]);

    const items1 = [[pt1, "The Weeknd, PARTYNEXTDOOR"], [pt19, "BTS, j-hope, TOMORROW X TOGETHER"], [pt18, "Travis Scott, JACKBOYS, Don Toliver"], [pt17, "Derek, LH CHUCRO, e mais"], [pt16, "Justin Bieber, Bruno Mars, Rihanna e mais"], [pt15, "Davido, Kizz Daniel, Tayc e mais"], [pt7, "MUSIC", "Playboy Carti"], [pt8, "Afrobeat"]];
    const items2 = [[pt10, "De volta pro repeat"], [pt11, "No Repeat"], [pt12, "daylist"], [pt14, "Descobertas da Semana"]]
    const items3 = [[pt2, "amor de verão"], [pt3, "Projeto Verão"], [pt4, "VERÃO 2025"], [pt5, "CAOS", "Alee"], [pt6, "UTOPIA", "Travis Scott"], [pt7, "MUSIC", "Playboy Carti"], [pt8, "Afrobeat"], [OIP, "Beauty Behind The Madness", "The Weeknd"]];
    const items4 = [[OIP, "Beauty Behind The Madness", "The Weeknd"], [pt20, "RENT'S DUE", "Nemzzz"], [pt21, "MAIOR QUE O TEMPO", "Teto"], [pt22, "Melhor Só", "Kayblack"], [pt23, "M4", "Teto, Matuê"], [pt5, "CAOS", "Alee"], [pt7, "MUSIC", "Playboy Carti"], [pt8, "Afrobeat"]];
    const items5 = [[LikedSongs, "Músicas Curtidas"], [pt2, "amor de verão"], [pt3, "Projeto Verão"], [pt4, "VERÃO 2025"], [pt5, "CAOS", "Alee"], [pt6, "UTOPIA", "Travis Scott"], [pt7, "MUSIC", "Playboy Carti"], [pt8, "Afrobeat"]];

    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          setWidth(window.innerWidth); // define logo de início
          const handleResize = () => setWidth(window.innerWidth);
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const goLeft = (num: number) => {
        const navGroup = document.querySelector(`#card-items${num}`) as HTMLElement;
        
        if (navGroup) {
          navGroup.scrollBy({
            left: -600, // Ajuste esse valor para aumentar/diminuir o movimento
            behavior: "smooth",
          });
        }
      };
    
    const goRight = (num: number) => {
        const navGroup = document.querySelector(`#card-items${num}`) as HTMLElement;
        
        if (navGroup) {
            navGroup.scrollBy({
            left: 600, // Ajuste esse valor para aumentar/diminuir o movimento
            behavior: "smooth",
            });
        }
    };

    const setMove = (num: number, val: string) => {
        setMoves(prevMoves => {
            const newMoves = [...prevMoves]; // Cria uma cópia do array
            newMoves[num] = val; // Atualiza o valor no índice específico
            return newMoves; // Retorna o novo array para atualizar o estado
        });
    };

    return (
        <div className="library-scroll flex px-[2%] py-[1%] flex-col bg-gradient-to-t flex-1 from-[#141414] via-[#141414]/90 via-[80%] to-[#423480] border-l-8 border-l-black rounded-xl overflow-auto max-h-[82.5vh]">
            <div className="flex mb-6">
                <ButtonExploreNav>Tudo</ButtonExploreNav>
                <ButtonExploreNav>Músicas</ButtonExploreNav>
                <ButtonExploreNav>Podcasts</ButtonExploreNav>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-[-30px] max-[1285px]:grid-cols-2 max-[778px]:w-[320px]">
                {items5.map((item, index) => (
                    <RectangleDiv
                        key={index}
                        onMouseEnter={() => {setAlbumHoverIndex({ id: index, value: 0}); setHoverIndex(index)}}
                        onMouseLeave={() => setAlbumHoverIndex({ id: null, value: 0})}
                    >
                        <div className="w-[80px] h-[60px] rounded-tl-sm rounded-sm">
                            <Image src={item[0]} alt="#" className="w-full h-full"/>    
                        </div>

                        <div className="flex items-center justify-between bg-white/10 h-[60px] w-full text-left place-content-center rounded-tr-sm rounded-br-sm duration-300 ease-in-out hover:bg-[#ffffff36] cursor-pointer">
                            <p className="ml-3 text-[0.85rem] font-semibold max-[900px]:text-[0.8rem]">{`${item[1]}`}</p>
                            {hoverIndex === index && (
                                <div className={`flex w-11 h-11 rounded-full bg-green-500 items-center justify-center mr-3 shadow-[0px_7px_5px_0px_rgba(0,0,0,0.25)]`}>
                                    <Image alt="right-arrow" className="w-4 h-4 invert" src={RightArrow}></Image>
                                </div>
                            )}
                        </div>
                    </RectangleDiv>
                ))}
            </div>

            <RotationPlaylistSection>
                <div className="flex justify-between items-center pl-[1.3%]">
                    <RotationPlaylistH1>Feito para você</RotationPlaylistH1>
                    <RotationPlaylistA>Mostrar tudo</RotationPlaylistA>
                </div>
            
                <Cards id={`card-items1`}>
                    {items1.map((item, index) => (
                        <Card 
                            key={index}
                            onMouseEnter={() => setAlbumHoverIndex({ id: index, value: 1})}
                            onMouseLeave={() => setAlbumHoverIndex({ id: null, value: 0})}
                            className="relative"
                        >
                            <Image alt="Album Cover" src={item[0]} width={180} height={180} className="mb-[10px]" />

                            {/* O botão SEMPRE está no DOM, mas começa invisível */}
                            <div className={`absolute cursor-pointer duration-300 right-0 flex w-11 h-11 rounded-full bg-green-500 items-center justify-center mt-[-60px] mr-1 shadow-[0px_7px_5px_0px_rgba(0,0,0,0.25)]
                                transition-opacity ease-in-out ${hoverAlbumIndex.id === index && hoverAlbumIndex.value === 1 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-0'}`}
                            >
                                <Image alt="right-arrow" className="w-4 h-4 invert" src={RightArrow} />
                            </div>

                            {item[2] ? (
                                <>
                                    <CardH1>{`${item[1]}`}</CardH1>
                                    <CardP>{`${item[2]}`}</CardP>
                                </>
                            ) : (<>
                                <CardP>{`${item[1]}`}</CardP>
                            </>)}
                        </Card>
                    ))}

                    { (numSelect === 1 && moves[0] === "1") || moves[0] === "1" ? (
                        <div onClick={() => { goLeft(1); setNumSelect(0); setMove(0, "0")}} className="cursor-pointer flex justify-center items-center mt-[110px] min-w-[33px] h-[33px] bg-[#1f1f1f] absolute rounded-full shadow-2xl hover:brightness-150">
                            <Image
                                className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75 rotate-180"
                                src={RightArrowButton}
                                alt="Library-Icon"
                            />
                        </div>
                    ) : (<></>)}

                    { numSelect !== 1 && moves[0] === "0" && (
                        <div onClick={() => { goRight(1); setNumSelect(1); setMove(0, "1")}} className="cursor-pointer flex justify-center items-center mt-[110px] min-w-[33px] h-[33px] bg-[#1f1f1f] right-0 absolute rounded-full shadow-2xl hover:brightness-150">
                            <Image
                                className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75"
                                src={RightArrowButton}
                                alt="Library-Icon"
                            />
                        </div>
                    )}
                </Cards>
            </RotationPlaylistSection>

            <RotationPlaylistSection>
                <div className="flex justify-between items-center pl-[1.3%]">
                    <RotationPlaylistH1>100% Você</RotationPlaylistH1>
                    <RotationPlaylistA>Mostrar tudo</RotationPlaylistA>
                </div>
            
                <Cards id={`card-items2`}>
                    {items2.map((item, index) => (
                        <Card 
                            key={index}
                            onMouseEnter={() => setAlbumHoverIndex({ id: index, value: 2})}
                            onMouseLeave={() => setAlbumHoverIndex({ id: null, value: 0})}
                            className="relative"
                        >
                            <Image alt="Album Cover" src={item[0]} width={180} height={180} className="mb-[10px]" />

                            {/* O botão SEMPRE está no DOM, mas começa invisível */}
                            <div className={`absolute cursor-pointer duration-300 right-0 flex w-11 h-11 rounded-full bg-green-500 items-center justify-center mt-[-60px] mr-1 shadow-[0px_7px_5px_0px_rgba(0,0,0,0.25)]
                                transition-opacity ease-in-out ${hoverAlbumIndex.id === index && hoverAlbumIndex.value === 2 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-0'}`}
                            >
                                <Image alt="right-arrow" className="w-4 h-4 invert" src={RightArrow} />
                            </div>

                            {item[2] ? (
                                <>
                                    <CardH1>{`${item[1]}`}</CardH1>
                                    <CardP>{`${item[2]}`}</CardP>
                                </>
                            ) : (<>
                                <CardP>{`${item[1]}`}</CardP>
                            </>)}
                        </Card>
                    ))}

                    { width < 1270 && (numSelect === 2 && moves[1] === "1") || width < 1270 && moves[1] === "1" ? (
                        <div onClick={() => { goLeft(2); setNumSelect(0); setMove(1, "0")}} className="cursor-pointer flex justify-center items-center mt-[110px] min-w-[33px] h-[33px] bg-[#1f1f1f] absolute rounded-full shadow-2xl hover:brightness-150">
                            <Image
                                className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75 rotate-180"
                                src={RightArrowButton}
                                alt="Library-Icon"
                            />
                        </div>
                    ) : (<></>)}

                    { width < 1270 && numSelect !== 2 && moves[1] === "0" && (
                        <div onClick={() => { goRight(2); setNumSelect(2); setMove(1, "1")}} className="cursor-pointer flex justify-center items-center mt-[110px] min-w-[33px] h-[33px] bg-[#1f1f1f] right-0 absolute rounded-full shadow-2xl hover:brightness-150">
                            <Image
                                className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75"
                                src={RightArrowButton}
                                alt="Library-Icon"
                            />
                        </div>
                    )}
                </Cards>
            </RotationPlaylistSection>

            <RotationPlaylistSection>
                <div className="flex justify-between items-center pl-[1.3%]">
                    <RotationPlaylistH1>Novos lançamentos para você</RotationPlaylistH1>
                    <RotationPlaylistA>Mostrar tudo</RotationPlaylistA>
                </div>
            
                <Cards id={`card-items3`}>
                    {items3.map((item, index) => (
                        <Card 
                            key={index}
                            onMouseEnter={() => setAlbumHoverIndex({ id: index, value: 3})}
                            onMouseLeave={() => setAlbumHoverIndex({ id: null, value: 0})}
                            className="relative"
                        >
                            <Image alt="Album Cover" src={item[0]} width={180} height={180} className="mb-[10px]" />

                            {/* O botão SEMPRE está no DOM, mas começa invisível */}
                            <div className={`absolute cursor-pointer duration-300 right-0 flex w-11 h-11 rounded-full bg-green-500 items-center justify-center mt-[-60px] mr-1 shadow-[0px_7px_5px_0px_rgba(0,0,0,0.25)]
                                transition-opacity ease-in-out ${hoverAlbumIndex.id === index && hoverAlbumIndex.value === 3
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-0'}`}
                            >
                                <Image alt="right-arrow" className="w-4 h-4 invert" src={RightArrow} />
                            </div>

                            {item[2] ? (
                                <>
                                    <CardH1>{`${item[1]}`}</CardH1>
                                    <CardP>{`${item[2]}`}</CardP>
                                </>
                            ) : (<>
                                <CardP>{`${item[1]}`}</CardP>
                            </>)}
                        </Card>
                    ))}

                    { (numSelect === 3 && moves[2] === "1") || moves[2] === "1" ? (
                        <div onClick={() => { goLeft(3); setNumSelect(0); setMove(2, "0")}} className="cursor-pointer flex justify-center items-center mt-[110px] min-w-[33px] h-[33px] bg-[#1f1f1f] absolute rounded-full shadow-2xl hover:brightness-150">
                            <Image
                                className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75 rotate-180"
                                src={RightArrowButton}
                                alt="Library-Icon"
                            />
                        </div>
                    ) : (<></>)}

                    { numSelect !== 3 && moves[2] === "0" && (
                        <div onClick={() => { goRight(3); setNumSelect(3); setMove(2, "1")}} className="cursor-pointer flex justify-center items-center mt-[110px] min-w-[33px] h-[33px] bg-[#1f1f1f] right-0 absolute rounded-full shadow-2xl hover:brightness-150">
                            <Image
                                className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75"
                                src={RightArrowButton}
                                alt="Library-Icon"
                            />
                        </div>
                    )}
                </Cards>
            </RotationPlaylistSection>

            <RotationPlaylistSection>
                <div className="flex justify-between items-center pl-[1.3%]">
                    <RotationPlaylistH1>Recomendado para você</RotationPlaylistH1>
                    <RotationPlaylistA>Mostrar tudo</RotationPlaylistA>
                </div>
            
                <Cards id={`card-items4`}>
                    {items4.map((item, index) => (
                        <Card 
                            key={index}
                            onMouseEnter={() => setAlbumHoverIndex({ id: index, value: 4})}
                            onMouseLeave={() => setAlbumHoverIndex({ id: null, value: 0})}
                            className="relative"
                        >
                            <Image alt="Album Cover" src={item[0]} width={180} height={180} className="mb-[10px]" />

                            {/* O botão SEMPRE está no DOM, mas começa invisível */}
                            <div className={`absolute cursor-pointer duration-300 right-0 flex w-11 h-11 rounded-full bg-green-500 items-center justify-center mt-[-60px] mr-1 shadow-[0px_7px_5px_0px_rgba(0,0,0,0.25)]
                                transition-opacity ease-in-out ${hoverAlbumIndex.id === index && hoverAlbumIndex.value === 4 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-0'}`}
                            >
                                <Image alt="right-arrow" className="w-4 h-4 invert" src={RightArrow} />
                            </div>

                            {item[2] ? (
                                <>
                                    <CardH1>{`${item[1]}`}</CardH1>
                                    <CardP>{`${item[2]}`}</CardP>
                                </>
                            ) : (<>
                                <CardP>{`${item[1]}`}</CardP>
                            </>)}
                        </Card>
                    ))}

                    { (numSelect === 4 && moves[3] === "1") || moves[3] === "1" ? (
                        <div onClick={() => { goLeft(4); setNumSelect(0); setMove(3, "0")}} className="cursor-pointer flex justify-center items-center mt-[110px] min-w-[33px] h-[33px] bg-[#1f1f1f] absolute rounded-full shadow-2xl hover:brightness-150">
                            <Image
                                className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75 rotate-180"
                                src={RightArrowButton}
                                alt="Library-Icon"
                            />
                        </div>
                    ) : (<></>) }

                    { numSelect !== 4 && moves[3] === "0" && (
                        <div onClick={() => { goRight(4); setNumSelect(4); setMove(3, "1")}} className="cursor-pointer flex justify-center items-center mt-[110px] min-w-[33px] h-[33px] bg-[#1f1f1f] right-0 absolute rounded-full shadow-2xl hover:brightness-150">
                            <Image
                                className="w-[15px] h-[15px] invert cursor-pointer absolute filter opacity-75"
                                src={RightArrowButton}
                                alt="Library-Icon"
                            />
                        </div>
                    )}
                </Cards>
            </RotationPlaylistSection>
        </div>
    );
}