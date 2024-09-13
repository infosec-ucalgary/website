import goob from "/images/constructionGoob.png";

function NotFound() {
  return (
    <div className="flex justify-center h-full w-full overflow-hidden items-center">
      <div className="text-center text-white">
        <div className="my-5">
          <h1>404 - Not Found</h1>
          <p>The page you're looking for does not exist.</p>
        </div>
        <img src={goob} className="inline w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/8" />
      </div>
    </div>
  );
}

export default NotFound;
