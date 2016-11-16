export class Work {
  // Attributes
  place: string;
  role: string;
  start: Date;
  end: Date;
  current: boolean;
  img: string;

  constructor(_place: string, _role: string, _start: string, _end: string, _current: boolean, _img: string) {
    this.place = _place;
    this.role = _role;
    this.start = new Date(_start);
    this.end = new Date(_end);
    this.current = _current;
    this.img = _img;
  }
}
