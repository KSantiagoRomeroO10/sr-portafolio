import AcademicHistoryItem from "./AcademicHistoryItem";

export default interface ProfileSection{
  Id: number;
  Title: string;
  Text: string | AcademicHistoryItem[];
}
