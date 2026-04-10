const pizzas = [
    { name: "Pollo e Funghi", cat: "especial", price: "60.000", desc: "Pollo al ajillo, champiñones y queso di búfala [cite: 82, 85, 89]" },
    { name: "Sorrento", cat: "premium", price: "52.000", desc: "Queso azul, jamón serrano y piña caramelizada [cite: 91, 108]" },
    { name: "Picantezza", cat: "premium", price: "52.000", desc: "Pollo, sriracha, jalapeños y sour cream [cite: 95, 108]" },
    { name: "Azteca", cat: "especial", price: "47.000", desc: "Carne molida, maíz, pimentones y jalapeños [cite: 127, 131]" },
    { name: "Hawaiana", cat: "clasica", price: "38.000", desc: "Jamón ahumado y piña caramelizada [cite: 150, 153]" }
];

const bebidas = [
    { name: "Pink Tonic", price: "15.000", desc: "Liche, fresas, agua tónica y soda Hatsu frambuesa [cite: 28, 35]" },
    { name: "Mistero Rosso", price: "12.000", desc: "Tamarindo, Limón y Jamaica [cite: 8, 9, 10]" },
    { name: "Sangría Jarra", price: "60.000", desc: "Vino tinto, frutas picadas y ron añejo [cite: 42, 45, 46]" }
];

function renderPizzas(items) {
    const grid = document.getElementById('pizza-grid');
    grid.innerHTML = items.map(p => `
        <div class="card">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price">$${p.price} (Med)</div>
            <a href="https://wa.me/573160424560?text=Hola,%20quiero%20pedir%20la%20pizza%20${p.name}" class="btn-order">Pedir por WhatsApp</a>
        </div>
    `).join('');
}

function filterMenu(category) {
    const filtered = category === 'todas' ? pizzas : pizzas.filter(p => p.cat === category);
    renderPizzas(filtered);
    
    // Cambiar estado de botones
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Inicializar
renderPizzas(pizzas);

// Render Bebidas
document.getElementById('bebida-grid').innerHTML = bebidas.map(b => `
    <div class="card">
        <h3>${b.name}</h3>
        <p>${b.desc}</p>
        <div class="price">$${b.price}</div>
        <a href="https://wa.me/573160424560?text=Hola,%20quiero%20pedir%20la%20bebida%20${b.name}" class="btn-order">Pedir por WhatsApp</a>
    </div>
`).join('');
