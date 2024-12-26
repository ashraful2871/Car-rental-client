import React from "react";
import { Fade } from "react-awesome-reveal";

const OurSell = () => {
  const fakeData = [
    {
      id: 1,
      name: "Bluetooth Car",
      price: "$120.00",
      image: "https://i.ibb.co.com/gmXZh3N/bll.webp",
    },
    {
      id: 2,
      name: "Energiser Black",
      price: "$100.00",
      image: "https://i.ibb.co.com/HCkhgz0/energizer.jpg",
    },
    {
      id: 3,
      name: "Fox Racing V2",
      price: "$35.00",
      image: "https://i.ibb.co.com/hZZNn4W/fff.jpg",
    },
    {
      id: 4,
      name: "Icon SuperDuty 2",
      price: "$35.00",
      image: "https://i.ibb.co.com/jVGr9xv/sss.jpg",
    },
    {
      id: 5,
      name: "Life Jacket Model 2018",
      price: "$15.00",
      image: "https://i.ibb.co.com/LZSSBK6/lifejacket.jpg",
    },
    {
      id: 6,
      name: "Motorcycle Camera",
      price: "$100.00",
      image: "https://i.ibb.co.com/8r30YJg/F45-X-800x800.jpg",
    },
  ];
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mt-12 text-center">
        Our <span className="text-red-500">Sells </span>
      </h2>
      <p className="text-center bg-base-100 text-base-content mb-10">
        We Sell some Products, if you want explore our products.
      </p>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fakeData.map((product) => (
            <Fade cascade damping={0.2}>
              <div
                key={product.id}
                className="border rounded-lg p-4 text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">
                  {product.name.toUpperCase()}
                </h3>
                <p className="text-red-500 font-bold">{product.price}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurSell;
