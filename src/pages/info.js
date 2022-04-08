import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/pages/info.css";
import { NavbarCustom } from "../components/navbar.js";

export default function Info() {
  return (
    <>
      <NavbarCustom />
      <div className="info-page">
        <Container>
          <div style={{ fontFamily: "black pearl", fontSize: "25px", backgroundColor:"white", opacity:"0.9" }}>
            <h2 className="info-headers">Hours</h2>
            <p style={{ fontSize: "25px" }}>Lunch: 11am - 3:55pm</p>
            <p style={{ fontSize: "25px" }}>Dinner: 4pm - 10pm</p>
          </div>

          <hr style={{height: "2px"}} />

          <div style={{ fontFamily: "black pearl", fontSize: "25px", backgroundColor:"white", opacity:"0.9"  }}>
            <h2 className="info-headers">Meal Pricing</h2>
            <a href="#/menu">Lunch Menu </a> - $$$ ($35 to $59.99 per adult)
            <br />
            <a href="#/menu">Dinner Menu</a> - $$$ ($35 to $59.99 per adult)
          </div>

          <hr style={{height: "2px"}} />

          <h1 className="info-headers">Dine Down on the Bayou</h1>
          <div className="dine-down-info-page">
            <div className="dine-paragraph">
              <p >Step into perpertual twilight as the nighttime ambiance of the watery setting
                surrounds you. Spot Guests embarking on a Pirates of the Caribbean adventure,
                as you enjoy an authentic New Orleans-inspired lunch or dinner. It's a truly
                unique setting where the bayou is, literally, by you!
              </p>
            </div>
          </div>

          <h1 className="info-headers">A New Orleans Square Classic</h1>
          <div className="new-orleans-info-page">
            <div className="orleans-paragraph">
              <p>Blue Bayou has been a must-visit destination for many Disneyland Resort Guests
                since its opening in 1967. Its mystical setting takes you into the heart of the
                South—overhead strings of colorful balloon lanterns cast an enchanting glow,
                dotting the darkness while crickets chirp, frogs croak and fireflies wink in the
                dark.
              </p>
            </div>
          </div>

          <h1 className="info-headers">Big Tastes from the Big Easy</h1>
          <div className="big-tastes-info-page">
            <div className="tastes-paragraph">
              <p> Kick off your memorable meal with Southern-inspired starters. Next, choose
                from a selection of authentic entrées—including signature dishes such as
                Jambalaya and Plant-based Cajun Cauliflower.
                <br />
                Favorite dishes include a surf & turf combo of split lobster tail and petite filet
                mignon with all the fixin’s… and don’t forget the nonalcoholic mint juleps.
                <br />
                New additions to the restaurant’s menu include a New Orleans-inspired
                signature Hurricane cocktail, along with select wines and beers. And Guests
                commemorating a special occasion may enhance their experience with a
                Celebration Finale complete with sparkling wine and a unique shareable dessert.
                Kids can also take part in the Bayou spirit by creating their own meals, including
                delicious entrees and sides that cater to every taste.
                <br />
                Be sure to save some room for dessert—and don’t miss the best crème brûlée in
                New Orleans Square!
              </p>
            </div>
          </div>
        </Container>

        <hr style={{height: "2px"}} />

        <Container>
          <div className="bottom-left-info-page">
            <div>
              <h5 className="info-headers">Reservations</h5>
              <p>Advance reservations are highly recommended and can be made
                on this page or with the Disneyland app up to 60 days prior to
                your visit. Same-day reservations can be made on a limited basis
                and are subject to availability.
              </p>
            </div>

            <div>
              <h5 className="info-headers">Cancellation Policy</h5>
              <p> You must cancel at least one day prior to your reservation to avoid
                a per person cancellation fee. If you fail to cancel timely and are a
                no show, the credit card provided at the time of reservation will be
                charged $10 per person.
                <br />
                Cancellations and modifications to reservations can be made by
                visiting My Dining and Activity Reservations or via the Disneyland
                mobile app by tapping My Plans.
              </p>
            </div>

            <div>
              <h5 className="info-headers">Check in for Dining Reservations</h5>
              <p> Maximize your time—and minimize your contact with others—by
                checking in for dining reservations at select table-service
                restaurants via the app.
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <div className="bottom-right-info-page">
            <div>
              <h5 className="info-headers">Join a Mobile Dine Walk-Up List</h5>
              <p> Don’t have a dining reservation? You now have the opportunity to
                add your party to the mobile walk-up list at select table-service
                restaurants (subject to availability).
              </p>
            </div>

            <div>
              <h5 className="info-headers">Menu Subject to Change</h5>
              <p> All menu items are subject to change without notice. If applicable,
                18% auto gratuity will be automatically added for parties of 8 or
                more.
              </p>
            </div>

            <div>
              <h5 className="info-headers">Valid Park Admission Required</h5>
              <p>Separate, valid theme park admission is required.</p>
            </div>

            <div>
              <h5 className="info-headers">Alcoholic Beverages</h5>
              <p> Guests must be age 21 or older to purchase or consume alcoholic
                beverages. Limit 2 alcoholic beverages per Guest per transaction.
                A valid form of government identification will be required to verify
                your age.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
