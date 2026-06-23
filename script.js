// ==========================================
// 1. BASE DE DATOS DE PRODUCTOS
// ==========================================
const products = [
    // --- REFACCIONES AUTOMOTRICES ---
    {
        id: 1, isNew: true, title: "Amortiguadores Traseros Premium", category: "Refacciones", price: 1735.00,
        images: ["https://m.media-amazon.com/images/I/719V8uJDZRL._AC_SX522_.jpg", "https://m.media-amazon.com/images/I/71WowKq+Q4L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/81yhninBk3L._AC_SX522_.jpg"],
        description: "Set de amortiguadores de gas de alta durabilidad para una conducción suave y segura."
    },
    {
        id: 2, isNew: false, title: "Filtro de Aceite Sintético", category: "Refacciones", price: 1358.00,
        images: ["https://m.media-amazon.com/images/I/61zZpX0P+kL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/719JoYRO8LL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71co+iJL4VL._AC_SX522_.jpg" ],
        description: "Filtro de alto rendimiento que atrapa hasta el 99% de las impurezas del motor."
    },
    {
        id: 3, isNew: true, title: "Balatas de Cerámica", category: "Refacciones", price: 6476.00,
        images: ["https://m.media-amazon.com/images/I/71ot4I1QXsL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71HMano9JwL._AC_SX522_.jpg"],
        description: "Frenado silencioso y con menor emisión de polvo. Ideal para manejo en ciudad."
    },
    {
        id: 4, isNew: false, title: "Batería de Gel 12V", category: "Refacciones", price: 6348.00,
        images: ["https://m.media-amazon.com/images/I/613o7DeQ-6L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/61Cd+ieJ7UL._AC_SX522_.jpg" ,"https://m.media-amazon.com/images/I/712Rz8WdjUL._AC_SX522_.jpg"],
        description: "Batería libre de mantenimiento con tecnología de gel para mayor vida útil y rendimiento en climas extremos."
    },
    {
        id: 5, isNew: false, title: "Kit de Faros LED Luz Blanca", category: "Refacciones", price: 6987.00,
        images: ["https://m.media-amazon.com/images/I/71FwMAKGw4L._AC_SY300_SX300_QL70_ML2_.jpg" , "https://m.media-amazon.com/images/I/818uYsa2olL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71B3jVB0y3L._AC_SX522_.jpg"],
        description: "Iluminación de 8000 lúmenes con diseño de disipación de calor ultradelgado."
    },
    {
        id: 16, isNew: false, title: "Convertidor catalítico trasero", category: "Refacciones", price: 1442.00,
        images: ["https://m.media-amazon.com/images/I/71r2v4B9ZmL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71BnoTnBQ9L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71NvU+36u1L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71V-0iaGqzL._AC_SX522_.jpg"],
        description: "PHILTOP - Convertidor catalítico trasero compatible con Honda Acura, 2005-2008 Odyssey/Pilot 3.5L, 2003-2007 Accord 3.0L, 2004-2008 TL 3.2L, 2006-2011 Ridgeline 3.5L, 2003-20006 MDX 3.5 L"
    },

    // --- ELECTRÓNICA ---
    {
        id: 6, isNew: true, title: "Audífonos Inalámbricos Minimal", category: "Electrónica", price: 999.00,
        images: ["https://m.media-amazon.com/images/I/61XQQPIo2cL._AC_SY679_.jpg" , "https://m.media-amazon.com/images/I/71+8Sf57C3L._AC_SY679_.jpg" , "https://m.media-amazon.com/images/I/61v+nEtx31L._AC_SY679_.jpg"],
        description: "Cancelación de ruido activa, batería de 30 horas y diseño en aluminio pulido."
    },
    {
        id: 7, isNew: false, title: "Smartwatch Deportivo V2", category: "Electrónica", price: 1500.00,
        images: ["https://m.media-amazon.com/images/I/61BG7aYMZEL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/614pAKkequL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/61qRWT+M+VL._AC_SX522_.jpg" ,"https://m.media-amazon.com/images/I/61dhz9ZKpKL._AC_SX522_.jpg"],
        description: "Caja de acero inoxidable, GPS integrado y resistencia al agua hasta 50 metros."
    },
    {
        id: 8, isNew: true, title: "Teclado Mecánico Elegante", category: "Electrónica", price: 2199.00,
        images: ["https://m.media-amazon.com/images/I/61mB8mL33pL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71eMryluCJL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/61GleNTVFOL._AC_SX522_.jpg"],
        description: "Switches silenciosos, retroiluminación blanca sutil y chasis de aleación de magnesio."
    },
    {
        id: 9, isNew: false, title: "Monitor 4K Profesional", category: "Electrónica", price: 8534.00,
        images: ["https://m.media-amazon.com/images/I/91dkLCfM8dL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/712-CXJj6oL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71PpaJoDtQL._AC_SX522_.jpg"],
        description: "Pantalla sin bordes de 27 pulgadas, calibración de color de fábrica y soporte ergonómico ajustable."
    },
    {
        id: 10, isNew: false, title: "Altavoz Bluetooth Portátil", category: "Electrónica", price: 800.00,
        images: ["https://m.media-amazon.com/images/I/71wOrl8wEwL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71DD1+YAhVL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/61HT5x6yFxL._AC_SX522_.jpg"],
        description: "Sonido envolvente de 360 grados recubierto en tela premium acústicamente transparente."
    },

    // --- HOGAR ---
    {
        id: 11, isNew: false, title: "Lámpara de Escritorio LED", category: "Hogar", price: 1200.00,
        images: ["https://m.media-amazon.com/images/I/61ForvYNpnL._AC_SX679_.jpg" , "https://m.media-amazon.com/images/I/71arG4FzoQL._AC_SX679_.jpg" , "https://m.media-amazon.com/images/I/718S49LzIEL._AC_SX679_.jpg" , "https://m.media-amazon.com/images/I/71oQ8vknmBL._AC_SX679_.jpg"],
        description: "Iluminación cálida regulable con control táctil. Líneas sobrias y limpias."
    },
    {
        id: 12, isNew: true, title: "Purificador de Aire Silencioso", category: "Hogar", price: 1999.00,
        images: ["https://m.media-amazon.com/images/I/71t-9BTIg9L._AC_SY879_.jpg" , "https://m.media-amazon.com/images/I/7176A9IqNZL._AC_SX679_.jpg" , "https://m.media-amazon.com/images/I/714IzGtWarL._AC_SX679_.jpg"],
        description: "Filtro HEPA H13, neutraliza el 99.9% de partículas con un diseño cilíndrico discreto."
    },
    {
        id: 13, isNew: true, title: "Cafetera Espresso Manual", category: "Hogar", price: 3599.00,
        images: ["https://m.media-amazon.com/images/I/61USO6Qu13L._AC_SX679_.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBLBhHdBkLXnnVeAqFTtsQ99jdM8Zv5thUjYMw_TGog&s=10" , "https://m.media-amazon.com/images/I/712kgdHs7AL._AC_SX679_.jpg"],
        description: "Extracción a 15 bares, acabados en acero mate y portafiltros profesional."
    },
    {
        id: 14, isNew: false, title: "Set de Cuchillos de Chef", category: "Hogar", price: 1735.00,
        images: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=800"],
        description: "Acero al carbono japonés forjado en una sola pieza, equilibrio perfecto y corte de precisión."
    },
    {
        id: 15, isNew: false, title: "Silla de Oficina Ergonómica", category: "Hogar", price: 2399.00,
        images: ["https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800"],
        description: "Soporte lumbar dinámico, malla transpirable negra y estructura de aluminio."
    }
];

