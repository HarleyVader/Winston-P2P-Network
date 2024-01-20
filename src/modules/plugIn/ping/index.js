import { formatText, textColors } from "../../../client.js";
export const name = "ping";
export const description = "melkanea ping & latency";
export const version = "0.0002";

//data packets from the users
export const command = (answer, client, clients) => {
    // console.log(formatText(answer, textColors.Pink));
    if (answer.match("!ping") !== null) {
        client.send(
            JSON.stringify({
                action: "ping",
                clientId: client.clientId,
                timestamp: +new Date()
            })
        );
    }
    if (answer.match("!latency") !== null) { 
    client.send(
            JSON.stringify({
                action: "ping",
                clientId: client.clientId,
                timestamp: +new Date()
            })
        );
     }
};
//data packages of the server
export const exec = (clients, client, input) => {
    // console.log(clients, data);

    let cmd = JSON.parse(input);
    if (cmd.hasOwnProperty("action") && cmd.action === "ping") {
        client.send(
            JSON.stringify({
                action: "pong",
                clientId: client.clientId,
                ping: cmd,
                timestamp: +new Date()
            })
        );
    }
    if (cmd.hasOwnProperty("action") && cmd.action === "pong") {
    let time = cmd.timestamp;
        console.log(`pong %d ${time}`);
    }
    if (cmd.hasOwnProperty("action") && cmd.action === "latency") {
        let start = cmd.ping.timestamp;
        let recieve = cmd.timestamp;
        let finish = +new Date();

        let roundtrip = finish - start;
        let getpackage = finish - recieve;
        let sendpackage = recieve - finish;

        console.log(`RoundTrip: ${roundtrip} %d GetPackage: ${getpackage} %d SendPackage: ${sendpackage}`);
    }
    return

};
