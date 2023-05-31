import { forage } from "@tauri-apps/tauri-forage"

export const checkOnBoardingStatus = async (): Promise<boolean> => {
    // need to check with the token of spotify/apple music for integration
    const onBoarded = (await forage.getKeyValue({
        key: "user",
        value: "onBoardingStatus"
    })()) as boolean

    return onBoarded;
}

import { stringify } from "querystring";

const generateRandomString = function (length: number) {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

export const createSpotifyAuthURL = (): string => {
    const scopes =
        "user-read-currently-playing user-read-recently-played user-library-read user-follow-read";
    const state = generateRandomString(16);
    return (
        "https://accounts.spotify.com/authorize?" +
        stringify({
            response_type: "code",
            client_id: "process?.env?.SPOTIFY_CLIENT_ID",
            scope: scopes,
            redirect_uri: "process?.env?.SPOTIFY_REDIRECT_URI",
            state: state,
        })
    );
}