import axios from "axios";

// let token = import.meta.env.VITE_SPOTIFY_TOKEN;
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

const handleRefreshToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "refresh_token",
        refresh_token: token.refresh_token,
        client_id: clientId,
        client_secret: clientSecret,
      }
    );

    token = response.data.access_token;
    return token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

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
      // If the error is due to an expired token, refresh the token and retry the request
      await handleRefreshToken();
      // Retry the request with the new token
      return getSpotifyPlaylist();
    }
    console.error("Error fetching Spotify playlist:", error);
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
