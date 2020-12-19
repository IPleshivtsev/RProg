import * as React from "react";
import {BlockIcon} from "./BlockIcon";
import {MenuIcon} from "./MenuIcon";
import {WarningIcon} from "./WarningIcon";
import {CommentIcon} from "./CommentIcon";
import {ShareIcon} from "./ShareIcon";
import {SaveIcon} from "./SaveIcon";

type tIcons = "Block" | "Menu" | "Warning" | "Comment" | "Share" | "Save";
export type tSizes = 8 | 16 | 32 | 64;

export interface ISize {
    Size?: tSizes;
}

interface IIcon {
    IconName: tIcons;
    Size?: tSizes;
}

export function Icon(iconData: IIcon) {
    let size = iconData.Size == null ? 8 : iconData.Size;

    switch (iconData.IconName) {
        case "Block":
            return (
                <BlockIcon Size={size} />
            );
        case "Menu":
            return (
                <MenuIcon Size={size} />
            );
        case "Warning":
            return (
                <WarningIcon Size={size} />
            );
        case "Comment":
            return (
                <CommentIcon Size={size} />
            );
        case "Share":
            return (
                <ShareIcon Size={size} />
            );
        case "Save":
            return (
              <SaveIcon Size={size} />
            );
    }
}