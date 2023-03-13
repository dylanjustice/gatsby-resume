import { ExternalLink } from "./external-link";

export interface Contact {
    address: string;
    email: string;
    jobTitle: string;
    name: string;
    phone: string;
    links: Array<ExternalLink>;
}
