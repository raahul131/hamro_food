import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-extrabold">Oops!! </h1>
        <p className="text-lg font-bold"> Something went wrong...</p>
        <h1 className="text-xl">{err.status + " : " + err.statusText}</h1>
      </div>
    </>
  );
};

export default ErrorPage;
