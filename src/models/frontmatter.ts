import { Education } from "./education";
import { WorkExperience } from "./work-experience";

export default interface Frontmatter {
  address: string;
  education: Education[];
  email: string;
  jobTitle: string;
  name: string;
  phone: string;
  skills: string[];
  title: string;
  workExperience: WorkExperience[];
  objectives: string[];
}
