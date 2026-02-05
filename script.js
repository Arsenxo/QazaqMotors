// База данных машин (8 штук)
const cars = [
  { name: "Porsche 911 GT3", price: "95 000 000 ₸", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600", desc: "Мощность: 510 л.с.\nРазгон 0-100: 3.4 сек\nДвигатель: 4.0L" },
  { name: "Chevrolet Camaro", price: "28 000 000 ₸", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600", desc: "Двигатель: 6.2L V8\nМощность: 455 л.с.\nКласс: Маслкар" },
  { name: "BMW M5 CS", price: "65 000 000 ₸", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600", desc: "Мощность: 635 л.с.\nПолный привод xDrive\nРазгон: 3.0 сек" },
  { name: "Audi RS7", price: "68 000 000 ₸", img: "https://images.unsplash.com/photo-1606152421649-d2d70191b454?w=600", desc: "Мощность: 600 л.с.\nКузов: Лифтбек\nМатричные фары" },
  { name: "Mercedes G63 AMG", price: "125 000 000 ₸", img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=600", desc: "Легендарный Гелендваген\nМощность: 585 л.с.\nV8 Biturbo" },
  { name: "Tesla Model S Plaid", price: "48 000 000 ₸", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600", desc: "Электрокар\n1020 л.с.\nРазгон 0-100: 2.1 сек" },
  { name: "Lexus LX 600", price: "85 000 000 ₸", img: "https://images.unsplash.com/photo-1627260029101-5da2af4638cd?w=600", desc: "Внедорожник премиум-класса\nV6 3.5L Turbo\n7 мест" },
  { name: "Ford Mustang Shelby", price: "42 000 000 ₸", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600", desc: "Shelby GT500\nМощность: 760 л.с.\nГоночная подвеска" }
];

const container = document.getElementById('car-container');

// Добавление машин на сайт
cars.forEach(car => {
  const card = document.createElement('div');
  card.className = 'car-card';
  card.innerHTML = `
    <img src="${car.img}" class="car-img">
    <h4>${car.name}</h4>
    <p style="color: #5bc0be; font-weight: bold;">${car.price}</p>
    <button onclick="showSpecs('${car.name}', '${car.desc}')">ПОДРОБНЕЕ</button>
  `;
  container.appendChild(card);
});

// Функция для показа характеристик
function showSpecs(name, specs) {
  alert("ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ " + name.toUpperCase() + ":\n\n" + specs);
}