// Import necessary dependencies
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
  Carousel,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import "./App.css"; // Import custom CSS
import NavigationMenu from "./navbar.js"; // Import navigation menu
import Socials from "./socials.js"; // Import social widgets

// Create React component for the homepage
const HomePage = () => {
  return (
    <div className="body">
      {/* Header */}
      <Container className="top-video">
        <video
          className="background-video"
          src="https://www.maisonmirabeau.com/main/wp-content/uploads/2023/04/maison-mirabeau-header-2023.mp4"
          autoPlay
          loop
          muted
        />
        <img
          className="overlay-image"
          src="https://www.maisonmirabeau.com/main/wp-content/uploads/2023/09/b-corp-logo-en.svg"
          alt="Overlay Image"
        />
      </Container>
      <Container>
        {/* Navigation bar */}
        <div className="navbar">
          <NavigationMenu />
        </div>
      </Container>
      <Container className="subsection-1">
        <h1>Our Riviera Icons</h1>
        <p class="riviera">
          All over the world, people have fallen head over heels for these
          gorgeous pale pink wines. Delicate and divine, elegant and
          uncomplicated…they're the good life in a glass. And of course, they
          taste delicious. We also hope you'll love our new herbaceous-style dry
          pale pink Gin. Santé!
        </p>
        <div className="grid-container-1">
          <div className="grid-item">
            <img
              src="https://www.maisonmirabeau.com/main/wp-content/uploads/2022/03/mirabeau-gin-70cl-to-scale-2022.jpg"
              width="200px"
            ></img>
            <h3>Mirabeau Dry Rosé</h3>
            <p>
              A beautiful herbaceous dry rosé coloured gin, with floral elements
              and a burst of aromatic citrus.
            </p>
          </div>
          <div className="grid-item">
            <img
              src="https://www.maisonmirabeau.com/main/wp-content/uploads/2019/02/mirabeau-pure-rose-2022-wine-to-scale.jpg"
              width="200px"
            ></img>
            <h3>Mirabeau Pure Provence Rosé</h3>
            <p>
              Our iconic Pure is a superbly crafted and seductive Rosé for a
              myriad of occasions.
            </p>
          </div>
        </div>
        <button>
          <a href="https://www.maisonmirabeau.com/our-range/">
            DISCOVER FULL RANGE
          </a>
        </button>
      </Container>
      <Container className="subsection-2">
        <div className="grid-container-2">
          <div className="grid-item-2">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/926/original/Mirabeau-Cronk-Family-Cotignac_%281%29.jpg?1716128067"
              width="500px"
            ></img>
          </div>
          <div className="grid-item-2">
            <h1>About Mirabeau</h1>
            <p>
              Sometimes the best wines come with the best stories. Stories of
              love, adventure and a serious passion for rosé. Meet Jeany and
              Stephen Cronk, the founders of Mirabeau.
            </p>
            <button>
              <a href="https://www.maisonmirabeau.com/about/">DISCOVER</a>
            </button>
          </div>
          <div className="grid-item-2">
            <h1>Domaine Mirabeau</h1>
            <p>
              Domaine Mirabeau is the beautifully located flagship estate, which
              includes 14 hectares of AOP Côtes de Provence vineyards and two
              uniquely situated rental properties.
            </p>
            <button>
              <a href="https://www.maisonmirabeau.com/about/domaine-mirabeau/">
                DISCOVER
              </a>
            </button>
          </div>
          <div className="grid-item-2">
            <img
              src="https://www.maisonmirabeau.com/main/wp-content/uploads/2021/07/Domaine-Mirabeau-La-Reserve-Stephen-Jeany-Cronk.jpg"
              width="500px"
            ></img>
          </div>
        </div>
      </Container>
      <Container className="subsection-3">
        <h1>Journal</h1>
        <p>
          Want to know more about life in the South of France? Then, come away
          with us! Our journal is the perfect place for a virtual holiday. Pour
          yourself a glass of our luscious rosé, relax and explore the wonders
          of Provence from afar.
        </p>
        <div className="grid-container-3">
          <div className="grid-3-item">
            <a href="https://www.maisonmirabeau.com/love-provence/maison-gannacs-citron-de-menton/">
              <figure>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/928/original/Mirabeau-Lemon-Menton-19-2-1365x2048_%281%29.jpg?1716129327"
                  width="350px"
                />
                <figcaption>Maison Gannac's Citron de Menton</figcaption>
              </figure>
            </a>
          </div>

          <div className="grid-3-item">
            <a href="https://www.maisonmirabeau.com/recipes/smoked-salmon-canapes-paired-pure-rose/">
              <figure>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/929/original/Maison-Mirabeau-Christmas-Recipe-Smoked-salmon_%281%29.jpg?1716130144"
                  width="350px"
                />
                <figcaption>
                  Verity Walcott: Cheese Sablé Smoked Salmon Canapés
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="grid-3-item">
            <a href="https://www.maisonmirabeau.com/recipes/spring-salad/">
              <figure>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/930/original/Maison_Mirabeau_easy_spring_salad_a_la_minute_%281%29.jpg?1716130315"
                  width="350px"
                />
                <figcaption>Spring Salad À la Minute</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </Container>
      <Container className="instagram">
        <h1>Maison Mirabeau on Instagram</h1>
        <a href="https://www.instagram.com/maisonmirabeau/">
          <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/932/original/Screenshot_2024-05-19_at_17.20.28.png?1716135640"></img>
        </a>
      </Container>
      <Container className="awards">
        <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/933/original/Screenshot_2024-05-19_at_17.24.54.png?1716135915"></img>
      </Container>
      <Container className="section-newsletter">
        <div className="logos">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/912/original/mirabeau-logo.png?1716116679"
            width="120px"
          ></img>
          <img
            src="https://www.maisonmirabeau.com/main/wp-content/uploads/2023/09/b-corp-logo-en.svg"
            width="20px"
            className="b-corp"
          ></img>
        </div>
        <div>
          <Form>
            <Form.Label>Subscribe & share your moments</Form.Label>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  border: "0px solid #ddd",
                }}
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: "#dcc1b9",
                  border: "none",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
        <div>
          {/* Add social widgets */}
          <Socials />
        </div>
      </Container>

      {/* Footer */}
      <footer className="footer">
        <div className="grid-container-footer">
          <div className="grid-item-footer">
            Copyright © 2024 Maison Mirabeau
          </div>
          <div className="grid-item-footer">
            <a href="https://www.maisonmirabeau.com/where-to-buy/">
              Where to buy
            </a>{" "}
            /
            <a href="https://www.maisonmirabeau.com/press-media/">
              Press & Media
            </a>
            /{" "}
            <a href="https://www.maisonmirabeau.com/distributors/">
              Distributors
            </a>{" "}
            / <a href="https://www.maisonmirabeau.com/partners/">Partners</a> /{" "}
            <a href="https://www.maisonmirabeau.com/terms/">Terms</a> /{" "}
            <a href="https://www.maisonmirabeau.com/privacy/">Privacy</a> /{" "}
            <a href="https://www.maisonmirabeau.com/contact/">Contact us</a>
          </div>
          <div className="grid-item-footer">
            Original site:{" "}
            <a href="https://www.maisonmirabeau.com/">
              https://www.maisonmirabeau.com/
            </a>
          </div>
          <div className="grid-item-footer">
            <a href="https://www.maisonmirabeau.com/en/">English</a> /{" "}
            <a href="https://www.maisonmirabeau.com/fr/">Français</a> /{" "}
            <a href="https://www.maisonmirabeau.com/de/">Deutsch</a> /{" "}
            <a href="https://www.maisonmirabeau.com/jp/">日本語 (Japanese)</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
