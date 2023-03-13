import { Icons } from "components/atoms/constants/icons";

export interface ExternalLink {
    name: string;
    url: string;
    icon: keyof Icons;
}
