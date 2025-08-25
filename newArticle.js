let cards = [
    {
        "id": "1",
        "title": "My Article-01",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "category": "Animal",
        "publish_date": "11-Jan-2025",
        "image_url": "https://picsum.photos/800/800?random=1"
    },
    {
        "id": "2",
        "title": "My Article-02",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "category": "Trees",
        "publish_date": "22-Feb-2025",
        "image_url": "https://picsum.photos/800/800?random=2"
    },
    {
        "id": "3",
        "title": "My Article",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "category": "Mountains",
        "publish_date": "21-June-2008",
        "image_url": "https://picsum.photos/800/800?random=3"
    },
    {
        "id": "4",
        "title": "My Article",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "category": "Elephant",
        "publish_date": "29-Apr-2024",
        "image_url": "https://picsum.photos/800/800?random=4"
    },
];

const cardContainer = document.getElementById("cardRow");
const submitButton = document.querySelector("button");

function renderCard(card) {
    return `

    <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card mt-3" style="width: 18rem;">
                <img src="${card.image_url}" class="card-img-top" alt="Image">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description || ""}</p>
                    <h4><span class="badge text-bg-danger">${card.category || ""}</span></h4>
                    <p>${card.publish_date || ""}</p>
                </div>
            </div>
        </div>
    `;
}

cards.forEach(card => {
    cardContainer.innerHTML += renderCard(card);
});

submitButton.addEventListener("click", () => {

    const title = document.getElementById("updateTitle").value.trim();
    const description = document.getElementById("updateDescription").value.trim();
    const category = document.getElementById("updateCategory").value.trim();
    const customDate = document.getElementById("updateDate").value;
    const image_url = document.getElementById("updateImage").value.trim();

    if (!title || !description || !category || !customDate || !image_url) {
        alert("Please fill all fields before submitting!");
        return;
    }

    let formattedDate = "";
    if (customDate) {
        const dateObj = new Date(customDate);
        formattedDate = dateObj.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }).replace(/ /g, "-");
    }

    const newCard = {
        id: String(cards.length + 1),
        title: document.getElementById("updateTitle").value,
        description: document.getElementById("updateDescription").value,
        category: document.getElementById("updateCategory").value,
        publish_date: formattedDate,
        image_url: document.getElementById("updateImage").value,
    };

    cards.unshift(newCard);

    cardContainer.innerHTML = renderCard(newCard) + cardContainer.innerHTML;
    document.getElementById("updateTitle").value = "";
    document.getElementById("updateDescription").value = "";
    document.getElementById("updateCategory").value = "";
    document.getElementById("updateDate").value = "";
    document.getElementById("updateImage").value = "";
});

