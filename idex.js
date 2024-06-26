function classificarHeroi(nome, xp) {
    let nivel;
  
    if (xp < 1000) {
      nivel = "humano";
    } else if (xp <= 2000) {
      nivel = "gurreiro";
    } else if (xp <= 5000) {
      nivel = "gerriro-olimpo";
    } else if (xp <= 7000) {
      nivel = "semi-deus";
    } else if (xp <= 8000) {
      nivel = "deus";
    } else if (xp <= 9000) {
      nivel = "titan";
    } else if (xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "deus-primordial";
    }
  
    return `O Herói ${nome} está no nível de ${nivel}`;
  }
  
  // xp do kratos
  let nomeHeroi = "Kratos";
  let xpHeroi = 4000;
  
  console.log(classificarHeroi(nomeHeroi, xpHeroi));