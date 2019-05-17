function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // Toit de la voiture
    ctx.fillStyle = '#51a650';
    ctx.fillRect(300, 50, 200, 50); // fillRect(x, y, largeur, hauteur)
    // Corps de la voiture
    ctx.fillStyle = '#51a650';
    ctx.fillRect(250, 100, 300, 50); // fillRect(x, y, largeur, hauteur)
    // Roue gauche
    ctx.fillStyle = '#cecece';
    // Dessiner les arcs / cercles
    // arc(x, y, rayon, angleInitial, angleFinal, antihoraire)
    // Dessine un arc de cercle qui est centré à la position (x, y), de rayon r,
    // commençant à angleInitial et finissant à angleFinal en allant dans le sens
    // indiqué par antihoraire (par défaut, horaire).
    // arcTo(x1, y1, x2, y2, rayon)
    // Dessine un arc avec les points de contrôle et l'angle donnés,
    // relié au point précédent par une ligne droite.
    ctx.arc(300,150,22,0,Math.PI*2,false);
    ctx.stroke();
    ctx.fill();
    // Roue droite
    ctx.fillStyle = '#cecece';
    ctx.arc(500,150,22,0,Math.PI*2,false);
    ctx.stroke();
    ctx.fill();
  }
}
