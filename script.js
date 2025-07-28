// Dropdown menu functionality
var dropdownMenu = document.getElementById("dropdown");
var dropdownButton = document.getElementById("dropdown-menu");

dropdownButton.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("invisible")) {
    dropdownMenu.classList.remove(
      "invisible",
      "opacity-0",
      "rotate-x-90",
      "-top-10"
    );
    dropdownMenu.classList.add(
      "visible",
      "opacity-100",
      "rotate-x-0",
      "top-14"
    );
  } else {
    dropdownMenu.classList.remove(
      "visible",
      "opacity-100",
      "rotate-x-0",
      "top-14"
    );
    dropdownMenu.classList.add(
      "invisible",
      "opacity-0",
      "rotate-x-90",
      "-top-10"
    );
  }
});

// Close dropdown when clicking outside

document.addEventListener("click", (ev) => {
  if (
    !dropdownMenu.contains(ev.target) &&
    !dropdownButton.contains(ev.target)
  ) {
    dropdownMenu.classList.remove(
      "visible",
      "opacity-100",
      "rotate-x-0",
      "top-14"
    );
    dropdownMenu.classList.add(
      "invisible",
      "opacity-0",
      "rotate-x-90",
      "-top-10"
    );
  }
});

// document.addEventListener("click", function (e) {
//   if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
//     dropdownMenu.classList.add(
//       "opacity-0",
//       "invisible",
//       "-top-10",
//       "rotate-x-90"
//     );
//     dropdownMenu.classList.remove(
//       "opacity-100",
//       "visible",
//       "top-14",
//       "rotate-x-0"
//     );
//   }
// });
