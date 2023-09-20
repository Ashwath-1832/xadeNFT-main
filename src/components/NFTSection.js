import "../styles/better.css";
import NftCarousel from "./NftCarousel";

import React, { useState, useEffect, useRef } from "react";
const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
          observer.unobserve(imageRef.current);
        }
      },
      { threshold: 0.5 } // Trigger the observer when the image is 50% in view
    );
    observer.observe(imageRef.current);
  }, []);
  return (
    <div>
      <div
        className="lol nftParent"
        style={{
          backgroundColor: "#0F0F10",
          minHeight: "56rem",
          marginBottom: "4%",
        }}
      >
        <div
          className={`image-container1`}
          ref={imageRef}
          style={{ paddingTop: "120px" }}
        >
          <img src="/Media/exploreBGleft.png" className="exploreBg1" />
          <div>
            <img
              className="ellipseExplore nftParent"
              src="/Media/Ellipse.png"
              alt="image"
            />
          </div>
          <img src="/Media/exlporeBGright.png" className="exploreBg2" />
          <img
            className={`image ${isExpanded ? "expanded" : ""}`}
            src={process.env.PUBLIC_URL + "/Media/NFT3image.png"}
            draggable="false"
            alt="Image"
          />
        </div>
        <div className="header explorerHeading">
          <img src="/Media/EXPLORERS.svg" className="explorerstxt" />
        </div>
        <br />
        <div
          className="topText"
          style={{ fontSize: "1.4rem", marginBottom: "2rem" }}
        >
          <span>
            Xade Explorers are a DeFi utility collection which have a max supply
            of 1000 and allows you to unleash the full potential of the future
            of finance.{" "}
          </span>
        </div>
        <br></br>
        <div className="NFTbuttonDiv">
          <button
            className="NFTbutton"
            onClick={(e) => {
              console.log("button click");
              e.preventDefault();
              window.open("https://explorers.xade.finance/", "_blank");
            }}
          >
            Learn More
          </button>
        </div>
        <br />
      </div>
      <br />
      <NftCarousel />
      <br />
      <br />
      <br />
      <div className="boxfather">
        <div className="betterbox betterbox7">
          <div className="headerImg">
            <img src={process.env.PUBLIC_URL + "/Media/xadecoin1.png"} />
          </div>
          <br />
          <br />
          <div className="circle"></div>
          <div className="mainText">
            <h3>Earn Xade Coins </h3>
            Earn Upto 2x Xade Coin rewards on every transaction you do on the
            Xade Platform <br />
            <br />
          </div>
        </div>

        <div className="betterbox betterbox7">
          <div className="headerImg">
            <img src={process.env.PUBLIC_URL + "/Media/clabot2.png"} />
          </div>
          <br />
          <br />
          <h3 style={{ width: "100%" }}>Run Liquidation Bots</h3>
          <div className="mainText">
            Exclusive Access to run liquidation bots for DeriveX : The
            Derivatives Exchange powering Xade
          </div>
        </div>

        <div className="betterbox betterbox7">
          <div className="headerImg">
            <img src={process.env.PUBLIC_URL + "/Media/discount2.png"} />
          </div>
          <br />
          <br />
          <h3 style={{ width: "100%" }}>Reduced Fees</h3>
          <div className="mainText">
            Get upto 5% reduced fees on the Xade Platform{" "}
          </div>
        </div>

        <div className="betterbox betterbox7">
          <div className="headerImg">
            <img src={process.env.PUBLIC_URL + "/Media/ud.png"} />
          </div>
          <br />
          <br />
          <div className="circle"></div>
          <h3 style={{ width: "100%" }}>Exclusive Events </h3>
          <div className="mainText">
            Exclusive VIP Access to Xade Unleashed Events Globally <br />
            <br />
          </div>
        </div>

        <div className="betterbox betterbox7">
          <div className="headerImg">
            <img src={process.env.PUBLIC_URL + "/Media/listj.png"} />
          </div>
          <br />
          <br />
          <h3 style={{ width: "100%" }}>Premier Access</h3>
          <div className="mainText">
            Get access to private and pre sales of Xade NFTs and Tokens
          </div>
        </div>

        <div className="betterbox betterbox7">
          <div className="headerImg">
            <img src={process.env.PUBLIC_URL + "/Media/discord.png"} />
          </div>
          <br />
          <br />
          <h3 style={{ width: "100%" }}>Community Roles</h3>
          <div className="mainText">
            Get exclusive community roles, follow backs, exclusive beta access
            and other community perks
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
