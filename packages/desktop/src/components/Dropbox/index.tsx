const Dropbox = () => {
  return (
    <div className="rounded-[30px] p-[20px] h-[80%] w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black text-white text-[72px] font-bold !bg-black">
      <div className="relative h-full w-full flex items-center justify-center ">
        <div className="absolute w-full h-full rounded-[10px] border"></div>
        <h1>Drop files here!</h1>
      </div>
    </div>
  );
};

export default Dropbox;
