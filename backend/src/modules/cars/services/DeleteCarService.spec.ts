import FakeCarsRepository from '../repositories/fakes/FakeCarsRepository';
import DeleteCarService from './DeleteCarService';

let fakeCarsRepository: FakeCarsRepository;
let deleteCarService: DeleteCarService;

describe('DeleteCarService', () => {
    beforeEach(() => {
        fakeCarsRepository = new FakeCarsRepository();
        deleteCarService = new DeleteCarService(fakeCarsRepository);
    })
    it('should be able to delete a new car', async () => {
        const createdCar = await fakeCarsRepository.create({
            maker: 'BMW',
            modelName: 'X3',
            year: '2019',
            color: 'Black',
            monthly: 200,
            available: new Date(),
        });
        
        expect(await fakeCarsRepository.find({})).toHaveLength(1);
        
        await deleteCarService.execute({id: createdCar._id});

        expect(await fakeCarsRepository.find({})).toHaveLength(0);
    });
})