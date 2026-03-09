// import Cookies from "js-cookie";

// Local storage 5-10MB, untill deleted by user, XSS risk

localStorage.setItem("theme", "dark");

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

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
