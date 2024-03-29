import Navbar from "../Shared/Navbar";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, photo, type, price, rateing, discription } =
    product;
  const [agreed, setAgreed] = useState(false);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const price = form.price.value;
    const rateing = form.rateing.value;
    const discription = form.discription.value;

    const updatedProduct = {
      name,
      brand,
      photo,
      type,
      price,
      rateing,
      discription,
    };
    console.log(updatedProduct);
    // send data to the server
    fetch(`https://brand-shop-server-bthj.onrender.com/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product updated Successfully",
            icon: "success",
            confirmButtonText: "COOL",
          });
        }
      });
  };
  return (
    <div>
      <div className="isolate bg-white px-6  sm:pb-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <Navbar></Navbar>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Update Your Product
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Give detailed Info about your product to Update
          </p>
        </div>
        <form
          onSubmit={handleUpdateProduct}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Your product name"
                  id="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Brand Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="brand"
                  defaultValue={brand}
                  placeholder="Brand Name"
                  id="brand"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="photo"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                ImageURL
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo url here"
                  id="photo"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="type"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Type
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="Product type"
                  id="type"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Product price"
                  id="price"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="rateing"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Rateing
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="rateing"
                  defaultValue={rateing}
                  placeholder="product rateing"
                  id="rateing"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="discription"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Short Discription
              </label>
              <div className="mt-2.5">
                <textarea
                  name="discription"
                  defaultValue={discription}
                  placeholder="Your text"
                  id="discription"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-indigo-600" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
