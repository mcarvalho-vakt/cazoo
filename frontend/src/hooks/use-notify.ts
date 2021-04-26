import { toast } from "react-toastify";

export const useNotify = () => {
    const notify = {
      success: (message: string) => toast.success(message),
      error: (message: string) => toast.error(message),
      warning: (message: string) => toast.warning(message),
    };
  
    return { notify };
  };