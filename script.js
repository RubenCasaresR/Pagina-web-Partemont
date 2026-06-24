// ==========================================
// 1. BASE DE DATOS DE PRODUCTOS
// ==========================================
const products = [
    // --- REFACCIONES AUTOMOTRICES ---
    {
        id: 1, isNew: true, title: "Amortiguadores Traseros Premium", category: "Refacciones", price: 1735.00,
        images: ["https://m.media-amazon.com/images/I/719V8uJDZRL._AC_SX522_.jpg", "https://m.media-amazon.com/images/I/71WowKq+Q4L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/81yhninBk3L._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/Premium-amortiguadores-compatible-2008-2020-Volkswagen/dp/B0CWP8YRNP",
        description: "Set de amortiguadores de gas de alta durabilidad para una conducción suave y segura."
    },
    {
        id: 2, isNew: false, title: "Filtro de Aceite Sintético", category: "Refacciones", price: 1358.00,
        images: ["https://m.media-amazon.com/images/I/61zZpX0P+kL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/719JoYRO8LL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71co+iJL4VL._AC_SX522_.jpg" ],
        amazonUrl: "https://www.amazon.com.mx/Bosch-3330-Premium-Filtech-Filtro/dp/B002EBSLA4",
        description: "Filtro de alto rendimiento que atrapa hasta el 99% de las impurezas del motor."
    },
    {
        id: 3, isNew: true, title: "Balatas de Cerámica", category: "Refacciones", price: 6476.00,
        images: ["https://m.media-amazon.com/images/I/71ot4I1QXsL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71HMano9JwL._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/Bosch-Juego-Pastillas-BE1000H-Accesorios/dp/B00MY3R1WG",
        description: "Frenado silencioso y con menor emisión de polvo. Ideal para manejo en ciudad."
    },
    {
        id: 4, isNew: false, title: "Batería de Gel 12V", category: "Refacciones", price: 6348.00,
        images: ["https://m.media-amazon.com/images/I/613o7DeQ-6L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/61Cd+ieJ7UL._AC_SX522_.jpg" ,"https://m.media-amazon.com/images/I/712Rz8WdjUL._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/ML35-12GEL-Temrinal-Recargable-Producto-Original/dp/B01HC55J24",
        description: "Batería libre de mantenimiento con tecnología de gel para mayor vida útil y rendimiento en climas extremos."
    },
    {
        id: 5, isNew: false, title: "Kit de Faros LED Luz Blanca", category: "Refacciones", price: 6987.00,
        images: ["https://m.media-amazon.com/images/I/71FwMAKGw4L._AC_SY300_SX300_QL70_ML2_.jpg" , "https://m.media-amazon.com/images/I/818uYsa2olL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71B3jVB0y3L._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/Duo-Lu-Tong-50000LM-Bombillas/dp/B0G2LLKZT7",
        description: "Iluminación de 8000 lúmenes con diseño de disipación de calor ultradelgado."
    },
    {
        id: 6, isNew: false, title: "Convertidor catalítico trasero", category: "Refacciones", price: 1442.00,
        images: ["https://m.media-amazon.com/images/I/71r2v4B9ZmL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71BnoTnBQ9L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71NvU+36u1L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71V-0iaGqzL._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/dp/B0DQ4K8CLH",
        description: "PHILTOP - Convertidor catalítico trasero compatible con Honda Acura, 2005-2008 Odyssey/Pilot 3.5L, 2003-2007 Accord 3.0L, 2004-2008 TL 3.2L, 2006-2011 Ridgeline 3.5L, 2003-20006 MDX 3.5 L"
    },
    {
        id: 7, isNew: false, title: "Antimpacto Delantera Aveo", category: "Refacciones", price: 783.00,
        images: ["https://www.mazautopartes.net/fotos/productos/164985-ANDCAE12.jpg"],
        amazonUrl: "https://www.mazautopartes.net/antimpacto/antimpacto-delantera-aveo-2012-2013-2014-2015-2016-2017-dmv-677-sku-ANDCAE12.html",
        description: "Antimpacto Delantera Aveo 2012 2013 2014 2015 2016 2017 Dmv 677"
    },
    {
        id: 8, isNew: false, title: "Espejo Corolla Croos", category: "Refacciones", price: 3581.00,
        images: ["https://www.mazautopartes.net/fotos/productos/eltcc22er.jpg"],
        amazonUrl: "https://www.mazautopartes.net/espejo/espejo-corolla-croos-2022-2023-elect-p-pint-c-direcc-c-sensor-punto-ciego-c-desemp-8-pines-230908-der-sku-ELTCC22ER.html",
        description: "Espejo Corolla Croos 2022-2023 Elect P/Pint C/Direcc C/Sensor Punto Ciego C/Desemp 8 Pines 230908 Der"
    },
    {
        id: 9, isNew: false, title: "Garselay Kit de Gato Hidráulico para Auto", category: "Refacciones", price: 1442.00,
        images: ["https://m.media-amazon.com/images/I/61J+18FEX-L._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71a41rkYFvL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71CCKlORbiL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71ZKAJY9ShL._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/Garselay-Kit-de-Gato-Hidr%C3%A1ulico-para-Auto/dp/B0DGTQSTQZ",
        description: "Garselay Kit de Gato Hidráulico para Auto - 3 Toneladas Gato Portátil para Auto - Kit de Gato Compacto para Automóvil para SUV, RV y MPV con Diseño de Trinquete Inteligente"
    },
    {
        id: 10, isNew: false, title: "Radiador Agua S/Aire", category: "Refacciones", price: 5687.00,
        images: ["https://www.mazautopartes.net/fotos/productos/CRNK0100.png"],
        amazonUrl: "https://www.mazautopartes.net/radiador/radiador-agua-s-aire-std-380%C2%97370%C2%9722mm-t-mecanico-chrysler-dodge-atos-1-0l-2000-2004-sku-CRNK0100.html",
        description: "Radiador Agua S/Aire Std 380*370*22Mm T/Mecanico Chrysler / Dodge Atos 1.0L 2000 2004"
    },
    {
        id: 11, isNew: false, title: "Puerta Trasera Der (Color/Negro) Chevrolet Cruze 2010 2015", category: "Refacciones", price: 1751.00,
        images: ["https://www.mazautopartes.net/fotos/productos/CZNC1003.jpg"],
        amazonUrl: "https://www.mazautopartes.net/puerta/puerta-trasera-derecho-cruze-2010-2015-sku-CZNC1003.html",
        description: "Puerta Trasera Der (Color/Negro) Chevrolet Cruze 2010 2015"
    },
    {
        id: 12, isNew: false, title: "Contra Chapa Cofre Wrangler 87-96 Revi", category: "Refacciones", price: 125.00,
        images: ["https://www.mazautopartes.net/fotos/productos/165951-55009343.jpg" , "" , "" , ""],
        amazonUrl: "https://www.mazautopartes.net/chapas-y-contra-chapas/contra-chapa-cofre-wrangler-87-96-334-revi-sku-55009343.html",
        description: "Contra Chapa Cofre Wrangler 87-96 Revi"
    },
     {
        id: 13, isNew: false, title: "Defensa Delantera Taos 2021-2022-2023 Inf", category: "Refacciones", price: 125.00,
        images: ["https://www.mazautopartes.net/fotos/productos/ddvta21i.jpg"],
        amazonUrl: "https://www.mazautopartes.net/defensa/defensa-delantera-taos-2021-2022-2023-inf-sku-DDVTA21I.html",
        description: "Defensa Delantera Taos 2021-2022-2023 Inf"
    }, {
        id: 14, isNew: false, title: "Cofre S/Hoyo (Color/Gris)", category: "Refacciones", price: 1300.00,
        images: ["https://www.mazautopartes.net/fotos/productos/CCJP0510.jpg"],
        amazonUrl: "https://www.mazautopartes.net/cofre/cofre-s-hoyo-color-gris-3-4-5ptas-peugeot-pg-207-2012-2013-sku-CCJP0500.html",
        description: "Cofre S/Hoyo (Color/Gris) 3-4-5Ptas Peugeot Pg-207 Compact 2008 2012"
    }, {
        id: 15, isNew: false, title: "Bomba De Frenos S/Deposito", category: "Refacciones", price: 125.00,
        images: ["https://www.mazautopartes.net/fotos/productos/bfnc0110.jpg"],
        amazonUrl: "https://www.mazautopartes.net/bomba-de-frenos/bomba-de-frenos-s-deposito-20-64mm-c-3-09-12-pick-up-99-04-chevrolet-chevy-1-6l-2001-2003-sku-BFNC0110.html",
        description: "Bomba De Frenos S/Deposito 20.64Mm (C-3 09-12/Pick-Up 99-04) Chevrolet Chevy 1.6L 2001 2003"
    },

    // --- ELECTRÓNICA ---
    {
        id: 16, isNew: true, title: "Audífonos Inalámbricos Minimal", category: "Electrónica", price: 999.00,
        images: ["https://m.media-amazon.com/images/I/61XQQPIo2cL._AC_SY679_.jpg" , "https://m.media-amazon.com/images/I/71+8Sf57C3L._AC_SY679_.jpg" , "https://m.media-amazon.com/images/I/61v+nEtx31L._AC_SY679_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/dp/B0D35J7VDR",
        description: "Cancelación de ruido activa, batería de 30 horas y diseño en aluminio pulido."
    },
    {
        id: 17, isNew: false, title: "Smartwatch Deportivo V2", category: "Electrónica", price: 1500.00,
        images: ["https://m.media-amazon.com/images/I/61BG7aYMZEL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/614pAKkequL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/61qRWT+M+VL._AC_SX522_.jpg" ,"https://m.media-amazon.com/images/I/61dhz9ZKpKL._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/XIAOMI-Smartwatch-Resistencia-Entrenamiento-Monitoreo/dp/B0DFZPR9Z4",
        description: "Caja de acero inoxidable, GPS integrado y resistencia al agua hasta 50 metros."
    },
    {
        id: 18, isNew: true, title: "Teclado Mecánico Elegante", category: "Electrónica", price: 2199.00,
        images: ["https://m.media-amazon.com/images/I/61mB8mL33pL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71eMryluCJL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/61GleNTVFOL._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/F99-intercambiable-interruptores-prelubricados-retroiluminado/dp/B0CLLHSWRL",
        description: "Switches silenciosos, retroiluminación blanca sutil y chasis de aleación de magnesio."
    },
    {
        id: 19, isNew: false, title: "Monitor 4K Profesional", category: "Electrónica", price: 8534.00,
        images: ["https://m.media-amazon.com/images/I/91dkLCfM8dL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/712-CXJj6oL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71PpaJoDtQL._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/Asus-PA279CRV/dp/B0BQPSX5CR",
        description: "Pantalla sin bordes de 27 pulgadas, calibración de color de fábrica y soporte ergonómico ajustable."
    },
    {
        id: 20, isNew: false, title: "Altavoz Bluetooth Portátil", category: "Electrónica", price: 800.00,
        images: ["https://m.media-amazon.com/images/I/71wOrl8wEwL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/71DD1+YAhVL._AC_SX522_.jpg" , "https://m.media-amazon.com/images/I/61HT5x6yFxL._AC_SX522_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/XIAOMI-Reproducci%C3%B3n-Waterproof-Bluetooth-micr%C3%B3fono/dp/B0CZRLRGM5",
        description: "Sonido envolvente de 360 grados recubierto en tela premium acústicamente transparente."
    },
    {
        id: 21, isNew: true, title: "Laptop UltraBook 14\"", category: "Electrónica", price: 18500.00,
        images: [
            "https://m.media-amazon.com/images/I/61FeIMM0IzL._AC_SX522_.jpg", 
            "https://m.media-amazon.com/images/I/419JUSLGdEL._AC_SX522_.jpg",
            "https://m.media-amazon.com/images/I/51exQzEQL-L._AC_SX522_.jpg"
        ],
        amazonUrl: "https://www.amazon.com.mx/dp/B0D4GP1P4F",
        description: "Procesador de última generación, 16GB de RAM y chasis de aluminio ultraligero. Ideal para productividad en movimiento."
    },
    {
        id: 22, isNew: false, title: "Tablet Pro 11 Pulgadas", category: "Electrónica", price: 12999.00,
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&q=80&w=800"
        ],
        amazonUrl: "https://www.amazon.com.mx/s?k=Tablet+11+pulgadas+android+tableta",
        description: "Pantalla Liquid Retina, soporte para lápiz óptico y potencia suficiente para reemplazar tu computadora portátil."
    },
    {
        id: 23, isNew: true, title: "Cámara Mirrorless 4K", category: "Electrónica", price: 24500.00,
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=800"
        ],
        amazonUrl: "https://www.amazon.com.mx/s?k=C%C3%A1mara+mirrorless+4K+sony+canon+sin+espejo",
        description: "Sensor Full-Frame de 24MP, autoenfoque ocular híbrido y grabación de video 4K sin recortes."
    },
    {
        id: 24, isNew: false, title: "Consola de Videojuegos Next-Gen", category: "Electrónica", price: 11499.00,
        images: [
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800"
        ],
        amazonUrl: "https://www.amazon.com.mx/Consola-PlayStation-5-Standard-Edition/dp/B09HTN51HN",
        description: "Experimenta tiempos de carga ultrarrápidos con SSD de alta velocidad y gráficos inmersivos con Ray Tracing."
    },
    {
        id: 25, isNew: true, title: "Drone con Cámara 8K", category: "Electrónica", price: 28900.00,
        images: [
            "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800"
        ],
        amazonUrl: "https://www.amazon.com.mx/Dron-C%C3%A1mara-F%C3%A1cil-Viajes-Principiantes/dp/B0H5JXYM8D",
        description: "Detección de obstáculos omnidireccional, 45 minutos de vuelo y captura de video de grado cinematográfico."
    },
    {
        id: 26, isNew: false, title: "Barra de Sonido Dolby Atmos", category: "Electrónica", price: 6500.00,
        images: [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800"
        ],
        amazonUrl: "https://www.amazon.com.mx/s?k=Barra+sonido+Dolby+Atmos+subwoofer+inal%C3%A1mbrico",
        description: "Sistema 5.1.2 canales con subwoofer inalámbrico. Transforma tu sala en una sala de cine."
    },
    {
        id: 27, isNew: true, title: "Visor de Realidad Virtual", category: "Electrónica", price: 8999.00,
        images: [
            "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800"
        ],
        amazonUrl: "https://www.amazon.com.mx/ADATA-AHD710P-2TU31-CBK-Disco-Externo-Color/dp/B0744NCY4K",
        description: "Completamente inalámbrico, resolución 4K por ojo y seguimiento de manos preciso sin necesidad de PC."
    },
    {
        id: 28, isNew: false, title: "Disco Duro Externo 2TB SSD", category: "Electrónica", price: 3200.00,
        images: [
            "https://m.media-amazon.com/images/I/71DI8ShgwTL._AC_SY300_SX300_QL70_ML2_.jpg",
            "https://m.media-amazon.com/images/I/81oBNpgdIiL._AC_SX522_.jpg",
            "https://m.media-amazon.com/images/I/715sRloO7tL._AC_SX522_.jpg"
        ],
        amazonUrl: "https://www.amazon.com.mx/s?k=Disco+duro+externo+2TB+SSD+port%C3%A1til+USB+3.0",
        description: "Velocidades de lectura de hasta 1050 MB/s, carcasa resistente a caídas y encriptación por hardware."
    },
    {
        id: 29, isNew: false, title: "Micrófono de Condensador USB", category: "Electrónica", price: 2100.00,
        images: [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1588667687842-b05b76c8c4a1?auto=format&fit=crop&q=80&w=800"
        ],
        amazonUrl: "https://www.amazon.com.mx/s?k=Micr%C3%B3fono+condensador+USB+cardioide+para+PC+streaming",
        description: "Patrón polar cardioide, salida de auriculares sin latencia y soporte de escritorio ajustable. Perfecto para podcasts y streaming."
    },
    {
        id: 30, isNew: true, title: "Router Wi-Fi 6 Mesh (Pack de 2)", category: "Electrónica", price: 4800.00,
        images: [
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1558227031-645c3866184f?auto=format&fit=crop&q=80&w=800"
        ],
        amazonUrl: "https://www.amazon.com.mx/TP-Link-Archer-C6-1167Mbps-externas/dp",
        description: "Elimina zonas muertas. Cobertura de hasta 400 metros cuadrados y soporte para más de 100 dispositivos conectados."
    },

    // --- HOGAR ---
    {
        id: 31, isNew: false, title: "Lámpara de Escritorio LED", category: "Hogar", price: 1200.00,
        images: ["https://m.media-amazon.com/images/I/61ForvYNpnL._AC_SX679_.jpg" , "https://m.media-amazon.com/images/I/71arG4FzoQL._AC_SX679_.jpg" , "https://m.media-amazon.com/images/I/718S49LzIEL._AC_SX679_.jpg" , "https://m.media-amazon.com/images/I/71oQ8vknmBL._AC_SX679_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/Escritorio-Salandens-Abrazadera-eficiencia-energ%C3%A9tica/dp/B08F5JMR9Z",
        description: "Iluminación cálida regulable con control táctil. Líneas sobrias y limpias."
    },
    {
        id: 32, isNew: true, title: "Purificador de Aire Silencioso", category: "Hogar", price: 1999.00,
        images: ["https://m.media-amazon.com/images/I/71t-9BTIg9L._AC_SY879_.jpg" , "https://m.media-amazon.com/images/I/7176A9IqNZL._AC_SX679_.jpg" , "https://m.media-amazon.com/images/I/714IzGtWarL._AC_SX679_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/gp/aw/d/B09P4NL3DW",
        description: "Filtro HEPA H13, neutraliza el 99.9% de partículas con un diseño cilíndrico discreto."
    },
    {
        id: 33, isNew: true, title: "Cafetera Espresso Manual", category: "Hogar", price: 3599.00,
        images: ["https://m.media-amazon.com/images/I/61USO6Qu13L._AC_SX679_.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBLBhHdBkLXnnVeAqFTtsQ99jdM8Zv5thUjYMw_TGog&s=10" , "https://m.media-amazon.com/images/I/712kgdHs7AL._AC_SX679_.jpg"],
        amazonUrl: "https://www.amazon.com.mx/Flair-Espresso-Maker-Manual-Press/dp/B06X916JM8",
        description: "Extracción a 15 bares, acabados en acero mate y portafiltros profesional."
    },
    {
        id: 34, isNew: false, title: "Set de Cuchillos de Chef", category: "Hogar", price: 1735.00,
        images: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=800"],
        amazonUrl: "https://www.amazon.com.mx/s?k=Set+cuchillos+chef+acero+inoxidable+japon%C3%A9s+forjado",
        description: "Acero al carbono japonés forjado en una sola pieza, equilibrio perfecto y corte de precisión."
    },
    {
        id: 35, isNew: false, title: "Silla de Oficina Ergonómica", category: "Hogar", price: 2399.00,
        images: ["https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800"],
        amazonUrl: "https://www.amazon.com.mx/s?k=Silla+oficina+ergon%C3%B3mica+malla+soporte+lumbar+ejecutiva",
        description: "Soporte lumbar dinámico, malla transpirable negra y estructura de aluminio."
    },
    // --- MÁS PRODUCTOS DE HOGAR ---
    {
        id: 36, isNew: true, title: "Aspiradora Robot Inteligente", category: "Hogar", price: 4500.00,
        images: [
            "https://m.media-amazon.com/images/I/61LywBn8yEL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61ZoQLgTwML._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81b31A6n7uL._AC_SX679_.jpg"
        ],
        amazonUrl: "https://www.amazon.com.mx/DREAME-D15-Inteligente-supersucci%C3%B3n-obst%C3%A1culos/dp/B0G7HVXJQD",
        description: "Navegación LiDAR, mapeo inteligente y base de auto-vaciado. Ideal para mantener tus pisos impecables sin el más mínimo esfuerzo."
    },
    {
        id: 37, isNew: false, title: "Juego de Sábanas de Bambú Premium", category: "Hogar", price: 1250.00,
        images: [
            "https://m.media-amazon.com/images/I/61X6rZ0jESL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61MhLA9luIL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61Vj5Pn0hpL._AC_SX679_.jpg",
        ],
        amazonUrl: "https://www.amazon.com.mx/Smart-Bamboo-Microfibra-Cepillado-Matrimonial/dp/B0FBTHFM7F",
        description: "Hilos ultrasuaves, tejido termorregulador y propiedades antibacterianas. Disfruta de un descanso profundo con la máxima frescura."
    },
    {
        id: 38, isNew: false, title: "Sartén de Hierro Fundido", category: "Hogar", price: 850.00,
        images: [
            "https://m.media-amazon.com/images/I/81BtWwI+YcL._AC_SY300_SX300_QL70_ML2_.jpg",
            "https://m.media-amazon.com/images/I/81wjlfUv0gL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/8139eXRd1hL._AC_SX679_.jpg",
        ],
        amazonUrl: "https://www.amazon.com.mx/Sartenes-Fundido-Previamente-Cast-Iron-Skillet/dp/B08VQKYMNJ",
        description: "Retención de calor excepcional y distribución uniforme. Perfecto para sellar cortes de carne o preparar guisos a fuego lento."
    },
    {
        id: 39, isNew: true, title: "Espejo Circular con Luz LED", category: "Hogar", price: 1800.00,
        images: [
            "https://m.media-amazon.com/images/I/71ry0NYuj4L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/617EnuWyTDL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71AThRUvGDL._AC_SX679_.jpg",

        ],
        amazonUrl: "https://www.amazon.com.mx/mangatta-Circular-di%C3%A1metro-Bastidor-Aluminio/dp/B0C16GDFC3",
        description: "Diseño minimalista sin marco con intensidad de luz cálida/fría ajustable y sistema antiniebla. El toque moderno que tu baño necesita."
    },
    {
        id: 40, isNew: false, title: "Maceta de Cerámica Nórdica", category: "Hogar", price: 450.00,
        images: [
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800",
            
        ],
        amazonUrl: "https://www.amazon.com.mx/s?k=Maceta+cer%C3%A1mica+mate+n%C3%B3rdica+decoraci%C3%B3n+hogar",
        description: "Acabado mate artesanal con un elegante soporte de madera natural. Aporta calidez y vida a cualquier rincón de tu hogar."
    },
    {
        id: 41, isNew: true, title: "Difusor de Aceites Esenciales", category: "Hogar", price: 650.00,
        images: [
            "https://m.media-amazon.com/images/I/61-XbYObVuL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61pculXHmcL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71-KgoURw9L._AC_SX679_.jpg",

        ],
        amazonUrl: "https://www.amazon.com.mx/dp/B0GQZ4QWXP",
        description: "Humidificador ultrasónico silencioso con anillo de iluminación ambiental y temporizador. Crea una atmósfera relajante en segundos."
    },
    {
        id: 42, isNew: false, title: "Set de Toallas de Algodón Egipcio", category: "Hogar", price: 1100.00,
        images: [
            "https://m.media-amazon.com/images/I/81lt+zMiNLL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71oUwvZ0vQL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81hQngCzCJL._AC_SX679_.jpg"
        ],
        amazonUrl: "https://www.amazon.com.mx/dp/B07G9LQFJ8",
        description: "Alta capacidad de absorción, tejido de 600 gramos y suavidad inigualable. Transforma tu baño en una experiencia de spa."
    },
    {
        id: 43, isNew: true, title: "Escritorio Ajustable Automático", category: "Hogar", price: 6500.00,
        images: [
            "https://m.media-amazon.com/images/I/61truWgjEXL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71vOffS9tAL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61W0-KyEhUL._AC_SX679_.jpg"

        ],
        amazonUrl: "https://www.amazon.com.mx/VIVO-escritorio-ergon%C3%B3mica-controlador-DESK-V100EB/dp/B08299Z43C",
        description: "Superficie de bambú sólido y sistema de elevación motorizado con memoria de altura. Mejora tu postura y productividad en el trabajo."
    },
    {
        id: 44, isNew: false, title: "Licuadora de Grado Profesional", category: "Hogar", price: 3200.00,
        images: [
            "https://m.media-amazon.com/images/I/71gw04cbBXL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81Sw3xQwiyL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71rJPLl+Q3L._AC_SX679_.jpg"
        ],
        amazonUrl: "https://www.amazon.com.mx/ULTRACHEF-Ultrachef-Licuadora-Profesional/dp/B099CMX4GV",
        description: "Motor de 1500W y cuchillas de acero inoxidable endurecido. Tritura hielo y prepara batidos sedosos al instante con control táctil."
    },
    {
        id: 45, isNew: false, title: "Reloj de Pared Minimalista", category: "Hogar", price: 550.00,
        images: [
            "https://m.media-amazon.com/images/I/61ahC8Zc3SL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61Te6olGXBL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71TuKtdmw3L._AC_SX679_.jpg"
        ],
        amazonUrl: "https://www.amazon.com.mx/dp/B0C6SGG5L6",
        description: "Movimiento continuo y silencioso (sin el molesto tic-tac), marco de metal cepillado y diseño limpio para espacios contemporáneos."
    }
    
];

// ==========================================
// 2. ELEMENTOS DEL DOM
// ==========================================
const inicioView = document.getElementById('inicio-view');
const catalogView = document.getElementById('catalog-view');
const nosotrosView = document.getElementById('nosotros-view');
const btnInicio = document.getElementById('nav-inicio');
const btnNosotros = document.getElementById('nav-nosotros');
const btnContactoNav = document.getElementById('nav-contacto');
const dropBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const grid = document.getElementById('product-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const sectionTitle = document.getElementById('section-title');
const btnExplorar = document.getElementById('btn-explorar');
const homeCatCards = document.querySelectorAll('.cat-card');
const logoLink = document.getElementById('logo-link');
const navbar = document.querySelector('.navbar');

// Modales
const modal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close-btn');
const buyBtn = document.getElementById('modal-buy-btn');
const contactModal = document.getElementById('contact-modal');
const closeContactBtn = document.querySelector('.close-contact-btn');
const contactForm = document.getElementById('product-contact-form');
const formContainer = document.getElementById('form-container');
const successMessage = document.getElementById('success-message');
const closeSuccessBtn = document.querySelector('.close-success-btn');
const inputClientProduct = document.getElementById('client-product');
const pagination = document.getElementById('pagination');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageNumbers = document.getElementById('page-numbers');
const perPageSelect = document.getElementById('per-page');
const sortSelect = document.getElementById('sort-by');
const categoryBanner = document.getElementById('category-banner');
const bannerTitle = document.getElementById('banner-title');
const bannerText = document.getElementById('banner-text');

// ==========================================
// 3. VARIABLES DE ESTADO GLOBALES
// ==========================================
let currentCategory = "Todos";
let currentSearchTerm = "";
let productoSeleccionado = "";
let currentPage = 1;
let productsPerPage = 6;
let currentSort = 'default';

// ==========================================
// 4. NUEVO: MOTOR DE NAVEGACIÓN (CON HISTORIAL)
// ==========================================

// Función centralizada para controlar todas las vistas y el historial
function navigateTo(view, category = "Todos", addToHistory = true) {
    // 1. Ocultar todas las vistas
    inicioView.style.display = 'none';
    catalogView.style.display = 'none';
    nosotrosView.style.display = 'none';
    
    // 2. Resetear clases activas del menú
    filterBtns.forEach(b => b.classList.remove('active'));
    btnInicio.classList.remove('active');
    btnNosotros.classList.remove('active');
    
    // 3. Procesar la vista solicitada
    if (view === 'inicio') {
        inicioView.style.display = 'block';
        btnInicio.classList.add('active');
    } 
    else if (view === 'nosotros') {
        nosotrosView.style.display = 'block';
        btnNosotros.classList.add('active');
    } 
    else if (view === 'catalog') {
        catalogView.style.display = 'block';
        currentCategory = category;
        if (addToHistory) { currentPage = 1; currentSort = 'default'; sortSelect.value = 'default'; }
        
        // Iluminar la categoría en el menú si aplica
        if(category !== "Todos") {
            const dropLink = document.querySelector(`.dropdown-content .filter-btn[data-category="${category}"]`);
            if(dropLink) dropLink.classList.add('active');
        }
        
        // Si el usuario cambia de categoría manualmente, limpiamos la barra de búsqueda
        if (addToHistory && currentSearchTerm !== "") {
            searchInput.value = "";
            currentSearchTerm = "";
        }
        
        renderProducts();
    }

    // 4. Mágia del Historial: Registrar en el navegador (si no venimos del botón "Atrás")
    if (addToHistory) {
        const state = { view: view, category: category };
        // Le agregamos un # a la URL para que el usuario visualmente sepa en qué sección está
        const urlHash = view === 'catalog' && category !== 'Todos' ? `#${category.toLowerCase()}` : `#${view}`;
        history.pushState(state, '', urlHash);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ------------------------------------------
// EVENTOS DE LOS BOTONES HACIA EL MOTOR DE NAVEGACIÓN
// ------------------------------------------

btnInicio.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('inicio');
});

logoLink.addEventListener('click', (e) => {
    e.preventDefault();

    const origHTML = logoLink.innerHTML;
    const text = logoLink.innerText;
    const chars = text.split('');

    logoLink.innerHTML = '';
    logoLink.style.position = 'relative';
    logoLink.style.display = 'inline-flex';
    logoLink.style.gap = '0';
    logoLink.style.justifyContent = 'center';

    const letters = chars.map((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.transition = 'color 0.1s ease, text-shadow 0.1s ease';
        span.style.color = '#e2e8f0';
        logoLink.appendChild(span);
        return span;
    });

    let index = 0;

    function neonWave() {
        if (index > 0) {
            letters[index - 1].style.color = '#e2e8f0';
            letters[index - 1].style.textShadow = 'none';
        }

        if (index >= letters.length) {
            setTimeout(() => {
                logoLink.innerHTML = origHTML;
                logoLink.style.position = '';
                logoLink.style.display = '';
                logoLink.style.gap = '';
                logoLink.style.justifyContent = '';
                navigateTo('inicio');
            }, 300);
            return;
        }

        const el = letters[index];
        el.style.color = '#2563eb';
        el.style.textShadow = '0 0 20px #2563eb, 0 0 60px #2563eb, 0 0 100px #2563eb';

        index++;
        setTimeout(neonWave, 120);
    }

    neonWave();
});

btnNosotros.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('nosotros');
});

// Botones de Categorías (Menú Superior)
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('catalog', e.target.getAttribute('data-category'));
        dropdownContent.classList.remove('show-menu');
    });
});

// Botón de Hero (Explorar)
if (btnExplorar) {
    btnExplorar.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('catalog', 'Todos');
    });
}

// Tarjetas Visuales de la Página de Inicio
homeCatCards.forEach(card => {
    card.addEventListener('click', () => {
        navigateTo('catalog', card.getAttribute('data-category'));
    });
});

// Lógica de Búsqueda
searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value;
    currentPage = 1;
    currentSort = 'default';
    sortSelect.value = 'default';
    
    // Si escribe y está en inicio/nosotros, lo mandamos al catálogo automáticamente
    if (catalogView.style.display !== 'block') {
        navigateTo('catalog', 'Todos');
    } else {
        // Si ya está en el catálogo, solo renderizamos sin agregar al historial
        renderProducts();
    }
});

// Eventos del Menú Desplegable
dropBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle('show-menu');
});

