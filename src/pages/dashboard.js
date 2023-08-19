import IconBar from "../components/iconBar";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import Card from "./../components/card";

export default function Dashboard() {
  const noodleImg = "./../assets/boiled-noodles.png";
  const noodleAltText = "noodles";
  const card1Values = [
    "./../assets/noodle-2.jpg",
    "noodles",
    "./../assets/chicken-1.jpg",
    "chicken",
    "./../assets/vegy-1.jpg",
    "vegetable",
    "./../assets/onion-1.png",
    "onion",
    "./../assets/shrimp-1.jpg",
    "shrimp",
  ];
  const card2Values = [
    "./../assets/smoothie.jpeg",
    "milk",
    "./../assets/chicken-1.jpg",
    "banana",
    "./../assets/vegy-1.jpg",
    "kiwi",
    "./../assets/onion-1.png",
    "lemon",
    "./../assets/shrimp-1.jpg",
    "pear",
  ];

  return (
    <div className="flex h-full bg-white p-0">
      {/* left div */}
      <div className="flex-none w-1/6 p-10">
        <img src="../assets/eatdish-logo.png" alt="eatdish-logo" />
      </div>

      {/* center div */}
      <div className="flex-none w-3/6 bg-slate-50 p-10">
        <div className="search grid grid-flow-col-dense grid-cols-2 w-full">
          <IconBar
            icon={CiSearch}
            text="Search by food name"
            className="w-3/4"
          />
          <IconBar icon={CiFilter} text="Filter" className="w-1/4" />
        </div>

        {/* the orange-bg intro */}
        <div className="header flex bg-amber-500 p-6 text-white rounded-3xl mt-8 mb-4">
          <div className="w-3/4 p-2">
            <h1 className="capitalize font-bold text-xl">
              add your own recipe
            </h1>
            <p>
              Upload your own home-made recipe and share it with other members
              of our community
            </p>
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-2 gap-10 mb-2">
          <div>
            <h2 className="text-lg font-semibold text-indigo-950 mb-6">
              Based on the type of food you like
            </h2>
          </div>
          <div className="flex cursor-pointer">
            <p className="capitalize text-amber-500 text-sm">View more</p>
            <BsArrowRightShort className="text-amber-500" />
          </div>
        </div>

        <div className="w-full flex justify-center align-middle">
          <Card
            image={noodleImg}
            altText={noodleAltText}
            name="Boiled noodles"
            cal="239"
            imgSrc1={card1Values[0]}
            imgAlt1={card1Values[1]}
            imgSrc2={card1Values[2]}
            imgAlt2={card1Values[3]}
            imgSrc3={card1Values[4]}
            imgAlt3={card1Values[5]}
            imgSrc4={card1Values[6]}
            imgAlt4={card1Values[7]}
            imgSrc5={card1Values[8]}
            imgAlt5={card1Values[9]}
          />

          <Card
            image={noodleImg}
            altText={noodleAltText}
            name="smoothie"
            cal="209"
            imgAlt1={card2Values[1]}
            imgSrc1={card2Values[0]}
            imgSrc2={card2Values[2]}
            imgAlt2={card2Values[3]}
            imgSrc3={card2Values[4]}
            imgAlt3={card2Values[5]}
            imgSrc4={card2Values[6]}
            imgAlt4={card2Values[7]}
            imgSrc5={card2Values[8]}
            imgAlt5={card2Values[9]}
          />
        </div>
      </div>

      {/* right div */}
      <div className="flex-none w-2/6"></div>
    </div>
  );
}
