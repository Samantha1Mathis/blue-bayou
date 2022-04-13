import "../styles/components/payment.css";
import Button from "react-bootstrap/Button";

export default function Payment(props) {
  let { onPayButtonClicked } = props;

  const cardRegex = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;
  const expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  const cvvRegex = /^[0-9]{3}/;
  const nameRegex = /^[a-zA-Z]{2,}\s[a-zA-Z]{1,}/;
  var isValid = false;

  const validate = () => {
    var ccNum = document.getElementById("cardNum").value;
    var expNum = document.getElementById("expNum").value;
    var cvvNum = document.getElementById("cvvNum").value;
    var name = document.getElementById("name").value;
    if (
      cardRegex.test(ccNum) &&
      expRegex.test(expNum) &&
      cvvRegex.test(cvvNum) &&
      nameRegex.test(name)
    ) {
      if (onPayButtonClicked) {
        onPayButtonClicked();
      }
      // const routeChange = () => (window.location.href = "/#/complete");
      // routeChange();
    } else {
      document.getElementById("error").innerText = "ERROR with input";
    }
  };

  return (
    <>
      <div className="payment-card mb-50">
        <div className="payment-scard-title mx-auto"> Payment </div>
        <p id="error"></p>
        <form>
          {" "}
          <div className="row row-1">
            <div className="col-2">
              <img
                className="img-fluid"
                alt="credit card logo"
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              />
            </div>
            <div className="col-7">
              {" "}
              <input
                className="payment-input"
                type="text"
                id="cardNum"
                placeholder="**** **** **** 3193"
              />{" "}
            </div>
          </div>
          <div className="row-1">
            <div className="row row-2">
              {" "}
              <span id="card-inner">Card holder name</span>{" "}
            </div>
            <div className="row row-2">
              {" "}
              <input
                className="payment-input"
                type="text"
                id="name"
                placeholder="Jack Sparrow"
              />{" "}
            </div>
          </div>
          <div className="row three">
            <div className="col-2">
              {" "}
              <input
                className="payment-input"
                type="text"
                id="expNum"
                placeholder="Exp. date (**/**)"
              />{" "}
            </div>
            <div className="col-2">
              {" "}
              <input
                className="payment-input"
                type="text"
                id="cvvNum"
                placeholder="CVV (***)"
              />{" "}
            </div>
          </div>{" "}
          <Button onClick={validate} variant="outline-primary">
            Pay
          </Button>{" "}
        </form>
      </div>
    </>
  );
}
