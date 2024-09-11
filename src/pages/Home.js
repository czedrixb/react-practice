import Bloglist from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
    triggerFetch,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = async (id) => {
    try {
      await fetch("http://localhost:8000/blogs/" + id, {
        method: "DELETE",
      });
      triggerFetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-xl font-bold">All Blogs</div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div>
        {blogs && <Bloglist blogs={blogs} handleDelete={handleDelete} />}
        {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      /> */}
      </div>
    </div>
  );
};

export default Home;
