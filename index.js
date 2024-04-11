const myKey = "QXmzi1LlzjyD9zOvba2z7m9EO0Ln6oVG2PETfLSOm8H0r6fQ0rhydAL6";
const album = document.getElementById("album");

const catURL = "https://api.pexels.com/v1/search?query=cat/";
const dogURL = "https://api.pexels.com/v1/search?query=dog/";

const row = document.getElementById("albumRow");

const clearAlbum = () => {
  while (row.firstChild) {
    row.removeChild(row.firstChild);
  }
};

const fetchAlbum1 = () => {
  clearAlbum();
  fetch(catURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: myKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((catData) => {
      const row = document.getElementById("albumRow");
      row.classList.add("row", "row-cols-sm-2", "row-cols-md-3", "g-4");

      catData.photos.forEach((cat) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm", "h-100");

        card.innerHTML = `
            
            <img
            src= ${cat.src.original}
            class="bd-placeholder-img card-img-top"
          />
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${cat.alt}</h5>
            <p class="card-text">
             Photo by: ${cat.photographer}
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary btn-Hide"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">ID: ${cat.id}</small>
            </div>
          </div>
            
            
            `;
        col.appendChild(card);
        row.appendChild(col);

        const hideBtn = card.querySelector(".btn-Hide");

        hideBtn.addEventListener("click", (event) => {
          const cardToRemove = event.target.closest(".col");
          if (cardToRemove) {
            cardToRemove.remove();
          }
        });

        const cardTitle = card.querySelector(".card-title");
        const imgCard = card.querySelector(".card-img-top");
        const goToDetail = () => {
          const cardId = cat.id;
          window.location.href = `details.html?cardId=${cardId}`;
        };

        imgCard.addEventListener("click", goToDetail);

        cardTitle.addEventListener("click", goToDetail);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchAlbum2 = () => {
  clearAlbum();
  fetch(dogURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: myKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((dogData) => {
      const row = document.getElementById("albumRow");
      row.classList.add("row", "row-cols-sm-2", "row-cols-md-3", "g-4");

      dogData.photos.forEach((dog) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm", "h-100");

        card.innerHTML = `
              
              <img
              src= ${dog.src.original}
              class="bd-placeholder-img card-img-top"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">${dog.alt}</h5>
              <p class="card-text">
               Photo by: ${dog.photographer}
              </p>
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary btn-Hide"
                  >
                    Hide
                  </button>
                </div>
                <small class="text-muted">ID: ${dog.id}</small>
              </div>
            </div>
              
              
              `;
        col.appendChild(card);
        row.appendChild(col);

        const hideBtn = card.querySelector(".btn-Hide");

        hideBtn.addEventListener("click", (event) => {
          const cardToRemove = event.target.closest(".col");
          if (cardToRemove) {
            cardToRemove.remove();
          }
        });

        const cardTitle = card.querySelector(".card-title");
        const imgCard = card.querySelector(".card-img-top");
        const goToDetail = () => {
          const cardId = dog.id;
          window.location.href = `details.html?cardId=${cardId}`;
        };

        imgCard.addEventListener("click", goToDetail);

        cardTitle.addEventListener("click", goToDetail);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const firstButton = document.querySelector(".btn-primary");
const secondButton = document.querySelector(".btn-secondary");

firstButton.addEventListener("click", fetchAlbum1);
secondButton.addEventListener("click", fetchAlbum2);

const form = document.querySelector("form");

const fetchAlbumX = (data) => {
  clearAlbum();
  fetch(` https://api.pexels.com/v1/search?query=${data}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: myKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((inputData) => {
      const row = document.getElementById("albumRow");
      row.classList.add("row", "row-cols-sm-2", "row-cols-md-3", "g-4");

      inputData.photos.forEach((input) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm", "h-100");

        card.innerHTML = `
                
                <img
                src= ${input.src.original}
                class="bd-placeholder-img card-img-top"
              />
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${input.alt}</h5>
                <p class="card-text">
                 Photo by: ${input.photographer}
                </p>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary btn-Hide"
                    >
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">ID: ${input.id}</small>
                </div>
              </div>
                
                
                `;
        col.appendChild(card);
        row.appendChild(col);

        const hideBtn = card.querySelector(".btn-Hide");

        hideBtn.addEventListener("click", (event) => {
          const cardToRemove = event.target.closest(".col");
          if (cardToRemove) {
            cardToRemove.remove();
          }
        });

        const cardTitle = card.querySelector(".card-title");
        const imgCard = card.querySelector(".card-img-top");
        const goToDetail = () => {
          const cardId = input.id;
          window.location.href = `details.html?cardId=${cardId}`;
        };

        imgCard.addEventListener("click", goToDetail);

        cardTitle.addEventListener("click", goToDetail);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = document.querySelector("input").value;

  fetchAlbumX(inputValue);
  form.reset();
});