window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
        if (dropdownContent && dropdownContent.classList.contains('show-menu')) {
            dropdownContent.classList.remove('show-menu');
        }
    }
});

// ------------------------------------------
// ESCUCHAR LA FLECHA DE "ATRÁS" DEL NAVEGADOR
// ------------------------------------------
window.addEventListener('popstate', (e) => {
    // El navegador nos envía un objeto 'e.state' con los datos de la vista anterior
    if (e.state) {
        // false = no lo volvemos a meter al historial
        navigateTo(e.state.view, e.state.category, false); 
    } else {
        // Estado por defecto si retroceden hasta el principio de la carga
        navigateTo('inicio', 'Todos', false);
    }
});

// ------------------------------------------
// INICIALIZACIÓN DE LA PÁGINA
// ------------------------------------------
// Registra el punto de partida en el historial al cargar la web
history.replaceState({ view: 'inicio', category: 'Todos' }, '', '#inicio');


// ==========================================
// 4b. DATOS DE BANNER POR CATEGORÍA
// ==========================================
const categoryBanners = {
    'Refacciones': {
        title: 'Refacciones Automotrices',
        text: 'Encuentra las mejores piezas y accesorios para tu vehículo. Calidad y rendimiento garantizado.',
        image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=1920'
    },
    'Electrónica': {
        title: 'Tecnología de Vanguardia',
        text: 'Descubre lo último en electrónica e innovación. Productos premium para tu estilo de vida digital.',
        image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=1920'
    },
    'Hogar': {
        title: 'Hogar y Estilo de Vida',
        text: 'Transforma tu espacio con productos diseñados para tu bienestar. Comodidad y diseño en cada detalle.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920'
    }
};

