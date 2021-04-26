import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import ICar from "../infra/database/interfaces/ICar";
import ICarsRepository from "../repositories/ICarsRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeleteCarService {
    constructor(
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ) {};

    public async execute({id}: IRequest): Promise<ICar> {
        const cars = await this.carsRepository.delete(id);
        
        if(!cars) {
            throw new AppError('Unable to delete car');
        }

        return cars;
    }

}

export default DeleteCarService;