import FakeCarsRepository from '../repositories/fakes/FakeCarsRepository';
import CreateCarService from './CreateCarService';

let fakeCarsRepository: FakeCarsRepository;
let createCarService: CreateCarService;

describe('CreateCarService', () => {
    beforeEach(() => {
        fakeCarsRepository = new FakeCarsRepository();
        createCarService = new CreateCarService(fakeCarsRepository);
    })
    it('should be able to create a new car', async () => {
        const car = await createCarService.execute({
            maker: 'BMW',
            modelName: 'X3',
            year: '2019',
            color: 'Red',
            monthly: 20,
            available: new Date()

        });

        expect(car).toHaveProperty('_id');
        expect(car.maker).toBe('BMW');
        expect(car.year).toBe('2019');
    });
})