import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    const addBlog = async () => {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      const data = await response.json();
      setIsPending(false);
      console.log(data);

      navigate("/");
    };

    await addBlog();
  };

  return (
    <div className="create">
      <div className="text-xl font-bold mb-5">Add New Blog</div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center py-5">
          <div className="flex flex-col gap-y-3 max-w-md w-full">
            <div>
              <label className="block text-sm font-medium text-black mb-2 text-left">
                Blog title:
              </label>
              <input
                type="text"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2 text-left">
                Blog body:
              </label>
              <textarea
                rows="5"
                type="text"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2 text-left">
                Select author:
              </label>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="Mario">Mario</option>
                <option value="Yoshi">Yoshi</option>
              </select>
            </div>
            <div className="flex justify-center">
              {!isPending && (
                <button className="py-2 px-3 text-white bg-green-600 hover:bg-green-900 rounded">
                  Submit
                </button>
              )}
              {isPending && (
                <button
                  disabled
                  className="py-2 px-3 text-white bg-green-600 hover:bg-green-900 rounded"
                >
                  Adding blog...
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
