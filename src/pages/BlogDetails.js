import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer">
          <div className="p-4 space-y-3">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              {blog.title}
            </h5>
            <p className="text-sm">Written by {blog.author}</p>
            <p className="text-slate-600 leading-normal font-light">
              {blog.body}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
