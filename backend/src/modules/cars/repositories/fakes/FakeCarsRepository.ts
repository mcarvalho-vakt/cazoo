import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import IFindCarDTO from "@modules/cars/dtos/IFindCarDTO";
import IUpdateCarDTO from "@modules/cars/dtos/IUpdateCarDTO";
import ICar from "@modules/cars/infra/database/interfaces/ICar";
import ICarsRepository from "../ICarsRepository";

interface IFakeCar {
    _id: string;
    maker: string;
    modelName: string;
    year: string;
    color: string;
    monthly: number;
    available: Date;
}

class FakeCarsRepository implements ICarsRepository {
    private cars: IFakeCar[] = [];

    find(findParameters: IFindCarDTO): Promise<ICar[]> {
        const listCars = this.cars;
        return new Promise<ICar[]>(function(resolve, reject){
            resolve(listCars as ICar[]);
        });
    }
    
    create(car: ICreateCarDTO): Promise<ICar> {
        const _id = Math.floor(Math.random()).toString();
        this.cars.push({_id, ...car});
        return new Promise<ICar>(function(resolve, reject){
            resolve({_id, ...car} as ICar);
        });
    }

    update({ id, car }: IUpdateCarDTO): Promise<ICar | null> {
        const carIndex = this.cars.findIndex(car => car._id === id);
        this.cars[carIndex] = {_id: id, ...car};

        return new Promise<ICar>(function(resolve, reject){
            resolve({_id: id, ...car} as ICar);
        });
    }

    delete(id: string): Promise<ICar | null> {
        const car = this.cars.find(car => car._id === id);
        const carIndex = this.cars.findIndex(car => car._id === id);
        this.cars.splice(carIndex,1);

        return new Promise<ICar>(function(resolve, reject){
            resolve(car as ICar);
        });

    }
}

export default FakeCarsRepository;