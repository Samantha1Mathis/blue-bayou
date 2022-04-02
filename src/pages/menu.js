import React from "react";
import { Card } from "react-bootstrap";
import { Menu } from "../components/menu";

export default function MenuPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        marginTop: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "60%", padding: "10px" }}>
        <Menu />
      </Card>
    </div>
  );
}
