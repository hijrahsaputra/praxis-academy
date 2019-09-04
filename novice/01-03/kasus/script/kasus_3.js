function hitungKebutuhan(umur, jumhari) {
    var maxumur = 100;
    var total = (jumhari * 365) * (maxumur - umur);
    var pesan = 'Anda membutuhkan ' + total + ' gelas teh sampai dengan anda meninggal pada usia ' + maxumur;
    document.write(pesan+"<br/>");
  }
  
  hitungKebutuhan(37, 36);
  hitungKebutuhan(37, 2.5);
  hitungKebutuhan(37, 400);