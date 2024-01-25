import Marquee from "react-fast-marquee";
const Brands = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <Marquee pauseOnHover={true} speed={100}>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://i.ibb.co/ZmkgNk9/levi-logo-4-82250bd000e1-mobile.jpg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://i.ibb.co/7vmG0wj/1512076803-93-Nike-mobile.jpg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://i.ibb.co/F7Pq9tg/Adidas-Logo-1991.jpg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://i.ibb.co/xXXY101/e632a23a8796a6f2357958adfbb8dcfc.jpg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://i.ibb.co/c2Vyw2K/2560px-Zara-Logo-svg.png"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://i.ibb.co/cLD76pJ/download.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
