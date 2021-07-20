import { useEffect, useState } from "react";
import "./HelpModal.css";

const HelpModal = () => {
  const [needHelp, setNeedHelp] = useState("unclicked");

  useEffect(() => {
    const openButton = document.querySelector(".open-btn");
    const popup = document.querySelector(".popup");
    const mainPopup = document.querySelector(".main-popup");
    const overlay = document.querySelector(".popup-overlay");

    const slideIn = () => {
      popup.style.opacity = 1;
      popup.style.display = "flex";
      mainPopup.style.cssText =
        "animation: slide-in .5s ease; animation-fill-mode: forwards;";
      overlay.style.cssText =
        "animation: fade-in .5s ease; animation-fill-mode: forwards;";
    };

    const slideOut = () => {
      mainPopup.style.cssText =
        "animation: slide-out .5s ease; animation-fill-mode: forwards;";
      overlay.style.cssText =
        "animation: fade-out .5s ease; animation-fill-mode: forwards;";
      setTimeout(() => {
        popup.style.display = "none";
        setNeedHelp("unclicked");
      }, 500);
    };

    openButton.addEventListener("click", slideIn);

    overlay.addEventListener("click", slideOut);

    return () => {
      openButton.removeEventListener("click", slideIn);
      overlay.removeEventListener("click", slideOut);
    };
  });

  const getHelp = () => {
    setNeedHelp(true);
  };

  const noHelp = () => {
    setNeedHelp(false);
  };

  if (needHelp === "unclicked") {
    return (
      <div>
        <button type="button" className="open-btn">
          I want help
        </button>
        <div className="popup">
          <div className="popup-overlay"></div>
          <div className="main-popup">
            <div className="popup-content">
              <p>Would you like to talk to someone?</p>
              <button type="button" className="yes-no-btn" onClick={getHelp}>
                Yes
              </button>
              <button type="button" className="yes-no-btn" onClick={noHelp}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (needHelp) {
    return (
      <div>
        <button type="button" className="open-btn">
          I want help
        </button>
        <div className="popup">
          <div className="popup-overlay"></div>
          <div className="main-popup">
            <div className="popup-content">
              <p>Would you like to talk to someone?</p>
              <button type="button" className="yes-no-btn active">
                Yes
              </button>
              <p className="notified">
                We have notified XYZ. They will reach out to you imminently.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!needHelp) {
    return (
      <div>
        <button type="button" className="open-btn">
          I want help
        </button>
        <div className="popup">
          <div className="popup-overlay"></div>
          <div className="main-popup">
            <div className="popup-content">
              <p>Would you like to talk to someone?</p>
              <button
                type="button"
                className="yes-no-btn active"
                onClick={getHelp}>
                No
              </button>
              <p className="feeling">How are you feeling?</p>
              <button type="button" className="feeling-btn">
                How are you feeling?
              </button>
              <br></br>
              <button type="button" className="feeling-btn breath-btn">
                Take a deep breath
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HelpModal;
