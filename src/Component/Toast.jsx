import { ToastContainer, toast } from 'react-toastify';
const Toast = () => {
    toast.success("This is already added", {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light", // Options: "light", "dark", "colored"
    });
  };
   export default Toast;