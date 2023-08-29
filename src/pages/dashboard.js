import IconBar from "../components/iconBar";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import Card from "./../components/card";
import NavItem from "./../components/navItem";
import { TbNotes } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import { TbChartPie } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
// import Badge from "@mui/material/Badge";
import { BiSolidBell } from "react-icons/bi";

import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CardOnRight from "./../components/cardOnRight";
ChartJs.register(ArcElement, Tooltip, Legend);
export default function Dashboard() {
  const BigCardValues = [
    {
      id: 1,
      headerImage: "./../assets/boiled-noodles.png",
      headerImageAlt: "Spicy ramen noodles",
      name: "Boiled noodles",
      cal: "239",
      imgSrc1: "./../assets/noodle-2.jpg",
      imgAlt1: "noodle",
      imgSrc2: "./../assets/chicken-1.jpg",
      imgAlt2: "chicken",
      imgSrc3: "./../assets/vegy-1.jpg",
      imgAlt3: "vegetable",
      imgSrc4: "./../assets/onion-1.png",
      imgAlt4: "onion",
      imgSrc5: "./../assets/shrimp-1.jpg",
      imgAlt5: "shrimp",
      numberOfMoreRecipes: 3,
    },

    {
      id: 2,
      headerImage: "./../assets/smoothie.jpeg",
      headerImageAlt: "Smoothies",
      name: "Smoothie",
      cal: "209",
      imgSrc1: "./../assets/milk.avif",
      imgAlt1: "milk",
      imgSrc2: "./../assets/chicken-1.jpg",
      imgAlt2: "chicken",
      imgSrc3: "./../assets/vegy-1.jpg",
      imgAlt3: "vegetable",
      imgSrc4: "./../assets/onion-1.png",
      imgAlt4: "onion",
      imgSrc5: "./../assets/shrimp-1.jpg",
      imgAlt5: "shrimp",
      numberOfMoreRecipes: 1,
    },
  ];

  const data = {
    labels: ["Calories", "Carbohydrates", "Fats", "Protein"],
    datasets: [
      {
        label: "Food",
        data: [15, 15, 30, 40],
        backgroundColor: ["#fff8e7", "#5d00e1", "#006400", "orange"],
        borderColor: ["#fff8e7", "#5d00e1", "#006400", "orange"],
        hoverBackgroundColor: ["#fff8e7", "#5d00e1", "#006400", "orange"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    width: 500,
    height: 500,
    legend: {
      display: true,
      position: "right", // You can change this to 'top', 'left', or 'right'
      labels: {
        fontColor: "black", // Set the font color of the legend labels
        fontSize: 12, // Set the font size of the legend labels
        padding: 10, // Set the padding between legend labels
      },
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;

      ctx.save();
      ctx.font = "12px sans-serif";
      ctx.fillStyle = "#4b0082";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "7 days",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  const cardOnRightValues = [
    {
      id: 1,
      imgSrc: "./../assets/soup.jpeg",
      alt: "soup",
      heading: "Autumn soup",
      p: "with an appetizing almond mixture",
      timing: 15,
    },
    {
      id: 2,
      imgSrc: "./../assets/cheese-sandwich.jpeg",
      alt: "cheese sandwich",
      heading: "Grilled cheese sandwich",
      p: "with a typical mozarella",
      timing: 10,
    },
  ];

  return (
    <div className="flex h-full bg-transparent p-0">
      {/* left div */}
      <div className="flex-none w-1/6 bg-white p-10">
        <img src="./../assets/logo.png" alt="eatdish-logo" />
        <div className="icons mt-4">
          <NavItem icon={RxDashboard} text="overview" />
          <NavItem icon={TbNotes} text="recipes" />
          <NavItem icon={BsHeart} text="favorites" />
          <NavItem icon={TbChartPie} text="community" />
          <NavItem icon={FiSettings} text="settings" />

          <div className="bg-amber-500 w-full h-max px-4 grid grid-rows-2 capitalize justify-center rounded-xl mt-16">
            {/* add-recipe image div */}
            <div className="w-full row-span-1 justify-center content-center">
              <img
                src="./../assets/own-recipe.jpg"
                alt="own recipe"
                className="w-24 h-24 relative bottom-12 rounded-full mx-auto"
              />
            </div>
            <div className="text-white relative bottom-12 text-sm row-span-1">
              <p>Share your own recipe with the community</p>
              <div className="px-1 rounded-xl py-2 bg-white mt-2 text-amber-500 text-center cursor-pointer">
                <p>upload now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* center div */}
      <div className="w-3/6 bg-slate-50 p-10">
        <div className="w-full grid grid-cols-4 gap-4 bg-slate-50">
          <div className="col-span-3">
            <IconBar icon={CiSearch} text="Search by food name" />
          </div>
          <div className="col-span-1">
            <IconBar icon={CiFilter} text="Filter"/>
          </div>
        </div>

        {/* the orange-bg intro */}
        <div className="header w-full flex justify-between p-6 bg-amber-500 text-white rounded-3xl mt-8 mb-4">
          <div className="w-3/4 flex flex-col justify-center gap-2">
            <h1 className="capitalize font-bold text-xl w-full">
              add your own recipe
            </h1>
            <p className="text-sm text-stone-200 w-full">
              Upload your own home-made recipe and share it with other members
              of our community
            </p>
          </div>
          <div className="w-1/4">
            <img
              src="./../assets/choco.jpg"
              className="h-11/12 rounded-lg"
              alt="choco"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 justify-between gap-10 mb-2 p-2">
          <div className="text-lg font-semibold text-indigo-950 mb-6 col-span-2">
            <h2>Based on the type of food you like</h2>
          </div>
          <div className="flex justify-evenly cursor-pointer col-span-1 capitalize text-amber-500 text-sm">
            <p>View more</p>
            <BsArrowRightShort className="text-amber-500" />
          </div>
        </div>

        <div className="w-full flex justify-center align-middle">
          {BigCardValues.map((card) => (
            <Card
              key={card.id}
              image={card.headerImage}
              altText={card.headerImageAlt}
              name={card.name}
              cal={card.cal}
              imgSrc1={card.imgSrc1}
              imgAlt1={card.imgAlt1}
              imgSrc2={card.imgSrc2}
              imgAlt2={card.imgAlt2}
              imgSrc3={card.imgSrc3}
              imgAlt3={card.imgAlt3}
              imgSrc4={card.imgSrc4}
              imgAlt4={card.imgAlt4}
              imgSrc5={card.imgSrc5}
              imgAlt5={card.imgAlt5}
              numberOfMoreRecipes={card.numberOfMoreRecipes}
            />
          ))}
        </div>
      </div>

      {/* right div */}
      <div className="flex-none w-2/6 p-8">
        {/* the icons */}
        <div className="flex justify-end mb-4">
          <div className="w-8 h-8 rounded-lg bg-white drop-shadow flex justify-center items-center">
            <BiSolidBell size={18} className="text-indigo-950 mx-auto" />
            {/* <Badge variant="dot" color="danger">
            </Badge> */}
          </div>
          <div className="w-8 h-8 rounded-lg bg-amber-500 mx-1">
            <img
              src="./../assets/avatar.png"
              className="rounded-lg"
              alt="avatar"
            />
          </div>
        </div>

        {/* chart and its headings */}
        <div className="m-auto">
          <div className="flex flex-col mb-6 w-3/4">
            <p className="font-semibold">
              <span className="text-indigo-950 text-md py-2 text-xl capitalize">
                Report
              </span>
              <span className="text-stone-300 text-sm"> on this week</span>
            </p>
            <div className="flex cursor-pointer text-stone-300">
              <div className="text-xs">
                <p className="capitalize flex ">From 6-13, Nov 2021</p>
              </div>
              <div>
                <RiArrowDropDownLine size={18} />
              </div>
            </div>
          </div>
          {/*  chart*/}
          <div className="w-3/4 py-4">
            <Doughnut
              data={data}
              options={chartOptions}
              plugins={[textCenter]}
            ></Doughnut>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-10 p-2 capitalize m-auto">
          <div className="text-lg font-semibold text-indigo-950 mb-6 col-span-1">
            <h2>More recipe</h2>
          </div>
          <div className="grid grid-cols-2 cursor-pointer col-span-1  text-amber-500 text-sm">
            <p>View more</p>
            <BsArrowRightShort className="text-amber-500" />
          </div>
        </div>

        {/* recipes */}
        <div className="grid grid-cols-2 gap-4">
          {cardOnRightValues.map((card) => (
            <CardOnRight
              key={card.id}
              imgSrc={card.imgSrc}
              imgAlt={card.alt}
              heading={card.heading}
              p={card.p}
              timing={card.timing}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
