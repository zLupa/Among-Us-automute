//File to me test things.

let hexas = [
  "01 00 bb 25 00 05 76 f1 4c 80 10 00 02 a1 01 17 0a 40 40 40 40 60 40 40 81 43 40 ff 00 04 00 02 76 10 00 00 04 00 01 a1 01 01 40",
  "01 00 be 26 00 05 65 a6 13 80 10 00 02 9c 03 17 0a 40 41 61 43 81 81 41 40 41 81 00 00 05 00 02 fa 02 10 01 00 04 00 01 9c 03 02 41",
  "01 01 0c 26 00 05 65 a6 13 80 10 00 02 9d 03 17 0a 81 44 64 40 81 81 44 40 44 81 03 00 05 00 02 fa 02 10 03 00 04 00 01 9d 03 40 40",
  "01 00 c3 1d 00 05 b5 ed 54 80 0f 00 02 29 17 0a 42 47 42 cf 47 42 6f 40 40 42 01 00 04 00 01 29 44 cf 6f",
  "01 01 34 24 00 05 b5 ed 54 80 0f 00 02 2a 17 0a 40 81 40 81 60 46 81 40 40 40 ff 00 04 00 02 04 10 08 00 04 00 01 2a 80 02 40",
  "01 01 d7 2a 00 05 b5 ed 54 80 04 00 02 04 10 00 00 0f 00 02 2b 17 0a 40 cf cf cf 61 49 cf cf 4f 40 ff 00 0a 00 01 2b d7 03 40 cf cf cf cf cf 4f",
  "01 02 43 23 00 05 b5 ed 54 80 0f 00 02 2c 17 0a 46 81 81 81 41 45 81 81 66 81 05 00 04 00 02 04 10 04 00 03 00 01 2c 08 41",
  "01 00 d7 26 00 05 65 7e 35 80 10 00 02 83 03 17 0a 42 40 81 40 60 40 40 40 81 48 ff 00 05 00 02 d5 02 10 04 00 04 00 01 83 03 10 60",
];

let Hexa16 = [
  "01 01 31 0a 00 05 65 7e 35 80 03 00 02 84 03 16",
  "01 01 bc 0a 00 05 65 7e 35 80 03 00 02 85 03 16",
  "01 01 4c 09 00 05 4b dc 2d 80 02 00 02 52 16",
];

/*function checkDuplicate() {
  let indexs = []

  hexas.sort((a, b) => {
    let hexapast = a.split(" ")
    let hexaActual = b.split(" ")

    for(hexa in hexapast) {
      if(hexapast[hexa] == hexaActual[hexa]) indexs.push(hexa)
    }
    return hexaActual
  })
  return indexs
}

function a(data) { return data.match(/.{1,2}/g).join(" ") }

console.log(b());*/