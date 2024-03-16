import React, { useEffect, useState } from "react";
import {
  getSpotifyProfile,
  getTotalFollowers,
  currentlyPlaying,
  getQueuePlaylist,
  getTopArtistUser,
} from "../Api/Spotify";

const Songs = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState([]);
  const [queuePlaylist, setQueuePlaylist] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  // Function to fetch currently playing track
  const fetchCurrentlyPlaying = async () => {
    try {
      const response = await currentlyPlaying();
      const responseQueuePlaying = await getQueuePlaylist();
      setQueuePlaylist(responseQueuePlaying);
      console.log("currently playing", response);
      setIsCurrentlyPlaying(response);
    } catch (error) {
      console.error("Error fetching currently playing track:", error);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const responseProfile = await getSpotifyProfile();
        setData(responseProfile);

        const responseFollowers = await getTotalFollowers();
        setTotal(responseFollowers);

        const responseTopArtists = await getTopArtistUser();
        setTopArtists(responseTopArtists);
        fetchCurrentlyPlaying();
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
    const intervalId = setInterval(fetchCurrentlyPlaying, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {loading ? null : <Skeleton />}
      {/* <section className="min-h-screen w-full  grid  gap-5 grid-cols-1 md:grid-cols-1 max-sm:px-10 lg:px-5 lg:grid-cols-2   2xl:grid-cols-3 2xl:px-10 3xl:grid-cols-2 sm:px-10   justify-between px-32 py-10  font-sans">
        <section className=" flex   items-center px-10 lg:py-5 sm:py-5 xs:py-5 gap-10 bg-[#112240] rounded-2xl">
          <img
            src="https://i.scdn.co/image/ab6775700000ee85ba3f19b5ad0fafdc447c7500"
            alt=""
            className="h-[200px]  rounded-full object-cover"
          />
          <section className="font-bold ">
            <span> Profile</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold">
              {data?.display_name}
            </h1>
            <br />
            <span> Following: {total?.artists?.total}</span>
          </section>
        </section>
        <section className="flex  flex-col   lg:py-5 sm:py-5   xs:py-5  gap-6 bg-[#112240] rounded-2xl font-sans">
          <h1 className="px-5 pt-5 uppercase font-bold text-white">
            Favorite Artists
          </h1>
          <section className="flex    items-center justify-center gap-7 bg-[#112240] rounded-2xl font-sans ">
            {topArtists?.items?.slice(0, 4).map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex flex-col items-center justify-center   text-center  gap-2"
                >
                  <span className="text-white text-3xl "></span>
                  <span className="text-sm ">
                    {item?.images?.slice(0, 1).map((item, index) => (
                      <img
                        key={index}
                        src={item?.url}
                        className=" h-[80px] lg:h-[90px] lg:w-[90px] sm:h-[130px] sm:w-[130px]   object-cover w-[80px] rounded-full"
                      />
                    ))}
                    <section className="mt-3 flex flex-col">
                      <span className="text-white font-bold ">
                        {item?.name}
                      </span>
                      <span className="capitalize"> {item?.type} </span>
                    </section>
                  </span>
                </section>
              );
            })}
          </section>
        </section>

        {isCurrentlyPlaying ? (
          <section className="w-full flex  flex-col lg:py-5 sm:py-5   xs:py-5  items-center px-10 gap-10 py-5 bg-[#112240] rounded-2xl">
            <h1 className="text-lg font-bold text-white uppercase">
              Currently Playing
            </h1>
            <section className="flex gap-10">
              <img
                src={isCurrentlyPlaying?.item?.album?.images[0]?.url}
                alt=""
                className="h-[140px] w-[140px] rounded-2xl object-cover lg:h-[200px] lg:w-[200px]"
              />
              <section className="flex flex-col gap-2 w-[300px]  text-lg h-[160px] ">
                <span className="text-white text-3xl  font-bold capitalize  line-clamp-1">
                  {isCurrentlyPlaying?.item?.album?.name}
                </span>
                <span>
                  {isCurrentlyPlaying?.item?.album?.artists?.map(
                    (artist, index) => (
                      <span key={index} className="">
                        {artist?.name}
                        {index <
                          isCurrentlyPlaying?.item?.album?.artists?.length -
                            1 && ", "}
                      </span>
                    )
                  )}
                </span>
                <span className="capitalize">
                  {isCurrentlyPlaying?.item?.album?.artists[0]?.type}
                </span>
                <span>{isCurrentlyPlaying?.item?.album?.release_date}</span>
              </section>
            </section>
          </section>
        ) : (
          <h1 className="text-xl font-bold">No currently playing</h1>
        )}
        <section className="flex flex-col  pb-5  lg:py-5 sm:py-5  xs:py-5 px-10 gap-3 bg-[#112240] rounded-2xl">
          <h1 className="pt-5  text-white  font-bold text-2xl"> Queue</h1>
          <section className="flex gap-5 w-full">
            {queuePlaylist?.queue?.slice(0, 3).map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex flex-col w-full items-start justify-center mt-8 text-lg  text-left"
                >
                  <span className=" text-white font-bold  line-clamp-1">
                    {item?.album?.name}
                  </span>
                  {item?.artists?.map((artist, index) => (
                    <span key={index} className="">
                      {artist?.name}
                      {index < item?.artists?.length - 1 && ", "}
                    </span>
                  ))}

                  {item?.album?.images?.slice(0, 1).map((image, index) => {
                    return (
                      <img
                        src={image?.url}
                        alt=""
                        className=" h-[110px] w-full lg:h-[150px] object-cover   mt-3 rounded-lg"
                      />
                    );
                  })}
                </section>
              );
            })}
          </section>
        </section>
      </section> */}
    </>
  );
};
export default Songs;
const Skeleton = () => {
  return (
    // Skeleton layout
    <section className="min-h-screen   w-full grid gap-5 grid-cols-1 md:grid-cols-1 max-sm:px-10 lg:px-5 lg:grid-cols-2 2xl:grid-cols-3 2xl:px-10 3xl:grid-cols-2 sm:px-10 justify-between px-32 py-10 font-sans">
      {/* Profile skeleton */}
      <section className="flex items-center px-10 lg:py-5 sm:py-5 xs:py-5 gap-10 bg-[#112240]  animate-pulse rounded-2xl">
        <div className="h-[200px] w-[200px] animate-pulse bg-[#3e4c64] rounded-full"></div>
        <div className="font-bold">
          <span className="block h-4 w-44 bg-[#3e4c64] rounded mb-2"></span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold w-3/4 h-8 bg-[#3e4c64] rounded mb-2"></h1>
          <span className="block h-4 w-32 bg-[#3e4c64] rounded"></span>
        </div>
      </section>
      {/* Favorite Artists skeleton */}
      <section className="flex flex-col lg:py-5 sm:py-5 xs:py-5 gap-6 bg-[#112240] rounded-2xl font-sans">
        <div className=" ml-10 pt-5 w-[300px]  animate-pulse bg-[#3e4c64]  h-[10px]   rounded-full uppercase font-bold text-white"></div>
        <div className="flex items-center justify-center gap-7 bg-[#112240] rounded-2xl font-sans">
          <section className="mt-3 flex flex-col items-center justify-center  gap-3">
            <div className=" w-[80px] h-[80px] animate-pulse bg-[#3e4c64] rounded-full"></div>
            <span className="h-7 w-20 animate-pulse  rounded-full bg-[#3e4c64]  "></span>
            <span className=" w-14 h-7 animate-pulse rounded-full bg-[#3e4c64]">
              {" "}
            </span>
          </section>
          <section className="mt-3 flex flex-col items-center justify-center  gap-3">
            <div className=" w-[80px] h-[80px] animate-pulse bg-[#3e4c64] rounded-full"></div>
            <span className="h-7 w-20 rounded-full animate-pulse bg-[#3e4c64]  "></span>
            <span className=" w-14 h-7 animate-pulse  rounded-full bg-[#3e4c64]">
              {" "}
            </span>
          </section>
          <section className="mt-3 flex flex-col items-center justify-center  gap-3">
            <div className=" w-[80px] h-[80px] animate-pulse bg-[#3e4c64] rounded-full"></div>
            <span className="h-7 w-20 rounded-full animate-pulse bg-[#3e4c64]  "></span>
            <span className=" w-14 h-7 animate-pulse rounded-full bg-[#3e4c64]">
              {" "}
            </span>
          </section>
          <section className="mt-3 flex flex-col items-center justify-center  gap-3">
            <div className=" w-[80px] h-[80px] animate-pulse bg-[#3e4c64] rounded-full"></div>
            <span className="h-7 w-20 rounded-full animate-pulse bg-[#3e4c64]  "></span>
            <span className=" w-14 h-7 animate-pulse rounded-full bg-[#3e4c64]">
              {" "}
            </span>
          </section>
        </div>
      </section>
      {/* <section className="flex  flex-col   lg:py-5 sm:py-5   xs:py-5  gap-6 bg-[#112240] rounded-2xl font-sans">
        <h1 className="px-5 pt-5 uppercase font-bold text-white">
          Favorite Artists
        </h1>
        <section className="flex    items-center justify-center gap-7 bg-[#112240] rounded-2xl font-sans ">
          {topArtists?.items?.slice(0, 4).map((item, index) => {
            return (
              <section
                key={index}
                className="flex flex-col items-center justify-center   text-center  gap-2"
              >
                <span className="text-white text-3xl "></span>
                <span className="text-sm ">
                  {item?.images?.slice(0, 1).map((item, index) => (
                    <img
                      key={index}
                      src={item?.url}
                      className=" h-[80px] lg:h-[90px] lg:w-[90px] sm:h-[130px] sm:w-[130px]   object-cover w-[80px] rounded-full"
                    />
                  ))}
                  <section className="mt-3 flex flex-col">
                    <span className="text-white font-bold ">{item?.name}</span>
                    <span className="capitalize"> {item?.type} </span>
                  </section>
                </span>
              </section>
            );
          })}
        </section>
      </section>{" "}
      Currently Playing or No currently playing skeleton */}
      <section className="w-full flex flex-col lg:py-5 sm:py-5 xs:py-5 items-center px-10 gap-10 py-5 bg-[#112240] rounded-2xl">
        <div className="h-[200px] w-[200px] animate-pulse bg-[#3e4c64] rounded-2xl"></div>
        <div className="font-bold text-lg w-[80px] h-[80px] animate-pulse text-white uppercase"></div>
      </section>
      {/* Queue skeleton */}
      <section className="flex flex-col pb-5 lg:py-5 sm:py-5 xs:py-5 px-10 gap-3 bg-[#112240] rounded-2xl">
        <div className="pt-5 text-white font-bold w-[80px] h-[80px] animate-pulse  text-2xl"></div>
        <div className="w-full flex gap-5">
          <div className="w-[110px] h-[110px] animate-pulse bg-[#3e4c64] rounded-lg"></div>
          <div className="w-[110px] h-[110px] animate-pulse bg-[#3e4c64] rounded-lg"></div>
          <div className="w-[110px] h-[110px] animate-pulse bg-[#3e4c64] rounded-lg"></div>
        </div>
      </section>
    </section>
  );
};
