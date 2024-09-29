// import cover from "../assets/vvv.mp4";
// import hangmanVideo from "../assets/hagman video.mp4";
// import ticTacToe from "../assets/tic-tac-toe video.mp4";
// import memoryVideo from "../assets/updatememory.mp4";
// import { useEffect } from "react";

// export const Home = () => {
//   useEffect(() => {
//     const title = document.getElementById("animated-title");
//     if (title) {
//       setTimeout(() => {
//         title.classList.remove("opacity-0", "translate-y-10");
//       }, 100);
//     }
//   }, []);

//   return (
//     <div className="w-full h-[150vh] bg-slate-500">
//       <section className="relative w-full h-[50vh] overflow-hidden">
//         <video
//           src={cover}
//           loop
//           autoPlay
//           muted
//           className="w-full h-[50vh] object-cover"
//         ></video>
//         <h1
//           id="animated-title"
//           className="text-7xl text-white font-extrabold absolute left-60 top-40 z-[1]
//                      opacity-0 translate-y-10 transition-all duration-1000 ease-out"
//         >
//           Welcome To My <br /> Game Portal
//         </h1>
//       </section>
//       <section className="flex justify-center flex-col items-center">
//         <h1 className="text-5xl text-white font-extrabold">
//           The game That we Offer :{" "}
//         </h1>
//         <section>
//           <h1>Tic Tac Toe</h1>
//           <video
//             src={ticTacToe}
//             autoPlay
//             loop
//             muted
//             className="w-[400px] h-[20vh]"
//           ></video>
//         </section>
//         <section>
//           <h1>Memory Game</h1>
//           <video
//             src={memoryVideo}
//             autoPlay
//             muted
//             loop
//             className="w-[400px] h-[20vh]"
//           ></video>
//         </section>
//         <section>
//           <h1>Hangman Game</h1>
//           <video
//             src={hangmanVideo}
//             autoPlay
//             loop
//             muted
//             className="w-[400px] h-[20vh]"
//           ></video>
//         </section>
//       </section>
//     </div>
//   );
// };

import cover from "../assets/vvv.mp4";
import hangmanVideo from "../assets/hagman video.mp4";
import ticTacToe from "../assets/tic-tac-toe video.mp4";
import memoryVideo from "../assets/updatememory.mp4";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const title = document.getElementById("animated-title");
    if (title) {
      setTimeout(() => {
        title.classList.remove("opacity-0", "translate-y-10");
      }, 100);
    }
  }, []);

  return (
    <div className="w-full bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <video
          src={cover}
          loop
          autoPlay
          muted
          className="w-full h-full object-cover brightness-50"
        ></video>
        <h1
          id="animated-title"
          className="text-7xl text-white font-extrabold absolute left-16 top-36 z-[1]
                     opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          Welcome To My <br /> Game Portal
        </h1>
      </section>

      {/* Games Section */}
      <section className="py-16 space-y-12">
        <h1 className="text-5xl text-center font-extrabold text-indigo-400 mb-12 animate-fade-in">
          The Games We Offer
        </h1>

        {/* Tic Tac Toe */}
        <section className="animate-slide-up flex flex-col md:flex-row md:space-x-12 items-center md:w-[80%] bg-gray-800 p-8 rounded-xl shadow-lg mx-auto hover:bg-gray-700 transition-colors">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-4xl font-semibold mb-4 text-indigo-300">
              Tic Tac Toe
            </h2>
            <p className="text-lg text-gray-300">
              Play the classic Tic Tac Toe game and challenge your friends or
              the AI! Test your strategy and win the game in this fun-filled
              challenge.
            </p>
          </div>
          <video
            src={ticTacToe}
            autoPlay
            loop
            muted
            className="w-[400px] h-[250px] rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          ></video>
        </section>

        {/* Memory Game */}
        <section className="animate-slide-up flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-12 items-center md:w-[80%] bg-gray-800 p-8 rounded-xl shadow-lg mx-auto hover:bg-gray-700 transition-colors">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-4xl font-semibold mb-4 text-indigo-300">
              Memory Game
            </h2>
            <p className="text-lg text-gray-300">
              Test your memory skills with this challenging game! Flip the cards
              and match them in the fewest moves possible.
            </p>
          </div>
          <video
            src={memoryVideo}
            autoPlay
            muted
            loop
            className="w-[400px] h-[250px] rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          ></video>
        </section>

        {/* Hangman Game */}
        <section className="animate-slide-up flex flex-col md:flex-row md:space-x-12 items-center md:w-[80%] bg-gray-800 p-8 rounded-xl shadow-lg mx-auto hover:bg-gray-700 transition-colors">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-4xl font-semibold mb-4 text-indigo-300">
              Hangman Game
            </h2>
            <p className="text-lg text-gray-300">
              Guess the word before it's too late! Hangman is a fun and exciting
              word-guessing game. Play and improve your vocabulary.
            </p>
          </div>
          <video
            src={hangmanVideo}
            autoPlay
            loop
            muted
            className="w-[400px] h-[250px] rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          ></video>
        </section>
      </section>
    </div>
  );
};
