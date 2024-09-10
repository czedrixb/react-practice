const Bloglist = ({ blogs, title }) => {
  return (
    <div>
      <div className="text-xl font-bold">{title}</div>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer"
        >
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
      ))}
    </div>
  );
};

export default Bloglist;
