import cover from "../assets/vvv.mp4";

export const Home = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-500">
      <section className="relative w-full h-[50vh] overflow-hidden">
        <video
          src={cover}
          loop
          autoPlay
          muted
          className="w-full h-[50vh] object-cover"
        ></video>

        <h1 className="text-7xl text-white font-extrabold absolute left-60 top-40 z-[1]">
          Welcome To My <br /> Game Portal
        </h1>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};
