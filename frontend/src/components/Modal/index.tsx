import { Dispatch, SetStateAction, MouseEvent } from 'react';
import { MdSave, MdCancel } from 'react-icons/md';
import { useForm } from "react-hook-form";
import {
    Container,
    Actions,
    Content,
    Header,
    Form,
    Title,
    ButtonCancel, 
    ButtonSave,
    Field,
    FormFields
} from './styles';
import { useAddCar } from '../../hooks/use-add-car';
import { Inputs } from '../../model/Form';
import { parseISO, formatISO } from 'date-fns';

interface IModalProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({showModal, setShowModal}: IModalProps) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();
    const { addCar } = useAddCar();

    const onSubmit = (car: Inputs) => {
        const parsedDate = formatISO(car.available);
        
        addCar({...car, available: parsedDate});
        setShowModal(false);
        reset();
    };

    const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        reset();
        setShowModal(false);
    }

    return (
        <Container hidden={!showModal}>
            <Content>
                <Header>
                    <Title>Create a new car</Title>
                </Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormFields>
                        <Field>
                            <label>Maker:</label>
                            <select {...register("maker", { required: true })}>
                                    <option value="">Choose maker</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Renault">Renault</option>
                            </select>
                            {errors.maker && <span>This field is required</span>}
                        </Field>
                        <Field>
                        <label>Model:</label>
                            <select {...register("modelName", { required: true })}>
                                    <option value="">Choose model</option>
                                    <option value="Series3">Series3</option>
                                    <option value="X1">X1</option>
                                    <option value="Yaris">Yaris</option>
                                    <option value="RAV4">RAV4</option>
                                    <option value="Clio">Clio</option>
                                    <option value="Megane">Megane</option>
                            </select>
                            {errors.modelName && <span>This field is required</span>}
                        </Field>
                        <Field>
                            <label>Year:</label>
                            <select {...register("year", { required: true })}>
                                    <option value="">Choose year</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                            </select>
                            {errors.year && <span>This field is required</span>}
                        </Field>
                        <Field>
                            <label>Color:</label>
                            <select {...register("color", { required: true })}>
                                    <option value="">Choose color</option>
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Grey">Grey</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Green">Green</option>
                            </select>
                            {errors.color && <span>This field is required</span>}
                        </Field>
                        <Field>
                            <label>Price/Monthly:</label>
                            <input type="text" {...register("monthly", { required: true, valueAsNumber: true })} />
                            {errors.monthly && <span>This field is required</span>}
                        </Field>
                        <Field>
                            <label>Available From:</label>
                            <input type="date" {...register("available", { required: true, valueAsDate: true })} />
                            {errors.available && <span>This field is required</span>}
                        </Field>
                    </FormFields>
                    <Actions>
                        <ButtonCancel onClick={handleCancel}>
                            Cancel<MdCancel />
                        </ButtonCancel>
                        <ButtonSave type="submit">
                            Save<MdSave />
                        </ButtonSave>
                    </Actions>
                </Form>
            </Content>
        </Container>
    )
}

export default Modal;