// ==========================================
// 2. ELEMENTOS DEL DOM
// ==========================================
// Generales y Vistas
const catalogView = document.getElementById('catalog-view');
const nosotrosView = document.getElementById('nosotros-view');
const btnNosotros = document.getElementById('nav-nosotros');
const btnContactoNav = document.getElementById('nav-contacto');
// Variables del menú desplegable (Faltaban en tu código)
const dropBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

const grid = document.getElementById('product-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const sectionTitle = document.getElementById('section-title');

// Modal de Producto
const modal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close-btn');
const contactBtn = document.getElementById('modal-contact-btn');

// Modal de Contacto
const contactModal = document.getElementById('contact-modal');
const closeContactBtn = document.querySelector('.close-contact-btn');
const contactForm = document.getElementById('product-contact-form');
const formContainer = document.getElementById('form-container');
const successMessage = document.getElementById('success-message');
const closeSuccessBtn = document.querySelector('.close-success-btn');
const inputClientProduct = document.getElementById('client-product');

// ==========================================
// 3. VARIABLES DE ESTADO GLOBALES
// ==========================================
let currentCategory = "Todos";
let currentSearchTerm = "";
let productoSeleccionado = "";

// ==========================================
// 4. LÓGICA DE NAVEGACIÓN (VISTAS Y FILTROS)
// ==========================================

// A. Evento para abrir la vista "Nosotros"
btnNosotros.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Cambiar estilos de los botones
    filterBtns.forEach(b => b.classList.remove('active'));
    btnNosotros.classList.add('active');

    // Cambiar las vistas (Oculta catálogo, muestra nosotros)
    catalogView.style.display = 'none';
    nosotrosView.style.display = 'block';
});

