export class Education {
  // Attribute
  educationalInstitution: string;
  courseName: string;
  admissionYear: number;
  conclusionYear: number;

  constructor(_name: string, _course: string, _admission: number, _conclusion: number) {
    this.educationalInstitution = _name;
    this.courseName = _course;
    this.admissionYear = _admission;
    this.conclusionYear = _conclusion;
  }
}
