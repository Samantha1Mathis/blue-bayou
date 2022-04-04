import React from "react";
import Container from "react-bootstrap/Container";
import "../index.css";
import {NavbarCustom} from "../components/navbar.js";

export default function Info() {
  return (
    <>
    <NavbarCustom />
      <Container>
        <h2>Meal Pricing</h2>
        <a href="#/menu">Lunch Menu </a> - $$$ ($35 to $59.99 per adult)
        <br />
        <a href="#/menu">Dinner Menu</a> - $$$ ($35 to $59.99 per adult)

      <hr />
      
        <h1>Dine Down on the Bayou</h1>
        <div className="dine-down-info-page">
          <p>Step into perpertual twilight as the nighttime ambiance of the watery setting
            <br />surrounds you. Spot Guests embarking on a Pirates of the Caribbean adventure,
            <br /> as you enjoy an authentic New Orleans-inspired lunch or dinner. It's a truly
            <br /> unique setting where the bayou is, literally, by you!
          </p>
        </div>

        <h1>A New Orleans Square Classic</h1>
        <div className="new-orleans-info-page">
          <p>Blue Bayou has been a must-visit destination for many Disneyland Resort Guests
            <br />since its opening in 1967. Its mystical setting takes you into the heart of the
            <br /> South—overhead strings of colorful balloon lanterns cast an enchanting glow,
            <br /> dotting the darkness while crickets chirp, frogs croak and fireflies wink in the
            <br /> dark.
          </p>
        </div>

        <h1>Big Tastes from the Big Easy</h1>
        <div className="big-tastes-info-page">
          <p> Kick off your memorable meal with Southern-inspired starters. Next, choose
            <br /> from a selection of authentic entrées—including signature dishes such as
            <br /> Jambalaya and Plant-based Cajun Cauliflower.
            <br />
            <br /> Favorite dishes include a surf & turf combo of split lobster tail and petite filet
            <br /> mignon with all the fixin’s… and don’t forget the nonalcoholic mint juleps.
            <br />
            <br /> New additions to the restaurant’s menu include a New Orleans-inspired
            <br /> signature Hurricane cocktail, along with select wines and beers. And Guests
            <br /> commemorating a special occasion may enhance their experience with a
            <br /> Celebration Finale complete with sparkling wine and a unique shareable dessert.
            <br /> Kids can also take part in the Bayou spirit by creating their own meals, including
            <br /> delicious entrees and sides that cater to every taste.
            <br />
            <br /> Be sure to save some room for dessert—and don’t miss the best crème brûlée in
            <br /> New Orleans Square!
          </p>
        </div>
      </Container>

      <hr />

      <Container>
        <div className="bottom-left-info-page">
          <div>
            <h6>Reservations</h6>
            <p>Advance reservations are highly recommended and can be made
              <br /> on this page or with the Disneyland app up to 60 days prior to
              <br /> your visit. Same-day reservations can be made on a limited basis
              <br /> and are subject to availability.
            </p>
          </div>

          <div>
            <h6>Cancellation Policy</h6>
            <p> You must cancel at least one day prior to your reservation to avoid
              <br /> a per person cancellation fee. If you fail to cancel timely and are a
              <br /> no show, the credit card provided at the time of reservation will be
              <br /> charged $10 per person.
              <br />
              <br /> Cancellations and modifications to reservations can be made by
              <br /> visiting My Dining and Activity Reservations or via the Disneyland
              <br /> mobile app by tapping My Plans.
            </p>
          </div>

          <div>
            <h6>Check in for Dining Reservations</h6>
            <p> Maximize your time—and minimize your contact with others—by
              <br /> checking in for dining reservations at select table-service
              <br /> restaurants via the app.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="bottom-right-info-page">
          <div>
            <h6>Join a Mobile Dine Walk-Up List</h6>
            <p> Don’t have a dining reservation? You now have the opportunity to
              <br /> add your party to the mobile walk-up list at select table-service
              <br /> restaurants (subject to availability).
            </p>
          </div>

          <div>
            <h6>Menu Subject to Change</h6>
            <p> All menu items are subject to change without notice. If applicable,
              <br /> 18% auto gratuity will be automatically added for parties of 8 or
              <br /> more.
            </p>
          </div>

          <div>
            <h6>Valid Park Admission Required</h6>
            <p>Separate, valid theme park admission is required.</p>
          </div>

          <div>
            <h6>Alcoholic Beverages</h6>
            <p> Guests must be age 21 or older to purchase or consume alcoholic
              <br /> beverages. Limit 2 alcoholic beverages per Guest per transaction.
              <br /> A valid form of government identification will be required to verify
              <br /> your age.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
