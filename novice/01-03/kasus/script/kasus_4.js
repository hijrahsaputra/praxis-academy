function calcGeometry(radius) {
    var circumference = Math.PI * 2 * radius;
    document.write("Keliling Lingkaran " + circumference+"<br/>");
    var area = Math.PI * radius * radius;
    document.write("Luas Lingakaran " + area+"<br/>");
}  
calcGeometry(5);