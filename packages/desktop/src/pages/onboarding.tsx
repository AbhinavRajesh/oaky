import { useEffect } from "react";
import Button from "../components/Button";
import { createSpotifyAuthURL } from "../utils/auth";
import { log } from "../utils/logger";

const OnBoarding = () => {

    const connectWithSpotify = async () => {
        const url = createSpotifyAuthURL()
        // Doesn't work \/
        // 
        // log("Opening authWindow", { url })
        // const authWindow = window.open(url, "_blank") as Window;
        // log("Opened authWindow")
        // window.addEventListener("message", event => {
        //     // Check that the event origin is from the Google OAuth URL
        //     if (event.origin !== "https://accounts.google.com") return;

        //     // Check that the event data contains the tokens
        //     if (!event.data.tokens) return;

        //     // Access the tokens from the event data
        //     const { accessToken, refreshToken } = event.data.tokens;

        //     // Use the tokens as needed in your Tauri application
        //     console.log(`Access token: ${accessToken}`);
        //     console.log(`Refresh token: ${refreshToken}`);

        //     // Close the OAuth window
        //     authWindow.close();
        // });
    }

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center">
            <h1 className="font-bold text-center text-[32px]">Let's get started!</h1>
            <div className="flex flex-col items-center justify-center">
                <Button onClick={connectWithSpotify} className="mt-[20px] w-full">
                    Connect with Spotify
                </Button>
                <Button disabled className="mt-[20px] w-full">
                    Connect with Apple Music
                </Button>
            </div>
        </div>
    );
}

export default OnBoarding;