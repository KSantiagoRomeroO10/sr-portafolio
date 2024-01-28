import DataCV from "@/Languages/DataCV";
import ProfileSection from "@/Languages/Interfaces/About/ProfileSection";

const Sections: ProfileSection[] = [
  {
    Id: DataCV.AcademicHistory.Id,
    Title: DataCV.AcademicHistory.Title,
    Text: DataCV.AcademicHistory.Text,
  },
  {
    Id: DataCV.ProfessionalProfile.Id,
    Title: DataCV.ProfessionalProfile.Title,
    Text: DataCV.ProfessionalProfile.Text,
  },
  {
    Id: DataCV.SkillsAndAbilities.Id,
    Title: DataCV.SkillsAndAbilities.Title,
    Text: DataCV.SkillsAndAbilities.Text,
  },
];

export default Sections;
