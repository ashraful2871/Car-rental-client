import axios from "axios";
import ListingsCard from "./ListingsCard";
import { Fade } from "react-awesome-reveal";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

const Listings = () => {
  const { data: listings, isLoading } = useQuery({
    queryKey: ["listings"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/listings`
      );
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Recent <span className="text-red-500">Listings</span>
      </h2>
      <p className="text-center bg-base-100 text-base-content mb-10">
        Explore the latest car listings, featuring top models
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, idx) => (
          <Fade cascade damping={0.2}>
            <ListingsCard key={idx} listing={listing}></ListingsCard>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Listings;
