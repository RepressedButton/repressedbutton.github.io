import { Client } from "https://unpkg.com/archipelago.js/dist/archipelago.min.js";

// Create a new instance of the Client class.
const client = new Client();

const outputBox = document.getElementById("output");

// Set up an event listener for whenever a message arrives and print the plain-text content to the console.
client.messages.on("message", (content) => {
    console.log(content);
    outputBox.value += content + "\n";
});

// Login to the server.
// If no game is provided, client will connect in "TextOnly" mode, which is fine for this example.
client.login(document.getElementById("server").value + ":" + document.getElementById("port").value, document.getElementById("slot").value, "", {
    password: document.getElementById("password").value,
    slotData: true,
    tags: ["Tracker"]
});

client.messages.say("test");

