import { FunctionComponent, SVGProps } from "react";
import { Icons } from "./icons";
import Earth from "../../../assets/icons/earth.inline.svg";
import Envelope from "../../../assets/icons/envelop.inline.svg";
import Github from "../../../assets/icons/github.inline.svg";
import LinkedIn from "../../../assets/icons/linkedin.inline.svg";
import Location from "../../../assets/icons/location.inline.svg";
import Phone from "../../../assets/icons/phone.inline.svg";
import Profile from "../../../assets/icons/profile.inline.svg";

export interface SvgIcon {
    key: keyof typeof Icons;
    src: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const SvgIcons: SvgIcon[] = [
    { key: Icons.Earth, src: Earth },
    { key: Icons.Envelope, src: Envelope },
    { key: Icons.Github, src: Github },
    { key: Icons.LinkedIn, src: LinkedIn },
    { key: Icons.Location, src: Location },
    { key: Icons.Phone, src: Phone },
    { key: Icons.Profile, src: Profile },
];
