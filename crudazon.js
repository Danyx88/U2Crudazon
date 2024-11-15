const getAppointments = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/")
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })
    .then((obj) => console.log(obj));
};

window.addEventListener("DOMContentLoaded", function () {
  getAppointments();
});

document.getElementById("sendPost").addEventListener("click", function () {
  const productData = {
    name: document.getElementById("nameProduct").value,
    brand: document.getElementById("Brand").value,
    description: document.getElementById("Description").value,
    imageUrl: document.getElementById("ImageUrl").value,
    price: document.getElementById("Price").value,
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log("Prodotto creato con successo: ", data);
      document.getElementById("productForm").reset();
    })
    .catch((error) => {
      console.error("Errore nella creazione dell'oggetto, rirpova", error);
    });
});

// document.getElementById("sendPost").addEventListener("click", function () {
//   const productData = {
//     name: document.getElementById("nameProduct").value,
//     brand: document.getElementById("Brand").value,
//     description: document.getElementById("Description").value,
//     imageUrl: document.getElementById("ImageUrl").value,
//     price: document.getElementById("Price").value.replace("$", ""),
//   };

//   fetch("https://striveschool-api.herokuapp.com/api/product/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(productData),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Il prodotto non è stato creato");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Prodotto creato con successo: ", data);
//       document.getElementById("productForm").reset();
//     })
//     .catch((error) => {
//       console.error("Errore nella creazione del prodotto: ", error);
//     });
// });
