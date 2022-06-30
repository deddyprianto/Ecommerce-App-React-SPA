import React, { useCallback, useRef } from "react";
import { useCat } from "customHook/useCat";

const PostCat = () => {
  return (
    <div className="mx-auto bg-white rounded-lg  dark:bg-gray-800 mt-10 w-[90%]">
      <img
        className="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Product
          </span>
          <a
            href="#"
            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
          >
            I Built A Successful Blog In One Year
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
              >
                Jone Doe
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              21 SEP 2015
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
// this is my component and why you dead know
const PetsComponent = () => {
  const { cat, isLoading, isError, setSize } = useCat();
  const observer = useRef();
  const lastEl = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSize((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );
  let totalCat = 0;
  for (let i = 0; i < cat?.length; i++) {
    totalCat += cat[i]?.length;
  }

  const data = [
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
    { nama: "deasdasdas" },
  ];
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mt-[10%]">
        <h1 className="underline text-gray-600 text-2xl ">My Pets Store</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center">
        {data.map((item, i) => (
          <PostCat key={i} />
        ))}
      </div>
    </div>
  );
};

export default PetsComponent;
