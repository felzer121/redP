import { ErrorMessage } from "formik";

function ErrorMsg(props) {
  return (
    <ErrorMessage
      {...props}
      render={(msg) => (
        <div className="text-red-500 text-xs italic text-red-500 text-sm italic mt-1">
          {msg}
        </div>
      )}
    />
  );
}

export default ErrorMsg;
