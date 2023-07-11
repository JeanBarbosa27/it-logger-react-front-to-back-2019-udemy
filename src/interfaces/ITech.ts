export interface ITechDTO {
  firstName: string;
  lastName: string;
}

export default interface ITech extends ITechDTO {
  id: number;
}
