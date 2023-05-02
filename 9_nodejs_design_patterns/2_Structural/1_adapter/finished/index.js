var localStorage = require("./localStorage");

async function main() {
  console.log("localStorage length: ", localStorage.length);

  var uid = localStorage.getItem("user_id");

  console.log("user_id: ", uid);

  if (!uid) {
    console.log("User ID not found. Setting the user id and token...");
    await localStorage.setItem(
      "token",
      "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
    );
    await localStorage.setItem("user_id", "12345");
  } else {
    console.log("User ID found.", uid);
    console.log("clearning the User ID...");
    localStorage.clear();
  }
}

main();
