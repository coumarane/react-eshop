// lib/toastify/index.ts
import { toast, cssTransition, Slide } from "react-toastify";

const Zoom = cssTransition({
  enter: "zoomIn",
  exit: "zoomOut",
  // default to 750ms, can be omitted
  duration: [500, 800],
});

const options = {
  autoClose: 1000,
  type: toast.TYPE.INFO,
  hideProgressBar: false,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
  progress: 0.2,
  transition: Zoom,
};

const genericErrorMessage =
  "An error occured. Contact the support if the problem persists.";

export const ToastifyApiError = (error: any) => {
  let message: string;

  if (error) {
    if (error.response === undefined) {
      message = genericErrorMessage;
    } else if (error.response) {
      message = `An error occured. ${error.response.statusText}.`;
    } else {
      message = error;
    }
  } else {
    message = `Unknown error.`;
  }

  ToastifyGenericError(message);
};

export const ToastifyErrorNetwork = (message?: string) => {
  toast.error(`Error: Network Error ${message ? " : " + message : ""}`, {
    transition: Slide,
    autoClose: 3000,
  });
};

export const ToastifyGenericError = (message: string) => {
  toast.error(message, {
    transition: Slide,
    autoClose: 2000,
  });
};

export const ToastifyOnSuccess = (message: string) => {
  toast.success(message);
};

export const ToastifyInfo = (message: string) => {
  toast.info(message, {
    transition: Slide,
    autoClose: 2000,
  });
};

export const Toastify = (message: string) => {
  toast(message, options);
};
