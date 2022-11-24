import React, { useEffect, useState } from 'react'


const GoogleAd = ({ timeout }) => {

    const [googleInit, setGoogleInit] = useState(null)

    useEffect(() => {

        setGoogleInit(setTimeout(() => {
            if (typeof window !== 'undefined')
                (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, timeout))

        return () => {
            if (googleInit) clearTimeout(googleInit)
        }
    }, [])


    return (
        <div className={classNames}>
        <ins
          className="adsbygoogle"
          style={style || { display: 'block', textAlign: "center" }}
          data-ad-client={googleAdId}
          data-ad-slot={slot}
          data-ad-format={format || "auto"}
          data-full-width-responsive="true"
        ></ins>
      </div>
    )
}

export default GoogleAd
