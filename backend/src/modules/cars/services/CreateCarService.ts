import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import ICar from "../infra/database/interfaces/ICar";
import ICarsRepository from "../repositories/ICarsRepository";

interface IRequest {
    maker: string;
    modelName: string;
    year: string;
    color: string;
    monthly: number; 
    available: Date;
}

@injectable()
class CreateCarService {
    constructor(
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ) {};

    public async execute({ maker, modelName, year, color, monthly, available }: IRequest): Promise<ICar> {
        const cars = await this.carsRepository.create({ maker, modelName, year, color, monthly, available });

        return cars;
    }

}

export default CreateCarService;