import "./index.scss";
import React from "react";
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="figure">
          <span>Chú rể</span>
          <img
            alt="chú rể"
            src="/images/info/nha-trai.png" />
          <div className="btn-link">
            <a href="https://www.facebook.com/xuanduong.hsht?mibextid=ZbWKwL" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/facebook.png"
              />
            </a>
            <a href="tel:0917804664" target="_blank" rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
              />
            </a>
          </div>
        </div>
        <img
          alt="loved"
          src="https://img.icons8.com/color/48/000000/filled-like.png"
        />
        <div className="figure">
          <span>Cô dâu</span>
          <img 
            alt="cô dâu"
            src="/images/info/nha-gai.png" />
          <div className="btn-link">
            <a href="https://www.facebook.com/hien.ngo.100046?mibextid=ZbWKwL" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/facebook.png"
              />
            </a>{" "}
            <a href="tel:0886531183" target="_blank" rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Contact);
