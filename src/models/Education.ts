export class Education {
  // Attribute
  educationalInstitution: string;
  courseName: string;
  admissionYear: number;
  conclusionYear: number;
  image: string;

  constructor(_name: string, _course: string, _admission: number, _conclusion: number, _img: string) {
    this.educationalInstitution = _name;
    this.courseName = _course;
    this.admissionYear = _admission;
    this.conclusionYear = _conclusion;
    this.image = _img;
  }
}
