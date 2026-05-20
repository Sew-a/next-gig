// import Cookies from "js-cookie";

// Session storage 5MB, deleted when tab closed, XSS risk

sessionStorage.setItem("sessionId", "712472904048");

if (sessionStorage.getItem("712472904048")) {
  console.log("Session ID:", sessionStorage.getItem("712472904048"));
}

// Cookies 4KB, expires after specified time, can be HttpOnly and Secure, XSS and CSRF risk

// Cookies.set("userToken", "tok-32984293", {
//   expires: 7,
//   secure: true,
//   sameSite: "Strict",
// });
