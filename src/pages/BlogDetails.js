import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="text-xl font-bold">Blog Details - {id}</div>
    </div>
  );
};

export default BlogDetails;
