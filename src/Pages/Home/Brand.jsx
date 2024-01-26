import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      <div></div>
      <div className="bg-gray-100 rounded-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <Link to="/brand/Nike">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/7vmG0wj/1512076803-93-Nike-mobile.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <p className="mt-2 text-base font-semibold text-gray-900">
                    NIKE
                  </p>
                </div>
              </Link>
              <Link to="/brand/Adidas">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/F7Pq9tg/Adidas-Logo-1991.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <p className="mt-2 text-base font-semibold text-gray-900">
                    ADIDAS
                  </p>
                </div>
              </Link>
              <Link to="/brand/Gucci">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/xXXY101/e632a23a8796a6f2357958adfbb8dcfc.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <p className="mt-2 text-base font-semibold text-gray-900">
                    GUCCI
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <Link to="/brand/Zara">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/c2Vyw2K/2560px-Zara-Logo-svg.png"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <p className="mt-2 text-base font-semibold text-gray-900">
                    ZARA
                  </p>
                </div>
              </Link>
              <Link to="/brand/H&M">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/cLD76pJ/download.png"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <p className="mt-2 text-base font-semibold text-gray-900">
                    H&M
                  </p>
                </div>
              </Link>
              <Link to="/brand/Levis">
                <div className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://i.ibb.co/ZmkgNk9/levi-logo-4-82250bd000e1-mobile.jpg"
                      alt=""
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <p className="mt-2 text-base font-semibold text-gray-900">
                    LEVIS
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brand;
