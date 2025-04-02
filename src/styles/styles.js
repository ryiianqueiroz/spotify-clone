import styled from 'styled-components';

export const Arrow = styled.div`
  display: flex;
  width: 100px !important;
  background-color: white;
  border-radius: 150px;
  margin: 0 auto auto 0;
  height: 50px;
  position: relative;
  right: 200px;
`;

export const Button = styled.button`
  font-size: 0.8em;
  text-align: center;
  color: white;
  background-color: #2e2e2e;
  padding: 7px 10px;
  max-height: 30px;
  border-radius: 100px;
  white-space: nowrap;
  box-shadow: 0px 0px 21px 0px rgba(0,0,0,0.35);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover{
    background-color: #363636;
  }
`;

export const Playlists = styled.div`
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    outline: 8px solid #222222;
    background-color: #222222;
    border-radius: 0.5px;

    #img-background #icon-img{
        filter: brightness(0.5);
    }
  }

  #img-background #icon-hover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    filter: brightness(1.8) contrast(2) opacity(2);
    mix-blend-mode: screen;
    opacity: 0; /* Inicialmente invisível */
  }

  &:hover > #img-background #icon-hover {
    opacity: 1; /* Aparece no hover */
  }

`;

export const PlaylistsH1 = styled.h1`
  color: white;
  font-size: 0.95rem;
`;

export const PlaylistsH2 = styled.h2`
  color: #aaaaaa;
  font-size: 0.75rem;
`;

export const SearchIcon = styled.div`
  flex: 0 5px 30px; /* Impede que o card encolha */
  height: 25px;
  padding: 2px;
  margin-left: 5px;

  &:hover {
    outline: 4px solid #222222 !important;
    background-color: #222222;
    border-radius: 1000px;
  }

  &:hover > img{
    filter: brightness(2) contrast(2);
  }
`;

// Library

export const ButtonExploreNav = styled.button`
  font-size: 0.8em;
  text-align: center;
  color: white;
  background-color: rgba(255, 255, 255, 0.08);
  margin-right: 7px;
  padding: 7px 12px;
  max-height: 30px;
  border-radius: 100px;
  white-space: nowrap;
  box-shadow: 0px 0px 21px 0px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: 0.1s ease-in;

  &:hover{
    transition: 0.1s ease-out;
    background-color: rgba(255, 255, 255, 0.144);
  }
`;

export const RectangleDiv = styled.div`
  display: flex;
  text-align: left;
  overflow: hidden;
  align-items: center;

  @media screen and (max-width:900px) {
    min-width: 150px;
  }
`;

export const RotationPlaylistSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 100px;
  margin-bottom: -50px;
  margin-left: -15px;

  @media screen and (max-width: 750px) {
    min-width: 300px;
  }
`;

export const RotationPlaylistH1 = styled.h1`
  font-size: 1.3rem;
  color: white;
  font-weight: 700;
  
  &:hover{
    text-decoration: underline;
  }
`;

export const RotationPlaylistA = styled.a`
  font-size: 0.8rem;
  color: gainsboro;
  font-weight: 700;
  letter-spacing: 0.5px;

  &:hover{
    text-decoration: underline;
  }
`;

export const Cards = styled.div`
  display: flex;
  overflow: hidden; /* Esconde os cards que ultrapassam */
  flex-wrap: nowrap;
  padding: 1% 0% 1% 1%; 
  gap: 25px;
  margin-top: 5px;
  width: 100%; /* Mantém a largura total dentro do container pai */
`;

export const Card = styled.div`
  flex: 0 0 180px; /* Impede que o card encolha */
  position: relative;

  &:hover {
    outline: 14px solid #222222 !important;
    background-color: #222222;
    border-radius: 0.5px;
  }
`;

export const CardH1 = styled.h1`
  font-size: 0.85rem;
  margin-top: 5px;
  color: white;
  max-width: 150px
`;


export const CardP = styled.p`
  font-size: 0.8rem;
  margin-top: 5px;
  color: #c4c4c4;
  max-width: 150px
`;

// Explore