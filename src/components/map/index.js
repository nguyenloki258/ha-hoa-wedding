/* eslint-disable jsx-a11y/anchor-is-valid */

import "./index.scss";

import React from "react";

const FIXED_POINT = [
  {
    id: 1,
    name: "Nhà trai",
    location: "Ngăm Mạc - Lãng Ngân - Gia Bình - Bắc Ninh",
    latitude: 21.084196724138703,
    longitude: 106.1506524026496,
    code: "1",
    src: "images/points/point.png",
  },
  {
    id: 2,
    name: "Nhà gái",
    location: "Phú Dư - Quỳnh Phú - Gia Bình - Bắc Ninh",
    latitude: 21.020676107691397,
    longitude: 106.18309639909634,
    code: "2",
    src: "images/points/point.png",
  },
];

const Map = () => {
  const mapEmbed = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29788.048701359883!2d106.13932275309676!3d21.052439804208852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x31359f0acfed4771%3A0x70ce8ccd4e961f99!2zUGjDuiBExrAsIFF14buzbmggUGjDuiwgTMawxqFuZyBUw6BpLCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFt!3m2!1d21.0203781!2d106.1830901!4m5!1s0x31350ab1de99e583%3A0xbdc8ff83f67bf71e!2zTmfEg20gTeG6oWMsIFRwLiBC4bqvYyBOaW5oLCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFt!3m2!1d21.0842994!2d106.1507424!5e0!3m2!1svi!2s!4v1678113421731!5m2!1svi!2s" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  return (
    <div>
      <div className="map-box">
        <div dangerouslySetInnerHTML={{ __html: mapEmbed }}></div>
        <div>
          {FIXED_POINT.map((point, index) => (
            <p key={index}>
              <div className="point-box">
                <div className="marker-circle">
                  <img src={point.src} alt={point.code} /> &nbsp;
                  <a
                    href={`http://maps.google.com/maps?daddr=${point.latitude},${point.longitude}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {point.name}
                  </a>{" "}
                  :<span>{point.location}</span>
                  <br />
                </div>
              </div>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default React.memo(Map);
