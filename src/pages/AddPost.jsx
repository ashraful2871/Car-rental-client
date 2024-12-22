import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddPost = () => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const { data: info } = await axiosSecure.post("/user", data);
      console.log(info);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      // 2. Reset form
      // form.reset();
      //   console.log(success);

      // 3. Show toast and navigate
      toast.success("data added successfully");
      //   navigate("/my-posted-jobs");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = { email, password };
    console.log(data);
    await mutateAsync(data);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">
            {isPending ? "Saving..." : "Save Data"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
