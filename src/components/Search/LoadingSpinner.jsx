import { ClipLoader } from "react-spinners";

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
      <ClipLoader color="#004d71" size={50} />
    </div>
  );
};
