const CARDS_CONTAINER = CARDS_CONTAINER = document.querySelector("#card-container"); 
const USERS = [
    {
        id: 1,
        username: "Ternurinio",
        desc: "Le encantan los ternurines",
        age: 26,
        fav_toys: {
            toys: [
                "Elefante",
                "Foca",
                "Jirafa",
             ],
    
        },
    },
    
    {
        id: 2,
        username: "Sylvanian",
        desc: "No le gustan los ternurines, prefiere los sylvanian",
        age: 22,
        fav_toys: {
            toys: [
                "Gatos",
                "Venados",
                "Tigres",
             ],
    
        },
    },
    ];

 function createElements () {
    const cardObj = {
        name_section: document.createElement("h3"),
        desc_section: document.createElement("p"),
        age_section: document.createElement("p"),
        toy_section: document.createElement("div"),

    };
    return cardObj;
 }

 function injectData (obj,user) {
    const toyList = user.fav_toys.toys.map((e) => {
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
 });
    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
    obj.toy_section.append(...toyList);
    renderCard(obj);
 }

 function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append(
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.age_section,
        cardObj.toy_section,

    );
    CARDS_CONTAINER.appendChild(card);
 }

 USERS.forEach((user) => {
    const cardData = createElements();
    injectData(cardData, user);
 });