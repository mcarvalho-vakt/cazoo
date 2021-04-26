import { useMutation } from "react-query";
import { Car } from "../model/Car";
import { queryClient } from "../services/query-client";
import { useApi } from "../services/use-api";
import { useNotify } from "./use-notify";

export const useUpdateCar = () => {
    const { put } = useApi();
    const {notify} = useNotify();

    const update = async (car: Car) => {
        const { data } = await put(`/cars/${car._id}`, car);
        return data;
      };

    const { mutate } = useMutation(update, {
        onSuccess: () => {
            notify.success('Car updated successfully');
            queryClient.invalidateQueries();
        },
        onError: () => {
            notify.error('Error updating car');
        }
    });

    const updateCar = (car: Car) => {
        mutate(car);
    }

    return { updateCar };
}