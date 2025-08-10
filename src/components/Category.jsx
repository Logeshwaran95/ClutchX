import React from "react";
import {
  FaGamepad,
  FaDesktop,
  FaVrCardboard,
  FaChessBoard,
  FaFutbol,
  FaFilm,
  FaBomb,
  FaPaintBrush,
  FaCrosshairs,
  FaDoorOpen,
  FaTableTennis,
  FaBowlingBall,
  FaChild,
  FaRocket,
} from "react-icons/fa";

const categories = [
  { name: "PS", icon: FaGamepad },
  { name: "PC", icon: FaDesktop },
  { name: "VR", icon: FaVrCardboard },
  { name: "BOARD GAMES", icon: FaChessBoard },
  { name: "SOAP FOOTBALL", icon: FaFutbol },
  { name: "PRIVATE THEATRE", icon: FaFilm },
  { name: "BLASTERS", icon: FaBomb },
  { name: "PAINTBALL", icon: FaPaintBrush },
  { name: "LASER TAG", icon: FaCrosshairs },
  { name: "ESCAPE ROOMS", icon: FaDoorOpen },
  { name: "SNOOKERS", icon: FaTableTennis },
  { name: "BOWLING", icon: FaBowlingBall },
  { name: "KIDS", icon: FaChild },
  { name: "TRAMPOLINE", icon: FaRocket },
];

const CategoryList = () => (
  <section
    aria-label="Gaming categories"
    className="max-w-7xl mx-auto px-6 md:px-12 mb-16"
  >
    <h3 className="text-center text-white text-3xl font-bold mb-10 tracking-wider uppercase drop-shadow-md">
      Explore Categories
    </h3>
    <div className="flex flex-wrap justify-center gap-8">
      {categories.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-6 py-3 shadow-lg hover:scale-110 hover:shadow-cyan-500/70 transform transition duration-300 ease-in-out select-none flex items-center gap-3"
          title={`Category: ${name}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") alert(`Clicked on ${name}`);
          }}
          onClick={() => alert(`Clicked on ${name}`)}
        >
          <Icon className="text-white-400" size={22} />
          <span className="text-white text-lg font-semibold tracking-widest uppercase drop-shadow-sm">
            {name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default CategoryList;
