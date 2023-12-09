function showText() {
  const currentHours = new Date();
  const currentMin = new Date();
  let pk = document.querySelector(`#pk`);
  let urik = document.querySelector(`#urik`);
  let mash = document.querySelector(`#mash`);
 
  if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 8) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 53) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 23) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 14) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 1) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 46) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 13)) {
    console.log("PK");
    pk.innerHTML = `1 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 13) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 41) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 24) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 10) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 40) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 25) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 10) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 55) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 39) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 25) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 13) || (currentHours.getHours() === 0 && currentMin.getMinutes() === 2)) {
    console.log("PK");
    pk.innerHTML = `2 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 13) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 0) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 47) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 34) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 6) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 50)) {
    console.log("PK");
    pk.innerHTML = `3 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 2) || (currentHours.getHours() === 6 && currentMin.getMinutes() === 48) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 33) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 17) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 18) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 2)) {
    console.log("PK");
    pk.innerHTML = `4 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 11) || (currentHours.getHours() === 6 && currentMin.getMinutes() === 58) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 45) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 3) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 47) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 34) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 18) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 2) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 47) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 33) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 17) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 1) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 49) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 37)) {
    console.log("PK");
    pk.innerHTML = `5 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 36) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 21) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 19)) {
    console.log("PK");
    pk.innerHTML = `6 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 53) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 21) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 53) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 43) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 30) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 14) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 6) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 50)) {
    console.log("PK");
    pk.innerHTML = `7 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 3) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 49) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 33) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 17) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 9) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 56) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 26) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 13) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 2)) {
    console.log("PK");
    pk.innerHTML = `8 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 17) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 1) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 45) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 38) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 26) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 10) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 56) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 40) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 25)) {
    console.log("PK");
    pk.innerHTML = `9 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 25) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 9) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 55) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 41) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 14) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 58) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 45) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 32)) {
    console.log("PK");
    pk.innerHTML = `10 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 17) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 6) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 25)) {
    console.log("PK");
    pk.innerHTML = `11 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 41) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 25) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 11) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 38) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 55) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 28) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 13) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 1) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 49)) {
    console.log("PK");
    pk.innerHTML = `12 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 10) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 55) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 39) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 25) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 14) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 14) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 16) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 3) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 48) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 15)) {
    console.log("URI");
    urik.innerHTML = `1 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 31) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 15) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 43) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 26) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 41) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 15) || (currentHours.getHours() === 0 && currentMin.getMinutes() === 4)) {
    console.log("URI");
    urik.innerHTML = `2 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 31) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 15) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 2) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 49) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 36) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 24) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 8) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 52)) {
    console.log("URI");
    urik.innerHTML = `3 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 4) || (currentHours.getHours() === 6 && currentMin.getMinutes() === 50) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 19) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 4)) {
    console.log("URI");
    urik.innerHTML = `4 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 13) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 0) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 47) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 31) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 49) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 36) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 20) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 4) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 49) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 19) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 3) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 51) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 39)) {
    console.log("URI");
    urik.innerHTML = `5 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 38) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 23) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 21)) {
    console.log("URI");
    urik.innerHTML = `6 Маршрут`;
  }

  else if ((currentHours.getHours() === 6 && currentMin.getMinutes() === 55) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 23) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 55) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 14) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 15) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 45) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 32) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 16) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 8) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 52)) {
    console.log("PK");
    pk.innerHTML = `7 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 5) || (currentHours.getHours() === 7 && currentMin.getMinutes() === 51) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 35) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 19) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 7) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 37) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 22) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 11) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 58) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 28) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 15) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 4)) {
    console.log("URI");
    urik.innerHTML = `8 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 19) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 3) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 47) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 31) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 40) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 28) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 12) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 58) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 42) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 27)) {
    console.log("URI");
    urik.innerHTML = `9 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 11) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 43) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 14) || (currentHours.getHours() === 11 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 12 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 13 && currentMin.getMinutes() === 29) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 14) || (currentHours.getHours() === 14 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 15 && currentMin.getMinutes() === 44) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 31) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 16) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 0) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 47) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 34)) {
    console.log("URI");
    urik.innerHTML = `10 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 39) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 19) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 8) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 52) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 39) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 27)) {
    console.log("URI");
    urik.innerHTML = `11 Маршрут`;
  }

  else if ((currentHours.getHours() === 7 && currentMin.getMinutes() === 43) || (currentHours.getHours() === 8 && currentMin.getMinutes() === 27) || (currentHours.getHours() === 9 && currentMin.getMinutes() === 13) || (currentHours.getHours() === 10 && currentMin.getMinutes() === 1) || (currentHours.getHours() === 16 && currentMin.getMinutes() === 59) || (currentHours.getHours() === 17 && currentMin.getMinutes() === 40) || (currentHours.getHours() === 18 && currentMin.getMinutes() === 24) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 9) || (currentHours.getHours() === 19 && currentMin.getMinutes() === 57) || (currentHours.getHours() === 20 && currentMin.getMinutes() === 46) || (currentHours.getHours() === 21 && currentMin.getMinutes() === 30) || (currentHours.getHours() === 22 && currentMin.getMinutes() === 15) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 3) || (currentHours.getHours() === 23 && currentMin.getMinutes() === 51)) {
    console.log("URI");
    urik.innerHTML = `12 Маршрут`;
  }

  else {
    pk.innerHTML = `Поезда нет`
    urik.innerHTML = `Поезда нет`
  };
}

setInterval(showText, 10);