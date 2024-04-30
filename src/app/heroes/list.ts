import { Hero, Role } from "./heroes";

export const heroList: Hero[] = [
    { 
        name: "Fiora", 
        roles: [Role.Fighter, Role.Assassin], 
        imgSrc: "assets/heroes/fiora_skin01.jpg"
    },
    { 
        name: "Aatrox", 
        roles: [Role.Fighter], 
        imgSrc: "assets/heroes/Aatrox_Skin01_icon.jpg"
    },
    { 
        name: "Gwen", 
        roles: [Role.Fighter], 
        imgSrc: "assets/heroes/Gwen_Skin01.jpg"
    },
    { 
        name: "Kalista", 
        roles: [Role.Marksman], 
        imgSrc: "assets/heroes/Kalista_Skin01_Icon.jpg"
    },
    { 
        name: "Twitch", 
        roles: [Role.Marksman], 
        imgSrc: "assets/heroes/Twitch_Skin01_Icon.jpg"
    },
    { 
        name: "Vex", 
        roles: [Role.Mage], 
        imgSrc: "assets/heroes/Vex_Skin01.jpg"
    },
    { 
        name: "Braum", 
        roles: [Role.Suporte, Role.Tank], 
        imgSrc: "assets/heroes/braum_skin01.jpg"
    },
];