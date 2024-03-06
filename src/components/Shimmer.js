const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
        return <div className="h-80 w-52 bg-gray-200 m-4 rounded-lg"></div>;
      })}
      ;
    </div>
  );
};

export default Shimmer;
