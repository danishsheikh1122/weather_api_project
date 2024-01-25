let data = [];
const init = async (c) => {

  main_tag.classList.add("loading")
  main_tag.style.dispay="none"
  console.log(c);
  const link = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=d3309dcfba48b32fd6754c240df28345`
    );
    data = await link.json();
    //accessing api 
    // console.log(data);
    date_tag.innerHTML = new Date().toLocaleDateString();
    temp.innerText = Math.trunc((297 - 273.15).toFixed(2))+" °C"; //formula for temperature
    type.innerHTML = data.weather[0].main; //type of weather haze
    city_name.innerHTML = data.name; //name of city
    country_name.innerHTML = data.sys.country; //name of country
    humidity.innerText = data.main.humidity + " %"; //humidity
    wind.innerText = Math.trunc(data.wind.speed * (1.609).toFixed(4)) + " km/hr"; //speed
    pressure.innerText = data.main.pressure; //pressure
  main_tag.classList.remove("loading")

};
// console.log(date);
// let city = undefined;
// let search_btn = undefined;
// let img = undefined;

// accessing all html tags


let date_tag = document.querySelector("#date");
let temp = document.querySelector("#temp");
let type = document.querySelector("#type");
let city_name = document.querySelector("#city_name");
let country_name = document.querySelector("#country_name");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let pressure = document.querySelector("#pressure");

// accessing ends

// for skeliton loading
let main_tag=document.querySelector(".main")
// end loading

// on enter event starts

city.addEventListener("keypress",(event)=>{
  if(event.key==="Enter"){
    generate()
  }
})

// on enter event ends

init("medina") //->to call first initially

const generate = () => {
  let temp = document.querySelector("#city");
  if (!temp.value) alert("fill some data");
  city = temp.value;
  temp.value = ""; //to remove search text once clicked
  search_btn = document
    .querySelector("i")
    .addEventListener("click", init(city));
};

