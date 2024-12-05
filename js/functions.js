var miRuleta = new Winwheel({
  numSegments: 200,
  outerRadius: 300,
  segments: [
    { fillStyle: "#ffeb3b", text: "JavaScript" },
    { fillStyle: "#304ffe", text: "Pyhton" },
    { fillStyle: "#3949ab", text: "PHP" },
    { fillStyle: "#00bcd4", text: "Go" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#ffeb3b", text: "JavaScript" },
    { fillStyle: "#304ffe", text: "Pyhton" },
    { fillStyle: "#3949ab", text: "PHP" },
    { fillStyle: "#00bcd4", text: "Go" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#ffeb3b", text: "JavaScript" },
    { fillStyle: "#304ffe", text: "Pyhton" },
    { fillStyle: "#3949ab", text: "PHP" },
    { fillStyle: "#00bcd4", text: "Go" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
    { fillStyle: "#e91e63", text: "Ruby" },
  ],
  animation: {
    type: "spinToStop",
    duration: 5,
    callbackFinished: "mensaje()",
    callbackAfter: "dibujarIndicador()",
  },
});

dibujarIndicador();

function mensaje() {
  var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
  alert("Elemento seleccionado: " + SegmentoSeleccionado.text);

  miRuleta.stopAnimation(false);
  // miRuleta.rotationAngle = 0;
  // miRuleta.draw();
  // dibujarIndicador();
}

function dibujarIndicador() {
  var ctx = miRuleta.ctx;
  ctx.strokeStyle = "navy";
  ctx.fillStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(270, -20);
  ctx.lineTo(330, -20);
  ctx.lineTo(300, 60);
  ctx.lineTo(270, -20);
  ctx.stroke();
  ctx.fill();
}
