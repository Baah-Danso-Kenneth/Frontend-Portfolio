import { ReactNode } from "react";

export interface CustomizeLinksProps{
    href:string;
    className?:string | null | undefined;
    title:string
}

export interface LayoutProps{
    children:ReactNode
    className?:string
}

export interface AnimatedTextProps{
    className?:string;
    text:string;
}

export interface IconProps{
    className?:string | null | undefined;
    set:[string]
}

export interface SkillProps{
    text:string;
    x?:string | number;
    y?:string | number;

}