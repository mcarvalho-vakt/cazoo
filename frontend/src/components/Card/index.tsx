import {MouseEvent, useMemo} from 'react';
import { Car } from '../../model/Car';
import {
    Container, 
    Header, 
    Content, 
    Actions, 
    ButtonEdit, 
    HeaderActions,
    ButtonDelete,
    ButtonCancel,
    ButtonSave,
    Form,
    Field
} from './styles';
import { formatISO, format } from 'date-fns';
import { MdEdit, MdDelete, MdSave, MdCancel } from 'react-icons/md';
import { useDeleteCar } from '../../hooks/use-delete-car';
import { useUpdateCar } from '../../hooks/use-update-car';
import { useState } from 'react';
import { Inputs } from '../../model/Form';
import { useForm } from "react-hook-form";
import Select from '../Select'

interface ICardProps {
    car: Car;
}

const Card = ({car: {_id, maker, modelName, year, color, monthly, available}}: ICardProps) => {
    const { deleteCar } = useDeleteCar();
    const { updateCar } = useUpdateCar();
    const [isEditing, setIsEditing] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
    
    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleDelete = () => {
        _id && deleteCar(_id);
    }

    const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsEditing(false);
    }

    const onSubmit = (car: Inputs) => {
        const parsedDate = formatISO(car.available);
        updateCar({...car, _id, available: parsedDate});
        setIsEditing(false);
        reset();
    };

    const {availableDate, formatedDate} = useMemo(() => {
        const availableDate = available.substring(0, 10);
        const formatedDate = format(new Date(available), 'dd-MM-yyyy');
        return {availableDate, formatedDate}
    },[available]);
    
    return (
        <Container>
            <Header>
                <HeaderActions>
                    <ButtonEdit onClick={handleEdit}>
                        Edit
                        <MdEdit />
                    </ButtonEdit>
                    <ButtonDelete onClick={handleDelete}>
                        Delete
                        <MdDelete />
                    </ButtonDelete>
                </HeaderActions>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Content>
                    <Field>
                        <label>Maker:</label>
                        { isEditing ?
                        (<select {...register("maker", { required: true })} defaultValue={maker}>
                                <option value="">Choose maker</option>
                                <option value="BMW">BMW</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Renault">Renault</option>
                        </select>
                        ) : //{errors.maker && <span>This field is required</span>}
                        <div>{maker}</div>
                        }
                    </Field>
                    <Field>
                        <label>Model:</label>
                        { isEditing ?
                        (<select {...register("modelName", { required: true })} defaultValue={modelName}>
                                <option value="">Choose model</option>
                                <option value="Series3">Series3</option>
                                <option value="X1">X1</option>
                                <option value="Yaris">Yaris</option>
                                <option value="RAV4">RAV4</option>
                                <option value="Clio">Clio</option>
                                <option value="Megane">Megane</option>
                        </select>) : // {errors.modelName && <span>This field is required</span>}
                        <div>{modelName}</div>
                        }
                        
                    </Field>
                    <Field>
                        <label>Year:</label>
                        { isEditing ?
                        (<select {...register("year", { required: true })} defaultValue={year}>
                                <option value="">Choose year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                        </select>) : // {errors.year && <span>This field is required</span>}
                        <div>{year}</div>
                        } 
                    </Field>
                    <Field>
                        <label>Color:</label>
                        { isEditing ?
                        (<select {...register("color", { required: true })} defaultValue={color}>
                                <option value="">Choose color</option>
                                <option value="Black">Black</option>
                                <option value="White">White</option>
                                <option value="Red">Red</option>
                                <option value="Blue">Blue</option>
                                <option value="Grey">Grey</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Green">Green</option>
                        </select>) : // {errors.color && <span>This field is required</span>}
                        <div>{color}</div>
                        }  
                    </Field>
                    <Field>
                        <label>Price/Monthly:</label>
                        { isEditing ? 
                        (<input type="text" {...register("monthly", { required: true, valueAsNumber: true })} defaultValue={monthly} />) : 
                        // {errors.monthly && <span>This field is required</span>}}
                        <div>{monthly}</div>
                        }
                    </Field>
                    <Field>
                        <label>Available From:</label>
                        { isEditing ? 
                        <input 
                            type="date" 
                            {...register("available", { required: true, valueAsDate: true })} 
                            value={availableDate}
                            /> : 
                        // {errors.available && <span>This field is required</span>}
                        <div>{formatedDate}</div>
                        }
                    </Field>
                </Content>
                <Actions hidden={isEditing}>
                    <ButtonCancel onClick={handleCancel}>
                        Cancel
                        <MdCancel />
                    </ButtonCancel>
                    <ButtonSave>
                        Save 
                        <MdSave />
                    </ButtonSave>
                </Actions>
            </Form>
        </Container>
    )
};

export default Card;
