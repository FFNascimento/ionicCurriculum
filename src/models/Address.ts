export class Address {
  // Attributes
  streetType: string;
  streetName: string;
  streetNumber: number;
  neighbourhood: string;
  state: string;
  postalCode: string;

  constructor(_type: string, _name: string, _number: number, _neighbourhood: string,
    _state: string, _postalCode: string) {
    this.streetType = _type;
    this.streetName = _name;
    this.streetNumber = _number;
    this.neighbourhood = _neighbourhood;
    this.state = _state;
    this.postalCode = _postalCode;
  }
}
