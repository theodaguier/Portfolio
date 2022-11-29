import React, { useEffect } from "react";
import "./index.css";

const dockIcon = [
  {
    id: 1,
    name: "mail",
    img: "./icons/mail.png",
    url: 'mailto:theo.daguier@icloud.com"',
  },
  {
    id: 2,
    name: "messages",
    img: "./icons/message.png",
    url: "sms://+330656678583",
  },
  {
    id: 3,
    name: "linkedin",
    img: "./icons/linkedin.png",
    url: "https://www.linkedin.com/in/theo-daguier/",
  },
  {
    id: 4,
    name: "github",
    img: "./icons/github.png",
    url: "https://github.com/theodaguier",
  },
  {
    id: 5,
    name: "twitter",
    img: "./icons/twitter.png",
    url: "https://twitter.com/theodaguier",
  },
];

function Dock() {
  let icons = document.querySelectorAll(".icon");

  useEffect(() => {
    icons.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        focus(e.target, index);
      });
      item.addEventListener("mouseleave", (e) => {
        icons.forEach((item) => {
          item.style.transform = "scale(1)  translateY(0px)";
        });
      });
    });
    const focus = (elem, index) => {
      let previous = index - 1;
      let previous1 = index - 2;
      let next = index + 1;
      let next2 = index + 2;

      if (previous == -1) {
        console.log("first element");
        elem.style.transform = "scale(1.5)  translateY(-10px)";
      } else if (next == icons.length) {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
        console.log("last element");
      } else {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
        icons[previous].style.transform = "scale(1.2) translateY(-6px)";
        icons[previous1].style.transform = "scale(1.1)";
        icons[next].style.transform = "scale(1.2) translateY(-6px)";
        icons[next2].style.transform = "scale(1.1)";
      }
    };
  }, []);
  return (
    <div className="dock">
      <div className="dock-container">
        <div className="dock-c">
          {dockIcon.map((icon, index) => (
            <div className="icon-container" key={index}>
              <a href={icon.url} target="_blank">
                <div className="icon-image">
                  <img className="icon" src={icon.img} alt="icon" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dock;
