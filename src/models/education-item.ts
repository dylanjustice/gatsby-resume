interface EducationLink {
    href: string
    imgSrc: string
}
export interface EducationItemDTO {
    title: string;
    description: string;
    link?: EducationLink
}
