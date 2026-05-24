//import readline from "node:readline";

import { Client } from "https://unpkg.com/archipelago.js/dist/archipelago.min.js";

const client = new Client();

const sendButton = document.getElementById("sendButton");

const outputBox = document.getElementById("output");

client.messages.on("message", (content) => {
    console.log(content);
    outputBox.value += content + "\n";
});

client.login(document.getElementById("server").value + ":" + document.getElementById("port").value, document.getElementById("slot").value, "", {
    password: document.getElementById("password").value,
    slotData: true
});

adminConnectButton.addEventListener("click", () => {
    client.messages.say("!admin login " + document.getElementById("adminPassword").value);
});

sendButton.addEventListener("click", () => {
    client.messages.say("!admin /send_location " + document.getElementById("slot").value + " " + document.getElementById("input").value);
});