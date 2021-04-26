import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import ICreateCarDTO from "../dtos/ICreateCarDTO";
import ICar from "../infra/database/interfaces/ICar";
import ICarsRepository from "../repositories/ICarsRepository";

interface IRequest {
    id: string;
    car: ICreateCarDTO;
}

@injectable()
class UpdateCarService {
    constructor(
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ) {};

    public async execute({id, car: { maker, modelName, year, color, monthly, available }}: IRequest): Promise<ICar> {
        const cars = await this.carsRepository.update({ id, car: { maker, modelName, year, color, monthly, available}});
        
        if(!cars) {
            throw new AppError('Unable to update car');
        }

        return cars;
    }

}

export default UpdateCarService;