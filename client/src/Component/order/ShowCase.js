import React from "react";

function ShowCase(){
    return(
        <>
            <div className="mobile-showcase">
                <div className="icon-list">
                    {/* <div className="icons-line-1">
                        <img src="./icons/micromax.png" alt="micromax-mobile"/>
                        <img src="./icons/vivo.png" alt="vivo-logo"/>
                        <img src="./icons/samsung.png" alt="samsumg-logo"/>
                        <img src="./icons/oppo.png" alt="oppo-logo"/>
                    </div>
                    <div className="icons-line-2">
                        <img src="./icons/apple.png" alt="apple-logo"/>
                        <img src="./icons/mi.png" alt="mi-logo"/>
                        <img src="./icons/motorola.png" alt="motorola-logo"/>
                    </div> */}
                    <img src="./icons/micromax.png" alt="micromax-mobile" className="rect-logo"/>
                    <img src="./icons/vivo.png" alt="vivo-logo" className="rect-logo"/>
                    <img src="./icons/apple.png" alt="apple-logo" className="circle-logo"/>
                    <img src="./icons/samsung.png" alt="samsumg-logo" className="rect-logo"/>
                    <img src="./icons/mi.png" alt="mi-logo" className="circle-logo"/>
                    <img src="./icons/oppo.png" alt="oppo-logo" className="rect-logo"/>
                    <img src="./icons/motorola.png" alt="motorola-logo" className="circle-logo"/>
                </div>
            </div>
        </>
    )
}
export default ShowCase;