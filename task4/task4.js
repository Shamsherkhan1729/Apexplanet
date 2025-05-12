function showSection(id) {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('visible');
  });
  const section = document.getElementById(id);
  section.classList.add('visible');
}
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTask(task));
}

function addTask() {
  const taskInput = document.getElementById('todo-input');
  const taskValue = taskInput.value.trim();
  if (taskValue) {
    const taskList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = taskValue;

    const removeButton = document.createElement('button');
    removeButton.textContent = '👎';
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function() {
      removeTask(li);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function removeTask(taskItem) {
  taskItem.remove();
}

function saveTasks() {
  const tasks = [];
  todoList.querySelectorAll("li").forEach(li => tasks.push(li.textContent));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
const products = [
  { name: "Smartphone", category: "electronics", price: 29900, image: "./smart phone.png" },
  { name: "Laptop", category: "electronics", price: 50000, image: "./laptop1.jpeg" },
  { name: "Laptop", category: "electronics", price: 40000, image: "./laptop2.jpeg" },
  { name: "Tablets", category: "electronics", price: 10000, image: "./tablet.jpeg" },
  { name: "Bluetooth", category: "electronics", price: 1000, image: "./bluetooth.jpg" },

  { name: "python fundmentals", category: "books", price: 190, image: "./python.jpg" },
  { name: "web development", category: "books", price: 250, image: "./web.jpeg" },
  { name: "Pilgrim's Progress by John Bunyan", category: "books", price: 500, image: "./book1.jpg" },
  { name: "Robinson Crusoe by Daniel Defoe", category: "books", price: 600, image: "./book2.jpeg" },
  { name: "Clarissa by Samuel Richardson", category: "books", price: 560, image: "./book3.jpeg" },

  { name: "wakefit cups", category: "crockery", price: 250, image: "./cups.jpeg" },
  { name: "Teapots", category: "crockery", price: 190, image: "./teapot.jpeg" },
  { name: "Glasses", category: "crockery", price: 240, image: "./glasses.jpeg" },
  { name: "Steel plates", category: "crockery", price: 250, image: "./plates.jpeg" },
  { name: "Spooons", category: "crockery", price: 150, image: "./spoones.jpeg" },

  { name: "Cakes", category: "food", price: 150, image: "./cake.jpeg" },
  { name: "Pizza", category: "food", price: 200, image: "./pizza.jpeg" },
  { name: "Biryani", category: "food", price: 150, image: "./Biryani.jpeg" },
  { name: "Chocolates", category: "food", price: 150, image: "./Chocolates.jpeg" },
  { name: "Burger", category: "food", price: 150, image: "./Burger.jpeg" },

  { name: "Chair", category: "furniture", price: 1800, image: "./Chair.jpeg" },
  { name: "Tables", category: "furniture", price: 5000, image: "./Tables.jpeg" },
  { name: "Stool", category: "furniture", price: 800, image: "./Stool.jpeg" },
  { name: "Rolling chair", category: "furniture", price: 18000, image: "./Rolling chair.jpeg" },
  { name: "Sofa", category: "furniture", price: 18000, image: "./sofa.jpeg" }
];

function displayProducts(filtered = products) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  const iconMap = {
    electronics: "fa-laptop",
    books: "fa-book",
    food: "fa-apple-alt",
    furniture: "fa-couch",
    crockery: "fa-mug-hot",
  };

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.setAttribute("data-category", product.category);
    const icon = document.createElement("i");
    icon.className = `fas ${iconMap[product.category] || "fa-box"} product-icon`;
    div.appendChild(icon);
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.className = "product-image";
    div.appendChild(img);
    const info = document.createElement("div");
    info.innerHTML = `<strong>${product.name}</strong><br>
                      Category: ${product.category}<br>
                      Price: $${product.price}`;
    div.appendChild(info);

    list.appendChild(div);
  });
}

function applyFilters() {
  const category = document.getElementById("category-filter").value;
  const sort = document.getElementById("sort-filter").value;

  let filtered = [...products];
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

  displayProducts(filtered);
}

window.onload = () => {
  loadTasks();
  displayProducts();
};