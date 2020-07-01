import { Education } from "./education";
import { WorkExperience } from "./work-experience";

export interface Frontmatter {
  address: string;
  education: Array<Education>;
  email: string;
  jobTitle: string;
  name: string;
  phone: string;
  skills: string[];
  title: string;
  workExperience: Array<WorkExperience>;
  objectives: string[];
}
