import ICreateCarDTO from "./ICreateCarDTO";

export default interface IUpdateCarDTO {
    id: string;
    car: ICreateCarDTO;
}