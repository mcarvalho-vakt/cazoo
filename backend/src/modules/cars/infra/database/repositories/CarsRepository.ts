import mongoose from 'mongoose';
import {addMonths} from 'date-fns';

import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import ICar from "../interfaces/ICar";
import Car from "../models/Car";
import IUpdateCarDTO from '@modules/cars/dtos/IUpdateCarDTO';
import IFindCarDTO from '@modules/cars/dtos/IFindCarDTO';

interface FindCriteria {
    available: Object;
    maker?: string;
    color?: string;
}

class CarsRepository implements ICarsRepository {
    find({
        limit = 0, 
        skip = 0, 
        sort = {'monthly': 'asc'}, 
        maker = undefined, 
        color = undefined
    }: IFindCarDTO): Promise<ICar[]> {
        const inThreeMonths = addMonths(new Date, 3);
        
        let findCriteria: FindCriteria = { 
            available: { $lte: inThreeMonths }
        }

        if(maker) findCriteria = {...findCriteria, maker};
        if(color) findCriteria = {...findCriteria, color};
        
        const cars = Car
            .find(findCriteria)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .exec();

        return cars;
    }

    create(carData: ICreateCarDTO): Promise<ICar> {
        const car = new Car({
            _id: new mongoose.Types.ObjectId(),
            ...carData
        })

        return car.save();
    }

    update({id, car}: IUpdateCarDTO): Promise<ICar | null> {
        const updatedCar = Car.findByIdAndUpdate(id, car, {new: true}).exec();
        
        return updatedCar;
    }

    delete(id: string): Promise<ICar | null> {
        const deletedCar = Car.findByIdAndDelete(id).exec();

        return deletedCar;
    }
}

export default CarsRepository;