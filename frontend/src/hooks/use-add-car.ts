import { useMutation } from "react-query";
import { Car } from "../model/Car";
import { queryClient } from "../services/query-client";
import { useApi } from "../services/use-api";
import { useNotify } from "./use-notify";

export const useAddCar = () => {
    const { post } = useApi();
    const {notify} = useNotify();

    const create = async (car: Car) => {
        const { data } = await post('/cars', car);
        return data;
      };

    const { mutate } = useMutation(create, {
        onSuccess: () => {
            notify.success('Car created successfully');
            queryClient.invalidateQueries();
        },
        onError: () => {
            notify.error('Error creating car');
        }
    });

    const addCar = (car: Car) => {
        mutate(car);
    }

    return { addCar };
}