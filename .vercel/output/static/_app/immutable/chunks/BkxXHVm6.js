function u(e,i,c){if(!i||i.length===0)throw new Error("No hay productos en el pedido");const{nombre_empresa:d="CatálogoExpress",whatsapp_numero:l,moneda_simbolo:a="$",impuesto_porcentaje:r=18}=c,t=i.reduce((o,s)=>o+s.precio_unitario*s.cantidad,0),$=t*(r/100),m=t+$;let n=`*${d} - Nuevo Pedido*

*Información del Cliente:*`;e.cliente_nombre&&(n+=`
Nombre: ${e.cliente_nombre}`),e.cliente_whatsapp&&(n+=`
WhatsApp: ${e.cliente_whatsapp}`),n+=`

*Detalles del Pedido:*
`,i.forEach((o,s)=>{const f=o.precio_unitario*o.cantidad;n+=`
*${s+1}. ${o.nombre}*
   Cantidad: ${o.cantidad}
   Precio unitario: ${a}${o.precio_unitario.toFixed(2)}
   Subtotal: ${a}${f.toFixed(2)}`,o.sku&&(n+=`
   Código: ${o.sku}`),o.marca&&(n+=`
   Marca: ${o.marca}`)}),n+=`

*Resumen de Totales:*
Subtotal: ${a}${t.toFixed(2)}
Impuestos (${r}%): ${a}${$.toFixed(2)}
*TOTAL: ${a}${m.toFixed(2)}*

¡Hola! Me gustaría realizar este pedido. Por favor, confírmenme disponibilidad y forma de pago.`;const p=encodeURIComponent(n);return`https://wa.me/${l}?text=${p}`}function g(e,i){const{nombre_empresa:c="CatálogoExpress",whatsapp_numero:d,moneda_simbolo:l="$"}=i;let a=`*${c} - Consulta por Producto*

¡Hola! Me interesa el siguiente producto:

*${e.nombre}*
Precio: ${l}${e.precio.toFixed(2)}`;if(e.id&&(a+=`
Código: ${e.id}`),e.marca&&(a+=`
Marca: ${e.marca}`),e.descripcion_larga){const t=e.descripcion_larga.substring(0,100);a+=`
Descripción: ${t}${e.descripcion_larga.length>100?"...":""}`}a+=`

Por favor, envíenme más información sobre:
• Disponibilidad
• Tiempo de entrega
• Descuentos por cantidad
• Otras características`;const r=encodeURIComponent(a);return`https://wa.me/${d}?text=${r}`}export{g as a,u as g};
