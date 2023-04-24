// Add the event on clicking of button & keeping the btn click count
function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function abc() {
    count++;
    console.log("btn click count : ", count);
  });
}

attachEventListener();

// Garbage collection & removeEventListeners
