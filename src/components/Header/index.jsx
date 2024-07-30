import React from "react";

import { ASSETS } from "../../img";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const Header = () => {
  return (
    <header className="main-header" id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src={ASSETS.LOGO} alt="Logo" />
              <h4 className="ms-4 fw-bold">$NGG</h4>
              <img
                className="d-lg-none d-block"
                src={ASSETS.MIN_LOGO}
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="navbar-collapse">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-xl-4 mx-2">
                    <a className="nav-link" href="#about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mx-xl-4 mx-2">
                    <a className="nav-link" href="#presale">
                      Presale
                    </a>
                  </li>
                  <li className="nav-item mx-xl-4 mx-2">
                    <a className="nav-link" href="#roadmap">
                      Roadmap
                    </a>
                  </li>
                  <li className="nav-item mx-xl-4 mx-2">
                    <a className="nav-link" href="#connect">
                      Connect
                    </a>
                  </li>
                </ul>
                <div className="header-btn">
                  <div className="btn btn-primary btn_line">
                    <WalletMultiButton
                      style={{
                        backgroundColor: "transparent",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
