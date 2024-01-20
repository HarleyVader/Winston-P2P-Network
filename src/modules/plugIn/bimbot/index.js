import { formatText, textColors } from "../../../client.js";
export const name = "bimbot";
export const description = "melkanea bimbot";
export const version = "0.0001";
export const command = (answer) => {
  // console.log(formatText(answer, textColors.Pink));
  if (answer.match("bimbot") !== null) { console.log(formatText("bimbot says NYA", textColors.Pink)) }
};
export const exec = (clients, data) => {
  // console.log(clients, data);
};

function colorChanger(txt, color) {
  return `\u001b[1;33;${color}m${txt}\u001b[1;33;00m`
}

