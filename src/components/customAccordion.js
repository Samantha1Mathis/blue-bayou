import React from "react";
import { useAccordionButton } from "react-bootstrap";

function CustomAccordion({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return <div onClick={decoratedOnClick}>{children}</div>;
}

export default CustomAccordion;
