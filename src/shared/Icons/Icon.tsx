import * as React from "react";
import {BlockIcon} from "./BlockIcon";
import {MenuIcon} from "./MenuIcon";
import {WarningIcon} from "./WarningIcon";
import {CommentIcon} from "./CommentIcon";
import {ShareIcon} from "./ShareIcon";
import {SaveIcon} from "./SaveIcon";
import {AnonIcon} from "./AnonIcon";

type tIcons = "Block" | "Menu" | "Warning" | "Comment" | "Share" | "Save" | "Anon";
export type tSizes = 8 | 16 | 32 | 50 | 64;

export interface IIconData {
    Size?: tSizes;
    isActive: boolean
}

interface IIcon {
    IconName: tIcons;
    Size?: tSizes;
    isActive?: boolean
}

export function Icon(iconData: IIcon) {
    let size = iconData.Size == null ? 8 : iconData.Size;
    let isActive = iconData.isActive || false;


    switch (iconData.IconName) {
        case "Block":
            return (
                <BlockIcon Size={size} isActive={isActive}/>
            );
        case "Menu":
            return (
                <MenuIcon Size={size} isActive={isActive}/>
            );
        case "Warning":
            return (
                <WarningIcon Size={size} isActive={isActive}/>
            );
        case "Comment":
            return (
                <CommentIcon Size={size} isActive={isActive}/>
            );
        case "Share":
            return (
              <ShareIcon Size={size} isActive={isActive}/>
            );
        case "Save":
            return (
              <SaveIcon Size={size} isActive={isActive}/>
            );
        case "Anon":
            return (
              <AnonIcon Size={size} isActive={isActive}/>
            );
    }
}