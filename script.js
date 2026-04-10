const menuPizzas = [
    // PREMIUM
    { id: 1, name: "Sorrento", cat: "premium", prices: { pequena: 28000, mediana: 52000, grande: 72000 }, combinable: true },
    { id: 2, name: "Ibérica", cat: "premium", prices: { pequena: 28000, mediana: 52000, grande: 72000 }, combinable: true },
    { id: 3, name: "Picantezza", cat: "premium", prices: { pequena: 28000, mediana: 52000, grande: 72000 }, combinable: true },
    
    // ESPECIALES
    { id: 4, name: "Azteca", cat: "especial", prices: { pequena: 25000, mediana: 47000, grande: 64000 }, combinable: true },
    { id: 5, name: "Quattro Formaggi", cat: "especial", prices: { pequena: 25000, mediana: 47000, grande: 64000 }, combinable: true },
    { id: 6, name: "Pizza Lasaña", cat: "especial", prices: { pequena: 25000, mediana: 47000, grande: 64000 }, combinable: false }, // NO COMBINABLE
    
    // TEMPORADA
    { id: 7, name: "Pollo e Funghi", cat: "especial", prices: { mediana: 60000 }, combinable: false }, // NO COMBINABLE
    
    // CLASICAS
    { id: 8, name: "Hawaiana", cat: "clasica", prices: { pequena: 20000, mediana: 38000, grande: 52000 }, combinable: true },
    { id: 9, name: "Pepperoni", cat: "clasica", prices: { pequena: 20000, mediana: 38000, grande: 52000 }, combinable: true }
];

function renderPizzas(items) {
    const grid = document.getElementById('pizza-grid');
    grid.innerHTML = items.map(p => {
        // Generar opciones de precio según disponibilidad
        let priceHtml = p.prices.mediana ? `<span>Mediana: $${p.prices.mediana.toLocaleString()}</span>` : `<span>Consulte precio</span>`;
        
        return `
            <div class="card">
                <div class="badge">${p.combinable ? 'Combinable' : 'Individual'}</div>
                <h3>${p.name}</h3>
                <div class="price-list">${priceHtml}</div>
                <button onclick="orderSingle('${p.name}')" class="btn-order">Pedir ahora</button>
            </div>
        `;
    }).join('');
}

// LOGICA DE COMBINACIÓN
function openComboModal() {
    const modal = document.getElementById('comboModal');
    const h1 = document.getElementById('half1');
    const h2 = document.getElementById('half2');
    
    // Solo mostramos las que se pueden combinar
    const options = menuPizzas.filter(p => p.combinable)
        .map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    
    h1.innerHTML = options;
    h2.innerHTML = options;
    modal.style.display = 'flex';
    updateComboPrice();
}

function updateComboPrice() {
    const size = document.getElementById('comboSize').value;
    const p1 = menuPizzas.find(p => p.id == document.getElementById('half1').value);
    const p2 = menuPizzas.find(p => p.id == document.getElementById('half2').value);
    
    // Regla: Se cobra la de mayor valor
    const price1 = p1.prices[size] || 0;
    const price2 = p2.prices[size] || 0;
    const finalPrice = Math.max(price1, price2);
    
    document.getElementById('totalCombo').innerText = `Total: $${finalPrice.toLocaleString()}`;
}

function sendComboWhatsApp() {
    const size = document.getElementById('comboSize').value;
    const p1 = menuPizzas.find(p => p.id == document.getElementById('half1').value).name;
    const p2 = menuPizzas.find(p => p.id == document.getElementById('half2').value).name;
    const total = document.getElementById('totalCombo').innerText;

    const msg = `Hola Aki Tu Pizza! Quisiera pedir una pizza COMBINADA (${size.toUpperCase()}):\n- Mitad 1: ${p1}\n- Mitad 2: ${p2}\n${total}`;
    window.open(`https://wa.me/573160424560?text=${encodeURIComponent(msg)}`, '_blank');
}

function closeComboModal() {
    document.getElementById('comboModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => renderPizzas(menuPizzas));
