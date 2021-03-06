db.restaurante.drop()
db.restaurante.insertMany([
    {_id: 1, 
        nombrePlato: "Ensalada clásica", 
        precio: 7,  
        nutricion: {calorias:260, carbohidratos:3, grasa:0.28, proteina:1.11 }, 
        ingredientes:[{ing:"lechuga", gramos:30, caducidad: new Date("2021-11-17")}, {ing:"tomate", gramos:10, caducidad: new Date("2021-11-17")}, {ing:"cebolla", gramos:50, caducidad: new Date("2021-11-20")}],  
        tipo:["entrante"],
        vegano: true,
    },  
    {_id: 2, nombrePlato: "Calamares al estilo Martina", precio:11,  nutricion: {calorias:550, carbohidratos:8, grasa:1.5, proteina:16 }, 
    ingredientes:[{ing:"calamares", gramos:50, caducidad: new Date("2021-11-20")}, {ing:"cebolla", gramos:25, caducidad: new Date("2021-11-20")}, {ing:"tomate", gramos:60, caducidad: new Date("2021-11-17")}], alergenos: ["Pescado", "Gluten", "Moluscos"],
    tipo:["entrante", "plato fuerte"],
    vegano: false, 
    },
    {_id: 3, nombrePlato: "Langostinos", precio:10,  nutricion: {calorias:450, carbohidratos:0, grasa:0.8, proteina:24.8 }, 
    ingredientes:[{ing:"langostinos", gramos:50, caducidad: new Date("2021-11-25")}], alergenos: ["Crustáceos", "Moluscos"],
    tipo:["entrante", "plato fuerte"],
    vegano: false,
    },
       
    {_id: 4, nombrePlato: "Entrecot de ternera", precio:18.5,  nutricion: {calorias:700, carbohidratos:0, grasa:7, proteina: 20}, 
    ingredientes:[{ing:"patatas", gramos:60, caducidad: new Date("2021-11-24")}, {ing:"pimientos", gramos:30, caducidad: new Date("2021-11-17")}, {ing:"entrecot", gramos:10, caducidad: new Date("2021-11-26")}], alergenos: [],
    tipo:["plato fuerte"],
    vegano: false,
    },
       
    {_id: 5, nombrePlato: "Carrillada", precio:15,  nutricion: {calorias:650, carbohidratos:0, grasa:6.2, proteina:20 }, 
    ingredientes:[{ing:"carrillera", gramos:30, caducidad: new Date("2021-11-29")}, {ing:"setas", gramos:10, caducidad: new Date("2021-11-23")}, {ing:"perejil", gramos:10}], alergenos: ["Dióxido de azufre y sulfitos"],
    tipo:["plato fuerte"],
    vegano: false,
    },
       
    {_id: 6, nombrePlato: "pulpo a la brasa", precio: 18.50,  nutricion: {calorias:510, carbohidratos:0, grasa:1.5, proteina:18 }, 
    ingredientes:[{ing:"pulpo", gramos:30, caducidad: new Date("2021-11-26")}, {ing:"cebolla", gramos:20, caducidad: new Date("2021-11-20")}, {ing:"perejil", gramos:10}], alergenos: ["Lácteos", "Moluscos"],
    tipo:["plato fuerte"],
    vegano: false,
    },
       
    {_id: 7, nombrePlato: "Puchero Clásico", precio:9,  nutricion: {calorias:400, carbohidratos:0.8, grasa:3.6, proteina: 19}, 
    ingredientes:[{ing:"patatas", gramos:30, caducidad: new Date("2021-11-24")}, {ing:"costillas", gramos:20, caducidad: new Date("2021-11-27")}, {ing:"pimientos", gramos:10, caducidad: new Date("2021-11-17")}], alergenos: [],
    tipo:["entrante"],
    vegano: false,
    },
       
    {_id: 8, nombrePlato: "Sorbete de limón", precio:5,  nutricion: {calorias:110, carbohidratos:25, grasa:0, proteina:0 }, 
    ingredientes:[{ing:"limón", gramos:30, caducidad: new Date("2021-12-05")}, {ing:"hielo", gramos:50}], alergenos: [],
    tipo:["postre"],
    vegano: true,
    },
       
    {_id: 9, nombrePlato: "Salmorejo andaluz", precio:5,  nutricion: {calorias:400, carbohidratos:6.2, grasa:5.1, proteina: 10}, 
    ingredientes:[{ing:"tomate", gramos:30, caducidad: new Date("2021-11-17")}, {ing:"ajo", gramos:25}, {ing:"perejil", gramos:50}, {ing:"pan", gramos:30, caducidad: new Date("2021-11-18")}], alergenos: ["Gluten"],
    tipo:["entrante"],
    vegano: true,
    },
    {_id: 10, nombrePlato: "Hummus de garbanzos con nachos", precio:10,  nutricion: {calorias:200, carbohidratos:4.1, grasa:3, proteina: 16}, 
    ingredientes:[{ing:"garbanzos", gramos:50}, {ing:"ajo", gramos:40}, {ing:"limón", gramos:45, caducidad: new Date("2021-12-05")}, {ing:"yogurt", gramos:12, caducidad: new Date("2021-11-16")}], alergenos: ["Sésamo"],
    tipo:["entrante", "plato fuerte"],
    vegano: true,
    },
    {_id: 11, nombrePlato: "legumbre con carrillera", precio:12,  nutricion: {calorias:400, carbohidratos:3.2, grasa:2, proteina:19 }, 
    ingredientes:[{ing:"carrillera", gramos:10, caducidad: new Date("2021-11-29")}, {ing:"garbanzos", gramos:20}, {ing:"cebolla", gramos:40, caducidad: new Date("2021-11-20")}, {ing:"patatas", gramos:17, caducidad: new Date("2021-11-24")}, {ing:"ajo", gramos:10}], alergenos: ["Lacteos", "Frutos de cascara", "Dióxido de azufre y sulfitos"],
    tipo:["plato fuerte"],
    vegano: false,
    },
    {_id: 12, nombrePlato: "Flor de loto", precio:20,  nutricion: {calorias:240, carbohidratos:21, grasa:8.6, proteina: 4}, 
    ingredientes:[{ing:"chocolate", gramos:20}, {ing:"galletas", gramos:10, caducidad: new Date("2022-11-01")}, {ing:"laminas de oro", gramos:3}], alergenos: [],
    tipo:["postre"],
    vegano: true,
    },
    {_id: 13, nombrePlato: "Puchero Gaditano", precio:11,  nutricion: {calorias:200, carbohidratos:0.8, grasa:3.6, proteina: 19}, 
    ingredientes:[{ing:"patatas", gramos:21, caducidad: new Date("2021-11-24")}, {ing:"costillas", gramos:20, caducidad: new Date("2021-11-27")}, {ing:"pimientos", gramos:10, caducidad: new Date("2021-11-17")}, {ing:"pan", gramos:5, caducidad: new Date("2021-11-18")}, {ing:"perejil", gramos:10}],
    tipo:["entrante"],
    vegano: false,
    },
    {_id: 14, nombrePlato: "Puchero Andaluz con Pringá", precio:10,  nutricion: {calorias:230, carbohidratos:0.8, grasa:3.6, proteina: 19}, 
    ingredientes:[{ing:"patatas", gramos:20, caducidad: new Date("2021-11-24")}, {ing:"costillas", gramos:20, caducidad: new Date("2021-11-27")}, {ing:"pimientos", gramos:10, caducidad: new Date("2021-11-17")}, {ing:"garbanzos", gramos:15}], alergenos: ["Lacteos"],
    tipo:["plato fuerte"],
    vegano: false,
    },
    {_id: 15, nombrePlato: "Un puchero paraguayo", precio:9,  nutricion: {calorias:290, carbohidratos:0.8, grasa:3.6, proteina: 19}, 
    ingredientes:[{ing:"patatas", gramos:25, caducidad: new Date("2021-11-24")}, {ing:"costillas", gramos:20, caducidad: new Date("2021-11-27")}, {ing:"pimientos", gramos:10, caducidad: new Date("2021-11-17")}, {ing:"tomate", gramos:10, caducidad: new Date("2021-11-17")}], alergenos: ["Frutos de cascara", "Lacteos"],
    tipo:["entrante"],
    vegano: false,
    },   
    
       
])



