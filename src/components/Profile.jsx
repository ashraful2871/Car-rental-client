import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Profile = () => {
  const axiosSecure = useAxiosSecure();
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   const fetchMyData = async () => {
  //     const { data } = await axios.get("http://localhost:5000");
  //     setData(data);
  //   };
  //   fetchMyData();
  // }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["personalInfo"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/");
      return data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <h2>this is profile name: {data?.name}</h2>
      <p>age: {data?.age}</p>
    </div>
  );
};

export default Profile;
