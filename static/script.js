// document.getElementById("myForm").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const imageUrl = document.getElementById("url").value;
//   const heading = document.getElementById("heading").value;
//   const category = document.getElementById("category").value;
//   const article = document.getElementById("article").value;

//   const outputDiv = document.getElementById("output");
//   outputDiv.innerHTML = `
//       <img src="${imageUrl}" alt="" />
//       <div class="content">
//         <div class="heading">${heading}</div>
//         <div class="category">${category}</div>
//         <div class="article">${article}</div>
//       </div>
//     `;
// });
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const imageUrl = document.getElementById("url").value;
  const heading = document.getElementById("heading").value;
  const category = document.getElementById("category").value;
  const article = document.getElementById("article").value;

  // Create a new container for each input submission
  const newContainer = document.createElement("div");
  newContainer.classList.add("container");

  // Set the inner HTML for the new container
  newContainer.innerHTML = `
          <img src="${imageUrl}" alt="" />
          <div class="content">
            <div class="heading">${heading}</div>
            <div class="category">${category}</div>
            <div class="article">${article}</div>
          </div>
        `;

  // Append the new container to the output area
  const outputDiv = document.getElementById("output");
  outputDiv.appendChild(newContainer);

  // Clear the form fields after submission
  document.getElementById("url").value = "";
  document.getElementById("heading").value = "";
  document.getElementById("article").value = "";
});
