import { useState, useEffect } from "react";
import Bloglist from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8000/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {blogs && <Bloglist blogs={blogs} title="All blogs" />}
      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      /> */}
    </div>
  );
};

export default Home;
