import { useEffect } from "react";

function App() {
  useEffect(() => {
    const openButton = document.querySelector(".open-btn");
    const popup = document.querySelector(".popup");
    const mainPopup = document.querySelector(".main-popup");
    const overlay = document.querySelector(".popup-overlay");

    openButton.addEventListener("click", () => {
      popup.style.opacity = 1;
      popup.style.display = "flex";
      mainPopup.style.cssText =
        "animation: slide-in .5s ease; animation-fill-mode: forwards;";
      overlay.style.cssText =
        "animation: fade-in .5s ease; animation-fill-mode: forwards;";
    });

    overlay.addEventListener("click", () => {
      mainPopup.style.cssText =
        "animation: slide-out .5s ease; animation-fill-mode: forwards;";
      overlay.style.cssText =
        "animation: fade-out .5s ease; animation-fill-mode: forwards;";
      setTimeout(() => {
        popup.style.display = "none";
      }, 500);
    });
  });

  return (
    <div className="container">
      <div className="btn">
        <button type="button" className="open-btn">
          I want help
        </button>
      </div>
      <div className="main-content">
        <h1>SOME CONTENT</h1>
      </div>
      <div className="popup">
        <div className="popup-overlay"></div>
        <div className="main-popup">
          <div className="popup-content">
            <p className="modal-p">Would you like to talk to someone?</p>
            <button type="button" className="yes-no-btn">
              Yes
            </button>
            <button type="button" className="yes-no-btn">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
