import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import http from "http";
import { mondayuLogger } from "mondayu-logger";
// import your own logger

// step 1: install lib and print temp to console
const apiKey = "6ae97bcdde2d7e3e5cf15260f2cce487";
const weatherInitializer = new AsyncWeather();
const weatherAPI = await weatherInitializer;
weatherAPI.setApiKey(apiKey);

// step 2: server
// create your server here from http module
// example in the slides or here: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  weatherAPI.setCityId(293397);
  const temp = await weatherAPI.getTemperature();
  mondayuLogger.log("temp", temp);
});

// start your server
server.listen(8080);
mondayuLogger.log("Server start listening");

// step 3: install your logger and log temp and server start
// log that the service has started
