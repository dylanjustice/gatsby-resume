import * as React from "react";
import { Icons } from "../constants/icons";
import { SvgIcon, SvgIcons } from "../constants/svg-icons";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface IconProps {
    cssClassName?: string;
    type: keyof typeof Icons;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
    const cssClassNames = [];

    cssClassNames.push("c-icon");
    if (props.cssClassName) {
        cssClassNames.push(props.cssClassName);
    }

    const icon: SvgIcon = SvgIcons.find(
        (x: SvgIcon) => x.key === props.type
    ) as SvgIcon;

    if (icon == null || icon.src == null) {
        return <i />;
    }

    return React.createElement(icon.src, {
        className: cssClassNames.join(" "),
        focusable: "false",
    });
};

// #endregion Component
export default Icon;
