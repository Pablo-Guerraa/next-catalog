// lib/whatsapp.ts
export function buildWhatsAppMessage(product: {
  name: string;
  price: number;
  currency: string;
  category: string;
}) {
  const message = `
Hola 🌸
Estoy interesado/a en el siguiente arreglo:

💐 *${product.name}*
🏷️ Categoría: ${product.category}
💰 Precio: ${product.price} ${product.currency}

¿Podrías darme más información, por favor?
  `.trim();

  return encodeURIComponent(message);
}


export function buildWhatsAppAdvisorLink() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!number) {
    throw new Error("NEXT_PUBLIC_WHATSAPP_NUMBER is not defined");
  }

  const message = encodeURIComponent(
    "Hola 🌸 Quisiera asesoría para elegir el arreglo ideal para una ocasión especial."
  );

  return `https://wa.me/${number}?text=${message}`;
}