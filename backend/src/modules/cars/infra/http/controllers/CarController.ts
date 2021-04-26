import { container } from 'tsyringe';
import CreateCarService from '@modules/cars/services/CreateCarService';
import DeleteCarService from '@modules/cars/services/DeleteCarService';
import ListCarsService from '@modules/cars/services/ListCarsService';
import UpdateCarService from '@modules/cars/services/UpdateCarService';
import {Request, Response} from 'express';
import { transformSort } from '../utils/requestTransform';


export default class CarController {
    public async list(request: Request, response: Response): Promise<Response> {
        const { page, limit, sort, maker, color } = request.query;
        
        const listCars = container.resolve(ListCarsService);

        const cars = await listCars.execute({
            page: page?.toString(), 
            limit: limit?.toString(),
            sort: transformSort(sort?.toString()),
            maker: maker?.toString(),
            color: color?.toString()
        });

        return response.json(cars);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { maker, modelName, year, color, monthly, available } = request.body;
        
        const createCar = container.resolve(CreateCarService);

        const car = await createCar.execute({ maker, modelName, year, color, monthly, available })

        return response.json(car);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const car = request.body;

        const updateCar = container.resolve(UpdateCarService);

        const updatedCar = await updateCar.execute({id, car});

        return response.json(updatedCar);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;

        const deleteCar = container.resolve(DeleteCarService);

        const deletedCar = await deleteCar.execute({id});

        return response.json(deletedCar);
    }
}