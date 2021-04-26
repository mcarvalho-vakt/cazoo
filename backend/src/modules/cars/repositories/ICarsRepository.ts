import ICreateCarDTO from "../dtos/ICreateCarDTO";
import IFindCarDTO from "../dtos/IFindCarDTO";
import IUpdateCarDTO from "../dtos/IUpdateCarDTO";
import ICar from "../infra/database/interfaces/ICar";

export default interface ICarsRepository {
    find(findParameters: IFindCarDTO): Promise<ICar[]>;
    create(car: ICreateCarDTO): Promise<ICar>;
    update({id, car}: IUpdateCarDTO): Promise<ICar | null>;
    delete(id: string): Promise<ICar | null>;
}