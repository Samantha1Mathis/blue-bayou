import React from "react";
import { NavbarCustom } from "../components/navbar.js";
import { useNavigate } from "react-router-dom";
import { extractQueryParam } from "../utils/window";
import "../styles/pages/complete.css";
import "../styles/pages/home.css";

export default function Complete() {
  let reservation = false;
  let order = false;
  let [firstMsg, setFirstMsg] = React.useState("");
  let [msg, setMsg] = React.useState("");

  React.useEffect(() => {
    let transactionType = extractQueryParam("type");

    if (transactionType === "reservation") {
      reservation = true;
      setFirstMsg("Reservation Complete");
      setMsg("We look forward to having you dine with us!");
    } else if (transactionType === "order") {
      order = true;
      setFirstMsg("Transaction Complete")
      setMsg("Thank you for your purchase! Have a magical day!");
    }
  }, []);

  return (
    <>
      < NavbarCustom />
      <div
        className="text-center"
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          className="home-page"
          style={{ height: "1000px", width: "5000px" }}
        >
          <div
            className="hours text-dark"
            style={{
              fontFamily: "blackPearl",
              textAlign: "center",
              position: "relative",
              marginTop: "15px",
              width: "auto",
              height: "900px",
            }}
          >
            <div className="first-msg">
              <p>{firstMsg}</p>
            </div>

            <div className="happy-msg">
              <h1>{msg}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}