// ==========================================
// 5a. FUNCIÓN DE ORDENAMIENTO
// ==========================================
function sortProducts(products, sortBy) {
    const sorted = [...products];
    switch (sortBy) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
    return sorted;
}

// ==========================================
// 5b. RENDERIZADO PRINCIPAL (SKELETONS Y TARJETAS)
// ==========================================
function renderProducts() {
    grid.innerHTML = "";

    for(let i = 0; i < productsPerPage; i++) { 
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

    if (currentSearchTerm.trim() !== "" || currentCategory === "Todos") {
        categoryBanner.style.display = 'none';
    } else {
        const banner = categoryBanners[currentCategory];
        if (banner) {
            bannerTitle.textContent = banner.title;
            bannerText.textContent = banner.text;
            categoryBanner.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.9)), url('${banner.image}')`;
            categoryBanner.style.display = 'block';
        }
    }

    clearTimeout(window.loadingTimeout);
    window.loadingTimeout = setTimeout(() => {
        grid.innerHTML = ""; 

        if (filteredProducts.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; font-size: 1.2rem; padding: 3rem 0;">No se encontraron productos que coincidan con tu búsqueda.</p>`;
            pagination.style.display = 'none';
            return;
        }

        if (currentSort !== 'default') {
            filteredProducts = sortProducts(filteredProducts, currentSort);
        }

        const totalPages = filteredProducts.length > 0 ? 20 : 0;

        if (currentPage > totalPages) currentPage = totalPages;

        const pageProducts = [];
        for (let i = 0; i < productsPerPage; i++) {
            const idx = ((currentPage - 1) * productsPerPage + i) % filteredProducts.length;
            pageProducts.push(filteredProducts[idx]);
        }

        if (currentPage % 2 === 0) {
            pageProducts.reverse();
        }

        pageProducts.forEach((product, index) => {
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
                    <button class="btn-primary" onclick="event.stopPropagation(); window.open('${product.amazonUrl}', '_blank')">Comprar</button>
                </div>
            `;
            
            card.style.animation = "slideUp 0.5s ease forwards";
            card.style.animationDelay = `${index * 0.05}s`;
            card.style.opacity = "0"; 
            
            grid.appendChild(card);
        });

        renderPagination(totalPages);
    }, 600); 
}

// ==========================================
// 5b. PAGINACIÓN
// ==========================================
function renderPagination(totalPages) {
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }

    pagination.style.display = 'flex';
    pageNumbers.innerHTML = '';

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
        if (startPage === 1) {
            endPage = Math.min(totalPages, startPage + 4);
        } else {
            startPage = Math.max(1, endPage - 4);
        }
    }

    if (startPage > 1) {
        pageNumbers.appendChild(createPageBtn(1));
        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.className = 'page-btn';
            dots.style.border = 'none';
            dots.style.background = 'none';
            dots.style.cursor = 'default';
            dots.textContent = '...';
            pageNumbers.appendChild(dots);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.appendChild(createPageBtn(i));
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.className = 'page-btn';
            dots.style.border = 'none';
            dots.style.background = 'none';
            dots.style.cursor = 'default';
            dots.textContent = '...';
            pageNumbers.appendChild(dots);
        }
        pageNumbers.appendChild(createPageBtn(totalPages));
    }
}

function createPageBtn(page) {
    const btn = document.createElement('button');
    btn.className = 'page-btn';
    if (page === currentPage) btn.classList.add('active');
    btn.textContent = page;
    btn.addEventListener('click', () => {
        currentPage = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderProducts();
    });
    return btn;
}

// ==========================================
// 6. LÓGICA DEL MODAL DE PRODUCTO (GALERÍA)
// ==========================================
function openModal(itemInput) {
    const product = typeof itemInput === 'number' ? products.find(p => p.id === itemInput) : itemInput;
    const mainImg = document.getElementById('modal-main-img');
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    
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

    document.getElementById('modal-category').innerText = product.category;
    document.getElementById('modal-category').className = 'card-category';
    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-price').innerText = `$${product.price.toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN`;
    document.getElementById('modal-desc').innerText = product.description;
    
    productoSeleccionado = product.title;
    buyBtn.href = product.amazonUrl;
    modal.classList.add('show');
}

// ==========================================
// 7. LÓGICA DEL MODAL DE CONTACTO
// ==========================================
btnContactoNav.addEventListener('click', (e) => {
    e.preventDefault();
    inputClientProduct.value = "Consulta General"; 
    
    formContainer.style.display = 'block';
    successMessage.style.display = 'none';
    
    document.getElementById('client-name').value = '';
    document.getElementById('client-phone').value = '';
    document.getElementById('client-email').value = '';
    
    contactModal.classList.add('show');
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    formContainer.style.display = 'none';
    successMessage.style.display = 'block';
});

// ==========================================
// 8. EVENTOS DE CIERRE DE MODALES
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

// ==========================================
// 9. EVENTOS DE PAGINACIÓN
// ==========================================
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderProducts();
    }
});

nextPageBtn.addEventListener('click', () => {
    currentPage++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderProducts();
});

// ==========================================
// 10. SELECTOR DE PRODUCTOS POR PÁGINA
// ==========================================
perPageSelect.addEventListener('change', () => {
    productsPerPage = parseInt(perPageSelect.value);
    currentPage = 1;
    renderProducts();
});

// ==========================================
// 11. SELECTOR DE ORDENAMIENTO
// ==========================================
sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    currentPage = 1;
    renderProducts();
});

// ==========================================
// 12. NAVBAR TRANSLÚCIDO AL SCROLL
// ==========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});