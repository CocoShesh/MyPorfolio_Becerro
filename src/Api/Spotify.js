import axios from "axios";

let token = import.meta.env.VITE_SPOTIFY_TOKEN;

export const getSpotifyProfile = async () => {
  try {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios(config);
    console.log("data", response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      await handleRefreshToken();
      return getSpotifyProfile();
    }
    console.error("Error fetching Spotify profile:", error);
    throw error;
  }
};

export const getTotalFollowers = async () => {
  let config = {
    method: "get",
    url: `https://api.spotify.com/v1/me/following?type=artist`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios(config);
  return response.data;
};

export const currentlyPlaying = async () => {
  let config = {
    method: "get",
    url: `https://api.spotify.com/v1/me/player/currently-playing`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios(config);
  return response.data;
};

export const getQueuePlaylist = async () => {
  let config = {
    method: "get",
    url: "https://api.spotify.com/v1/me/player/queue",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios(config);
  return response.data;
};

export const getTopArtistUser = async () => {
  let config = {
    method: "get",
    url: "https://api.spotify.com/v1/me/top/artists?locale=en-US%2Cen%3Bq%3D0.5",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios(config);
  return response.data;
};

export const getPlayerTrack = async () => {
  let config = {
    method: "get",
    url: "https://api.spotify.com/v1/me/player",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios(config);
  return response.data;
};
