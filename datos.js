// ============================================================
//  DATOS DE LA PANTALLA — edita solo lo que está entre comillas
// ============================================================

const BARBERIA = {
  nombre: "ZONA",
  eslogan: "Barbería · Moda · Diseño · Vestuario",
  direccion: "Bulnes 110, Local 1 · Temuco",

  // Lista de servicios: agrega o borra líneas siguiendo el mismo formato
  // Precios tomados de la historia destacada "BARBERIA" de Instagram
  servicios: [
    { nombre: "Clásico",              precio: "$7.990",        detalle: "Desde peine N°3" },
    { nombre: "Degradado",            precio: "$10.000",       detalle: "" },
    { nombre: "Servicio completo",    precio: "$13.000",       detalle: "Corte + cejas + lavado de cabello" },
    { nombre: "Lavado de cabello",    precio: "$2.000",        detalle: "" },
    { nombre: "Cejas",                precio: "$2.000",        detalle: "" },
    { nombre: "Rizado permanente",    precio: "desde $39.990", detalle: "" },
    { nombre: "Color global / Visos", precio: "desde $44.990", detalle: "" },
  ],

  // Promoción destacada
  promo: {
    titulo: "¿CAÍDA DEL CABELLO? AGRÉGALO A TU SERVICIO",
    texto: "Masaje capilar fortalecedor $2.990",
  },

  // Redes
  instagram: "@zona.urbanstyle",
  whatsapp: "+56 9 4083 5286",

  // A dónde lleva el código QR (enlace de WhatsApp que figura en el Instagram)
  qr: "https://wa.me/message/KZ6QAVTO6MC7C1",
  qrTexto: "Agenda tu hora|por WhatsApp",

  // Texto que se repite en el fondo, detrás de las fotos
  marcaFondo: "ZONA",

  // Logo (recortado de una imagen del Instagram). Deja "" para mostrar el nombre en texto.
  logo: "fotos/logo-fuente.jpg",

  // Fotos: ponlas en la carpeta "fotos" y escribe aquí sus nombres.
  // Si una foto no existe, se muestra un fondo decorativo.
  fotos: [
    "fotos/1-local.jpg",
    "fotos/2-burstfade.jpg",
    "fotos/3-lowfade.jpg",
    "fotos/4-diseno.jpg",
    "fotos/5-vitrina.jpg",
    "fotos/6-corte.jpg",
    "fotos/7-visos.jpg",
    "fotos/8-degradado.jpg",
  ],

  segundosPorFoto: 7,
};
