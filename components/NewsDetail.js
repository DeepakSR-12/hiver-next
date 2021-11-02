import { useState } from "react";
import { ArrowNarrowRightIcon, XIcon } from "@heroicons/react/outline";

const NewsDetail = ({ value }) => {
  const [toggle, setToggle] = useState(false);

  const image =
    "https://st.depositphotos.com/1011646/1255/i/950/depositphotos_12553000-stock-photo-breaking-news-screen.jpg";

  return (
    <div className="border border-gray-200 shadow-sm p-8 text-left flex space-x-4">
      {toggle ? (
        <div className="transition duration-500 ease-out transform w-full">
          <div className="flex justify-between">
            <p className="text-2xl font-bold w-40">{value.source?.name}</p>
            <XIcon
              className="h-8 w-8 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <div className="mt-4 flex space-x-12">
            <img
              className="w-40 h-40 max-w-xs"
              src={value.urlToImage || image}
            />
            <div>
              <h2 className="text-3xl text-blue-700 font-semibold">
                {value.title}
              </h2>
              <p className="text-lg mt-2">{value.content}</p>
              <p className="mt-3 font-medium">
                Published Date:{" "}
                <span className="font-normal">
                  {value.publishedAt?.substring(0, 10)}
                </span>
              </p>
              <a
                className="text-red-700 text-lg flex items-center space-x-1 cursor-pointer"
                href={value.url}
                target="_blank"
              >
                <p>Read more </p>
                <ArrowNarrowRightIcon className="h-4 w-4 my-2" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="transition duration-500 ease-in transform cursor-pointer flex space-x-8 items-center"
          onClick={() => setToggle(!toggle)}
        >
          <div>
            <p className="text-2xl font-bold w-40">{value.source?.name}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-3xl text-blue-700 font-semibold">
              {value.title}
            </h2>
            <p className="text-lg mt-2">{value.description}</p>
            <p className="mt-3">{value.publishedAt?.substring(0, 10)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
