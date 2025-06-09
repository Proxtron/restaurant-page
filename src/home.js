import juicyBurgerImg from "./juicy-burger.png";

const homeDiv = document.createElement("div");
homeDiv.classList.add("home-div");

export default function loadHomePage() {
    const burgerImg = document.createElement("img");
    burgerImg.src = juicyBurgerImg;
    burgerImg.alt = "Delicious Burger";
    burgerImg.width = 700;
    homeDiv.appendChild(burgerImg);

    const heroTxtSection = buildHeroTxtSection();
    homeDiv.appendChild(heroTxtSection);

    return homeDiv;
}

const buildHeroTxtSection = () => {
    const heroTxtSection = document.createElement("div");
    heroTxtSection.classList.add("hero-txt-section");
    
    const heroTxt = document.createElement("h1");
    heroTxt.classList.add("hero-txt");
    heroTxt.innerText = "Big. Juicy. Burger.";
    heroTxtSection.appendChild(heroTxt);

    const heroSubTxt = document.createElement("h2");
    heroSubTxt.classList.add("hero-subtxt");
    heroSubTxt.innerText = `
        Our 100% Angus beef patties come with enough grease to stop the heart of a marathon runner!
        Come get yours today!     
    `;
    heroTxtSection.appendChild(heroSubTxt);

    const viewMenuBtn = document.createElement("button");
    viewMenuBtn.type = "button";
    viewMenuBtn.classList.add("nav-btn");
    viewMenuBtn.innerText = "View our Menu";
    heroTxtSection.appendChild(viewMenuBtn);

    return heroTxtSection;
}

/*
<div class="home-div">
    <img src="juicy-burger.png" width=700 alt="Delicious Burger">
    <div class="hero-txt-section">
        <h1 class="hero-txt">Big. Juicy. Burger.</h1>
        <h2 class="hero-subtxt">
            Our 100% Angus beef patties come with enough grease to stop the heart of a marathon runner!
            Come get yours today!
        </h2>
        <button type="button" class="nav-btn">View our Menu</button>
    </div>
</div>
*/