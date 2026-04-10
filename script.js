// Base de datos de productos basada en el menú de Aki Tu Pizza
const pizzas = [
    // Temporada
    { name: "Pollo e Funghi", cat: "especial", price: "60.000", desc: "Pollo al ajillo, champiñones y queso di búfala [cite: 82, 85, 89]" },
    // Premium
    { name: "Sorrento", cat: "premium", price: "52.000", desc: "Queso di búfala, azul, jamón serrano y piña caramelizada [cite: 91, 108]" },
    { name: "Frutti di Mar", cat: "premium", price: "52.000", desc: "Camarones, calamar, palmitos y salsa pesto [cite: 105, 108]" },
    { name: "Picantezza", cat: "premium", price: "52.000", desc: "Pollo, queso pepperjack, sriracha y jalapeños [cite: 95, 108]" },
    // Especiales
    { name: "Azteca", cat: "especial", price: "47.000", desc: "Carne molida, maíz, pimentones asados y jalapeños [cite: 118, 131]" },
    { name: "Quattro Formaggi", cat: "especial", price: "47.000", desc: "Mozzarella, di búfala, azul y parmesano [cite: 129, 131]" },
    { name: "Pizza Lasaña", cat: "especial", price: "47.000", desc: "Bechamel, carne molida, jamón y tocineta [cite: 137, 139]" },
    // Clásicas
    { name: "Hawaiana", cat: "clasica", price: "38.000", desc: "Jamón ahumado y piña caramelizada [cite: 150, 153]" },
    { name: "Pepperoni", cat: "clasica", price: "38.000", desc: "Pepperoni premium y mozzarella [cite: 147, 153]" }
];

const bebidas = [
    { name: "Pink Tonic", price: "15.000", desc: "Liche, fresas, agua tónica y soda Hatsu [cite: 28, 35]" },
    { name: "Mistero Rosso", price: "12.000", desc: "Tamarindo, Limón y Jamaica [cite: 8, 9, 10]" },
    { name: "Jarra de Sangría", price: "60.000", desc: "Vino, frutas, ron añejo y azúcar [cite: 42, 45, 46]" },
    { name: "Limonada de Coco", price: "15.000", desc: "Granizado refrescante de coco [cite: 61]" }
];

// Función para renderizar las tarjetas de pizza
function renderPizzas(items) {
    const grid = document.getElementById('pizza-grid');
    if (!grid) return; // Seguridad si el elemento no existe
    
    grid.innerHTML = items.map(p => `
        <div class="card" data-category="${p.cat}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price">$${p.price}</div>
            <a href="https://wa.me/573160424560?text=Hola,%20quisiera%20pedir%20la%20pizza%20${encodeURIComponent(p.name)}" 
               target="_blank" 
               class="btn-order">
               Pedir por WhatsApp
            </a>
        </div>
    `).join('');
}

// Función de filtrado corregida
function filterMenu(category, event) {
    // Filtrar array
    const filtered = category === 'todas' ? pizzas : pizzas.filter(p => p.cat === category);
    renderPizzas(filtered);
    
    // Manejo de la clase 'active' en los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event) {
        event.currentTarget.classList.add('active');
    }
}

// Renderizar bebidas (se cargan una sola vez al inicio)
function renderBebidas() {
    const grid = document.getElementById('bebida-grid');
    if (!grid) return;

    grid.innerHTML = bebidas.map(b => `
        <div class="card">
            <h3>${b.name}</h3>
            <p>${b.desc}</p>
            <div class="price">$${b.price}</div>
            <a href="https://wa.me/573160424560?text=Hola,%20quisiera%20pedir%20la%20bebida%20${encodeURIComponent(b.name)}" 
               target="_blank" 
               class="btn-order">
               Pedir por WhatsApp
            </a>
        </div>
    `).join('');
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderPizzas(pizzas);
    renderBebidas();
});
