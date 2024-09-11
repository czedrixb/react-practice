import { Link } from "react-router-dom";

const Bloglist = ({ blogs, handleDelete }) => {
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Body
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="bg-white border-b ">
              <td className="px-6 py-4 font-semibold">{blog.id}</td>
              <td className="px-6 py-4 font-semibold">{blog.title}</td>
              <td className="px-6 py-4 font-semibold">{blog.body}</td>
              <td className="px-6 py-4 font-semibold">{blog.author}</td>
              <td className="px-6 py-4 font-semibold flex flex-col gap-y-1">
                <Link
                  to={`blogs/${blog.id}`}
                  className="py-2 px-3 text-white bg-green-600 hover:bg-green-900 rounded text-center"
                >
                  View
                </Link>
                <button className="py-2 px-3 text-white bg-blue-600 hover:bg-blue-900 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="py-2 px-3 text-white bg-red-600 hover:bg-red-900 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bloglist;