// B. Evento para los botones de Categorías del Catálogo
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Quitar 'active' de todos lados, incluido "Nosotros"
        filterBtns.forEach(b => b.classList.remove('active'));
        btnNosotros.classList.remove('active');
        
        // Poner 'active' en el botón clickeado
        e.target.classList.add('active');
        
        // Regresar a la vista del Catálogo siempre
        catalogView.style.display = 'block';
        nosotrosView.style.display = 'none';

        // Procesar y renderizar los productos
        currentCategory = e.target.getAttribute('data-category');
        renderProducts();
    });
});

// C. Evento para la Barra de Búsqueda (Inteligente)
searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value;
    
    // Si el usuario escribe algo estando en la pestaña "Nosotros", 
    // lo regresamos automáticamente al catálogo para que vea los resultados.
    if (nosotrosView.style.display === 'block') {
        catalogView.style.display = 'block';
        nosotrosView.style.display = 'none';
        btnNosotros.classList.remove('active');
        
        // Mantenemos la categoría en "Todos" visualmente
        filterBtns.forEach(b => {
            if(b.getAttribute('data-category') === 'Todos') b.classList.add('active');
        });
        currentCategory = "Todos";
    }
    
    renderProducts();
});

// Lógica para el botón "Categorías" (Faltaba en tu código)
dropBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle('show-menu');
});

// Ocultar el menú si haces clic fuera de él
window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
        if (dropdownContent && dropdownContent.classList.contains('show-menu')) {
            dropdownContent.classList.remove('show-menu');
        }
    }
});

// ==========================================
// 5. RENDERIZADO PRINCIPAL (SKELETONS Y TARJETAS)
// ==========================================
function renderProducts() {
    grid.innerHTML = "";

    // A. Inyectar Skeleton Loaders
    for(let i = 0; i < 6; i++) { 
        grid.innerHTML += `
            <div class="skeleton-card">
                <div class="skeleton skeleton-img"></div>
                <div class="skeleton-content">
                    <div class="skeleton skeleton-text-short"></div>
                    <div class="skeleton skeleton-text-long"></div>
                    <div class="skeleton skeleton-btn"></div>
                </div>
            </div>
        `;
    }

    // B. Filtrado inteligente
    let filteredProducts = [];
    if (currentSearchTerm.trim() !== "") {
        sectionTitle.innerText = `Resultados para "${currentSearchTerm}"`;
        const searchTerm = currentSearchTerm.toLowerCase();
        filteredProducts = products.filter(p => 
            p.title.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm)
        );
    } else if (currentCategory === "Todos") {
        sectionTitle.innerText = "Novedades Destacadas";
        filteredProducts = products.filter(p => p.isNew === true);
    } else {
        sectionTitle.innerText = `Catálogo: ${currentCategory}`;
        filteredProducts = products.filter(p => p.category === currentCategory);
    }

    // C. Reemplazar skeletons con tarjetas reales
    clearTimeout(window.loadingTimeout);
    window.loadingTimeout = setTimeout(() => {
        grid.innerHTML = ""; 

        if (filteredProducts.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; font-size: 1.2rem; padding: 3rem 0;">No se encontraron productos que coincidan con tu búsqueda.</p>`;
            return;
        }

        filteredProducts.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.onclick = () => openModal(product);

            const newBadge = product.isNew && currentCategory !== "Todos" 
                ? `<span style="position:absolute; top:10px; right:10px; background:var(--accent-color); color:white; font-size:0.7rem; padding:4px 8px; border-radius:4px; font-weight:bold; z-index:10;">NUEVO</span>` 
                : '';

            card.innerHTML = `
                <div style="position: relative; overflow: hidden; border-radius: 12px 12px 0 0;">
                    ${newBadge}
                    <img src="${product.images[0]}" alt="${product.title}">
                </div>
                <div class="card-content">
                    <span class="card-category">${product.category}</span>
                    <h3 class="card-title">${product.title}</h3>
                    <p class="card-price">$${product.price.toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN</p>
                    <button class="btn-primary" onclick="event.stopPropagation(); openModal(${product.id})">Ver Detalles</button>
                </div>
            `;
            
            // Animación en cascada
            card.style.animation = "slideUp 0.5s ease forwards";
            card.style.animationDelay = `${index * 0.05}s`;
            card.style.opacity = "0"; 
            
            grid.appendChild(card);
        });
    }, 600); 
}

