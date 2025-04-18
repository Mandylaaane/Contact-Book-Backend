import React from "react";

export default function Contact({ firstName, lastName, phone, address }) {
  return (
    <>
      <div id="contact-items">
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{phone}</div>
        <div>{address}</div>
      </div>
    </>
  );
}
