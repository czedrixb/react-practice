import { useState, useEffect } from "react";
import Bloglist from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

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