// ==========================================
// 6. LÓGICA DEL MODAL DE PRODUCTO (GALERÍA)
// ==========================================
function openModal(itemInput) {
    const product = typeof itemInput === 'number' 
        ? products.find(p => p.id === itemInput) 
        : itemInput;

    const mainImg = document.getElementById('modal-main-img');
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    
    // Configurar galería interactiva
    mainImg.src = product.images[0];
    thumbnailsContainer.innerHTML = '';
    
    product.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        
        thumb.addEventListener('click', () => {
            mainImg.style.opacity = 0;
            setTimeout(() => {
                mainImg.src = imgSrc;
                mainImg.style.opacity = 1;
            }, 200);
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumb);
    });

    // Inyectar textos sin duplicar
    document.getElementById('modal-category').innerText = product.category;
    document.getElementById('modal-category').className = 'card-category';
    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-price').innerText = `$${product.price.toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN`;
    document.getElementById('modal-desc').innerText = product.description;
    
    // Guardar título
    productoSeleccionado = product.title;

    modal.classList.add('show');
}

// ==========================================
// 7. LÓGICA DEL MODAL DE CONTACTO
// ==========================================
contactBtn.onclick = (e) => {
    e.preventDefault(); 
    modal.classList.remove('show'); 
    inputClientProduct.value = productoSeleccionado; 
    
    formContainer.style.display = 'block';
    successMessage.style.display = 'none';
    
    document.getElementById('client-name').value = '';
    document.getElementById('client-phone').value = '';
    document.getElementById('client-email').value = '';
    
    setTimeout(() => { contactModal.classList.add('show'); }, 200); 
};

// NUEVO: Abrir Modal de Contacto desde el Menú Superior
btnContactoNav.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Como es desde el menú, es una consulta general (no un producto específico)
    inputClientProduct.value = "Consulta General"; 
    
    // Limpiar el formulario
    formContainer.style.display = 'block';
    successMessage.style.display = 'none';
    
    document.getElementById('client-name').value = '';
    document.getElementById('client-phone').value = '';
    document.getElementById('client-email').value = '';
    
    // Mostrar el modal
    contactModal.classList.add('show');
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    formContainer.style.display = 'none';
    successMessage.style.display = 'block';
});

// ==========================================
// 8. EVENTOS DE CIERRE DE MODALES Y ARRANQUE
// ==========================================
function closeContactModal() {
    contactModal.classList.remove('show');
}

closeBtn.addEventListener('click', () => modal.classList.remove('show'));
closeContactBtn.addEventListener('click', closeContactModal);
closeSuccessBtn.addEventListener('click', closeContactModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
    if (e.target === contactModal) closeContactModal();
});

// ¡Arranca la página!
renderProducts();