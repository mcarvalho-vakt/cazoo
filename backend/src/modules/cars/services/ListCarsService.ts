import { inject, injectable } from "tsyringe";
import ICarsRepository from "../repositories/ICarsRepository";
import {skipIndex, limitIndex} from '../utils/indexValidators';

interface IRequest {
    page?: string;
    limit?: string;
    sort?: Record<string, 'asc' | 'desc'>;
    maker?: string;
    color?: string;
}

@injectable()
class ListCarsService {
    constructor(
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ) {};

    public async execute({page, limit, sort, maker, color}: IRequest) {
        const skip = skipIndex(page, limit);
        const indexLimit = limitIndex(limit);
        
        const cars = await this.carsRepository.find({
            limit: indexLimit,
            skip,
            sort,
            maker,
            color
        });

        return cars;
    }

}

export default ListCarsService;