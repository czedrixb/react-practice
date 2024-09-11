import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-md">
        <div className="font-bold text-xl mb-5">Sorry page not found.</div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="py-2 px-3 text-white bg-red-600 hover:bg-red-900 rounded"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
