import { useState } from "react";
import Bloglist from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party~", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  return (
    <div className="flex flex-col space-y-4">
      <Bloglist blogs={blogs} title="All blogs" />
      <Bloglist
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      />
    </div>
  );
};

export default Home;
