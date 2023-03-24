import React, { useEffect, useState } from "react";

const useThirdPartyCookieCheck = () => {

    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        const frame = document.createElement("iframe");
        frame.id = "3pc";
        frame.src = "https://raw.githubusercontent.com/empleoseguro/empleos/main/thirdpartycookies.html"; //Add your hosted domain url here
        frame.style.display = "none";
        frame.style.position = "fixed";
        document.body.appendChild(frame);

        window.addEventListener(
            "message",
            function listen(event) {
                if (event.data === "3pcSupported" || event.data === "3pcUnsupported") {
                    setIsSupported(event.data === "3pcSupported");
                    document.body.removeChild(frame);
                    window.removeEventListener("message", listen);
                }
            },
            false
        );
    }, []);

    return isSupported;
};

export default useThirdPartyCookieCheck