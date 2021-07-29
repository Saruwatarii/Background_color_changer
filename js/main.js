const btnBackgroundColorChanger = document.querySelector(".btnColor");
const hexCodesBackground = document.querySelector(".hexCodes");

btnBackgroundColorChanger.addEventListener("click", changeBackgroundColor);

const hexadecimals = "0123456789ABCDEF";
const hexCodeLength = hexadecimals.length;
const codeLength = 6;

function randomHexdecimalGenerator() {
  const randomHexGenerator = hexadecimals.charAt(
    Math.floor(Math.random() * hexCodeLength)
  );

  return randomHexGenerator;
}

function changeBackgroundColor() {
  let result = "#";

  for (let index = 0; index < codeLength; index++) {
    result += randomHexdecimalGenerator();
  }

  console.log(result);
  hexCodesBackground.textContent = result;
  document.body.style.backgroundColor = result;
}
