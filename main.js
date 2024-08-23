import "./style.css";

// --TODO: arreglar esto del .env para que no se me filtre la api key xd
const API_KEY = import.meta.env.VITE_API_KEY;
const LOOKUP_IP = "190.190.195.111";

const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`;
const options = {
  method: "GET",
};

const parseIPInfo = (ipObject) => {
  const ipInfoContainer = document.getElementById("ip-info-container");
  
  // hay que usar tablas y que muestre la info en la misma
  // que use key-value para leerse
  // o inventar algo mas sotisficado (mejor)
  ipInfoContainer.textContent = ipObject.ip
};

document.getElementById("ip-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const { lookupIp } = Object.fromEntries(new FormData(e.target).entries());

  // valida la ip con una expresion regular

  // hace la peticion a la api
  try {
    const response = await fetch(`${url}&ip=${lookupIp}`, options);
    const result = await response.json();

    parseIPInfo(result);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
