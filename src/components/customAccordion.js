import React from "react";
import { useAccordionButton } from "react-bootstrap";

function CustomAccordion({ children, eventKey, ...props }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    props.onElementClicked();
  });

  return <div onClick={decoratedOnClick}>{children}</div>;
}

export default CustomAccordion;
