const background = document.querySelector("#background");

function removeCard(){
    while(background.firstChild){
        background.firstChild.remove();
    }
}

function createCard(city, temperature, temperatureF, humidity, description, icon, wind, windF) {
    const section = document.createElement("div");
    section.classList.add("uk-section");
  
    const div = document.createElement("div");
  
    const cardParent = document.createElement("div");
    cardParent.classList.add("uk-card");
    cardParent.classList.add("uk-card-default");
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("uk-card-header");

    const gridHeader = document.createElement("div");
    gridHeader.classList.add("uk-grid-small");
    gridHeader.classList.add("uk-flex-middle");
    gridHeader.setAttribute("uk-grid", "");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("uk-width-auto");

    const img = document.createElement("img");
    img.classList.add("uk-border-circle");
    img.setAttribute("width", "40");
    img.setAttribute("height", "40");
    img.setAttribute("src", `./icons/${icon}.png`);
  
    const gridCity = document.createElement("div");
    gridCity.classList.add("uk-width-expand");  
  
    const cityHeading = document.createElement("h3");
    cityHeading.classList.add("uk-card-title");
    cityHeading.classList.add("uk-margin-remove-bottom");
    cityHeading.setAttribute("id", "city");
    cityHeading.innerHTML = city;

  
    const descriptionParagraph  = document.createElement("p");
    descriptionParagraph.classList.add("uk-text-meta");
    descriptionParagraph.classList.add("uk-margin-remove-top");
    descriptionParagraph.setAttribute("id", "description");
    descriptionParagraph.innerHTML = "Wind speed:" + description;


    const cardBody = document.createElement("div");
    cardBody.classList.add("uk-card-body");
  
    const tempParagraph = document.createElement("p");
    tempParagraph.setAttribute("id", "temp");
    tempParagraph.innerHTML = "Temperature: " + temperature + "°C";

    const tempParagraphF = document.createElement("p");
    tempParagraphF.setAttribute("id", "tempF");
    tempParagraphF.classList.add("uk-margin-remove-top")
    tempParagraphF.style.display = "none"
    tempParagraphF.innerHTML = "Temperature: " + temperatureF + "°F"; 
  
    const humidityParagraph = document.createElement("p");
    humidityParagraph.setAttribute("id", "humid");
    humidityParagraph.innerHTML = "Humidity: " + Math.round(humidity) + "%";
  
    const windParagraph = document.createElement("p")
    windParagraph.setAttribute("id", "wind")
    windParagraph.innerHTML = "Wind speed: " + Math.round(wind) + "m/s";

    const windParagraphF = document.createElement("p")
    windParagraphF.setAttribute("id", "windF")
    windParagraphF.style.display = "none"
    windParagraphF.innerHTML = "Wind speed: " + Math.round(windF) + "mph"
  
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("uk-card-footer");
  
    const unitSwitch = document.createElement("button");
    unitSwitch.classList.add("uk-button")
    unitSwitch.classList.add("uk-button-default")
    unitSwitch.setAttribute("id", "unitSwitcher")
    unitSwitch.innerHTML = "Change Units";
  

    background.appendChild(section);
    section.appendChild(div);
    div.appendChild(cardParent);
  
    cardParent.appendChild(cardHeader);
    cardHeader.appendChild(gridHeader);
    gridHeader.appendChild(imgDiv);
    imgDiv.appendChild(img);


    gridHeader.appendChild(gridCity);
    gridCity.appendChild(cityHeading);
    gridCity.appendChild(descriptionParagraph);


    cardParent.appendChild(cardBody);
    cardBody.appendChild(tempParagraph);
    cardBody.appendChild(tempParagraphF);
    cardBody.appendChild(windParagraph);
    cardBody.appendChild(windParagraphF)
    cardBody.appendChild(humidityParagraph);


    cardParent.appendChild(cardFooter);
    cardFooter.appendChild(unitSwitch);
  }

  function backgroundChange(partOfTheDay) {
    const background = document.querySelector('#background');

    if(partOfTheDay === "d") {
        background.style.backgroundImage = "url(./images/day.jpg)";
    }
    else if(partOfTheDay === "n") {
        background.style.backgroundImage = "url(./images/night.jpg)";
    }
    else {
        console.log(partOfTheDay)
      }
  }
  

  export { createCard, removeCard, backgroundChange };