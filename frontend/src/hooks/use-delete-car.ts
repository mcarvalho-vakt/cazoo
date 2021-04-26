import { useMutation } from "react-query";
import { queryClient } from "../services/query-client";
import { useApi } from "../services/use-api";
import { useNotify } from "./use-notify";

export const useDeleteCar = () => {
    const { delete: apiDelete } = useApi();
    const {notify} = useNotify();

    const deleteApi = async (id: string) => {
        const { data } = await apiDelete(`/cars/${id}`);
        return data?.id;
      };

    const { mutate } = useMutation(deleteApi, {
        onSuccess: () => {
            notify.success('Car deleted successfully');
            queryClient.invalidateQueries();
        },
        onError: () => {
            notify.error('Error deleting car');
        }
    });

    const deleteCar = (id: string) => {
        mutate(id);
    }

    return { deleteCar };
}