// Agregar fecha  al encabezado
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".subtitle");
  const fecha = new Date();
  const year = 2149;
  header.textContent += ` | Transmisión ${fecha.getDate()}/${
    fecha.getMonth() + 1
  }/${year}`;
});
