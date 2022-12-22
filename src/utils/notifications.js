import { toast } from "react-toastify";

export const showNotification = ({ id, message, type }) => {
  toast(message, {
    toastId: id,
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    pauseOnHover: true,
    type,
    closeButton: true,
  });
};
