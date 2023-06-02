import React from "react";
import {Link, useNavigate } from "react-router-dom";
import RedeemImage from "../assets/redeem.svg";
import shirt from "../assets/shirt.png";
import coin from "../assets/coin.png";
import hat from '../assets/hat.jpg'
import phone from '../assets/phone cover.jpg'



export default function Redeem(props) {
  const navigate = useNavigate();
  const handleback=()=>{
    navigate("/")
  }
  return (
    <>
      <div className="w-screen h-3/4 bg-rp-black flex-col justify-center lg:px-24 px-8">
        <div className="totalcoins flex justify-end" style={{gap:"1rem"}}>
          <button
            className="flex justify-between align-middle mt-4 mb-2 rounded "
            style={{
              backgroundColor: "#f0ad4e",
              color: "white",
              padding: ".5rem 1rem .5rem",
            }}
          >
            <h6 style={{ alignSelf: "center", fontSize: "0.9rem" ,marginRight:".3rem"}}>{props.totalcoin}</h6>
            <img
              src={coin}
              alt=""
              width="15"
              height="15"
              style={{ alignSelf: "center" }}
            />
          </button>
          <button
            onClick={handleback}
            className="flex justify-between align-middle mt-4 mb-2 rounded "
            style={{
              backgroundColor: "#f0ad4e",
              color: "white",
              padding: ".5rem 1rem .5rem",
            }}
          >
            <h6 style={{ alignSelf: "center", fontSize: "0.9rem" ,marginRight:".3rem"}}>Go Back</h6>
          </button>
        </div>
        <div className="flex-col justify-center align-middle gap-4 mt-18  mr-auto ml-auto" style={{paddingBottom:"1rem"}}>
          <div className="img flex justify-center">
            <img src={RedeemImage} alt="" width="150" height="150" />
          </div>
          <div
            className="store text-center mt-8 "
            style={{ color: "white", fontSize: "2rem" }}
          >
            <h1>Hisab Karo Store</h1>
          </div>
          <div
            className="store text-center mt-8 mb-4"
            style={{ color: "white", fontSize: "1.2rem" }}
          >
            <h3>
              Shop in our store or redeem our products for free by using
              HisabCoins.
            </h3>
          </div>
        </div>
      </div>

      <div
        className="grid-container grid mt-8 ml-auto mb-10 mr-auto   gap-4 bg-slate-50"
        style={{ maxWidth: "950px", gap: "1.5rem" }}
      >
        <div
          class="bg-white rounded-lg flex-col justify-center align-middle p-4"
          style={{ border: "1px solid black" }}
        >
          <img src={shirt} alt="" width="250px" />
          <div className="price flex justify-between">
            <h3
              className="store text-center mt-4 mb-2"
              style={{ color: "black", fontSize: "1rem", fontWeight: "300" }}
            >
              Buy T-shirt for free
            </h3>

            <button
              className="flex justify-between align-middle mt-4 mb-2 rounded "
              style={{
                backgroundColor: "#f0ad4e",
                color: "white",
                padding: ".5rem 1rem .5rem",
              }}
            >
              <h6 style={{ alignSelf: "center", fontSize: "0.8rem" }}>70</h6>
              <img
                src={coin}
                alt=""
                width="15"
                height="15"
                style={{ alignSelf: "center" }}
              />
            </button>
          </div>
        </div>
        <div
          class="bg-white rounded-lg flex-col justify-center align-middle p-4"
          style={{ border: "1px solid black" }}
        >
          <img src={phone} alt="" width="350px" />
          <div className="price flex justify-between">
            <h3
              className="store text-center mt-4 mb-2"
              style={{ color: "black", fontSize: "1rem", fontWeight: "300" }}
            >
            
              Buy phone-cover <br/>
              for free

            </h3>

            <button
              className="flex justify-between align-middle mt-4 mb-2 rounded "
              style={{
                backgroundColor: "#f0ad4e",
                color: "white",
                padding: ".5rem 1rem .5rem",
              }}
            >
              <h6 style={{ alignSelf: "center", fontSize: "0.8rem" }}>150</h6>
              <img
                src={coin}
                alt=""
                width="15"
                height="15"
                style={{ alignSelf: "center" }}
              />
            </button>
          </div>
        </div>
        <div
          class="bg-white rounded-lg flex-col justify-center align-middle p-4"
          style={{ border: "1px solid black" }}
        >
          <img src={hat} alt="" width="250px" />
          <div className="price flex justify-between">
            <h3
              className="store text-center mt-4 mb-2"
              style={{ color: "black", fontSize: "1rem", fontWeight: "300" }}
            >
                Buy Hat for free
            </h3>

            <button
              className="flex justify-between align-middle mt-4 mb-2 rounded "
              style={{
                backgroundColor: "#f0ad4e",
                color: "white",
                padding: ".5rem 1rem .5rem",
              }}
            >
              <h6 style={{ alignSelf: "center", fontSize: "0.8rem" }}>100</h6>
              <img
                src={coin}
                alt=""
                width="15"
                height="15"
                style={{ alignSelf: "center" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
