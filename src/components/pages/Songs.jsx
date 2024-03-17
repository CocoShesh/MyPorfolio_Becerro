import React, { useEffect, useState } from "react";
import { Card, Space } from "antd";
import {
  getSpotifyProfile,
  getTotalFollowers,
  currentlyPlaying,
  getQueuePlaylist,
  getTopArtistUser,
  getPlayerTrack,
} from "../Api/Spotify";

const Songs = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(null); // Initialize as null
  const [queuePlaylist, setQueuePlaylist] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [track, setTrack] = useState(null);

  const fetchCurrentlyPlaying = async () => {
    try {
      const response = await currentlyPlaying();
      const responseQueuePlaying = await getQueuePlaylist();
      setQueuePlaylist(responseQueuePlaying);
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

        const responsePlayerTrack = await getPlayerTrack();
        setTrack(responsePlayerTrack);
        fetchCurrentlyPlaying();
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
    const intervalId = setInterval(fetchCurrentlyPlaying, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const millisecondsToMinutes = milliseconds => {
    const totalSeconds = milliseconds / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60).toFixed(0);
    return `${minutes}:${seconds}`;
  };
  return (
    <>
      <section className="min-h-screen lg:px-28  py-10 w-full grid lg:grid-cols-2 gap-x-10 md:grid-cols-1 sm:grid-cols-1  place-content-center gap-y-10">
        <Card
          className=" max-sm:w-[400px] shadow-xl relative border-none rounded-3xl brightness-75 h-[290px] text-white"
          style={{
            backgroundImage: `url(${isCurrentlyPlaying?.item?.album?.images[0]?.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {isCurrentlyPlaying ? (
            <section className="w-full h-full absolute z-20 bg-[#0a192f34]  font-sans text-white  left-0 top-0 flex flex-col lg:py-5 sm:py-5 xs:py-5  px-10 gap-10 py-5  ">
              <h1 className="text-xl   font-extrabold  text-white uppercase  tracking-widest font-mono">
                Currently Playing
              </h1>
              <section className="flex ">
                <section className="flex flex-col  gap-2 w-full text-lg ">
                  <span className="text-white text-5xl font-bold capitalize line-clamp-1">
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
                  <section className="flex items-center gap-3">
                    <progress
                      className="progress progress-accent bg-[#0a192f] w-full"
                      value={isCurrentlyPlaying?.progress_ms} // Use track progress for value
                      max={isCurrentlyPlaying?.item?.duration_ms} // Use duration from currently playing track for max
                    ></progress>{" "}
                    <span className="text-sm font-bold">
                      {millisecondsToMinutes(
                        isCurrentlyPlaying?.item?.duration_ms
                      )}
                    </span>
                  </section>
                </section>
              </section>
            </section>
          ) : (
            <h1 className="text-xl font-bold">No currently playing</h1>
          )}
        </Card>
        <Card className="w-[590px] max-sm:w-[400px] border-none bg-transparent h-[290px]  text-white ">
          <section className="flex items-center gap-10 pt-5">
            <img
              src="https://i.scdn.co/image/ab6775700000ee85ba3f19b5ad0fafdc447c7500"
              alt=""
              className="h-[150px] rounded-full object-cover"
            />
            <section className="font-bold  ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
                {data?.display_name}
              </h1>
              <br />
              <span className=""> Following: {total?.artists?.total}</span>
            </section>
          </section>
        </Card>
        <Card className="  border-none bg-transparent h-[290px]  ">
          <h1 className="px-5 text-2xl  uppercase font-bold text-white">
            Favorite Artists
          </h1>
          <section className="flex items-center gap-10 justify-center mt-10">
            {topArtists?.items?.slice(0, 3).map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex  flex-col items-center justify-center text-center gap-2"
                >
                  <span className="text-white text-3xl "></span>
                  <span className="text-sm ">
                    {item?.images?.slice(0, 1).map((item, index) => (
                      <img
                        key={index}
                        src={item?.url}
                        className="h-[150px]  sm:h-[150px] sm:w-[150px] object-cover w-[120px]  rounded-2xl"
                      />
                    ))}
                    <section className="mt-3 flex flex-col">
                      <span className="text-white font-bold ">
                        {item?.name}
                      </span>
                      <span className="capitalize text-white">
                        {" "}
                        {item?.type}{" "}
                      </span>
                    </section>
                  </span>
                </section>
              );
            })}
          </section>
        </Card>{" "}
        <Card className="w-[590px] max-sm:w-[400px] border-none bg-transparent h-[290px] mt-[-150px] max-md:mt-0 2xl:[450px] text-white">
          <h1 className=" text-white font-bold text-2xl"> Queue</h1>{" "}
          <section className="flex  flex-col gap-5 pt-3 w-full">
            {queuePlaylist?.queue?.slice(0, 3).map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex  w-full gap-5 items-center mt-2 text-lg text-left"
                >
                  {item?.album?.images?.slice(0, 1).map((image, index) => {
                    return (
                      <img
                        key={index}
                        src={image?.url}
                        alt=""
                        className="w-20 h-20  shadow-2xl border border-slate-800 object-fill  rounded-full"
                      />
                    );
                  })}
                  <section>
                    <span className=" text-white font-bold line-clamp-1">
                      {item?.album?.name}
                    </span>
                    {item?.artists?.slice(0, 1).map((artist, index) => (
                      <span key={index} className="line-clamp-1">
                        {artist?.name}
                      </span>
                    ))}
                  </section>
                </section>
              );
            })}
          </section>
        </Card>
      </section>
    </>
  );
};

export default Songs;
