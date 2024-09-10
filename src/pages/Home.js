import { useState, useEffect } from "react";
import Bloglist from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8000/blogs");
        if (!response.ok) {
          throw new Error("could not fetch the data");
        }
        const data = await response.json();
        setBlogs(data);
        setisPending(false);
        setError(null);
      } catch (error) {
        setisPending(false);
        setError(error.message);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="flex flex-col space-y-4">
        {blogs && <Bloglist blogs={blogs} title="All blogs" />}
        {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      /> */}
      </div>
    </div>
  );
};

export default Home;
