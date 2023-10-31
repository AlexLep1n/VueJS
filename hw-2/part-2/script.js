"use strict";

// Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

new Vue({
  el: "#app",
  data: {
    products: [
      {
        name: "Банан",
        price: 35,
      },
      {
        name: "Яблоко",
        price: 24,
      },
      {
        name: "Апельсин",
        price: 56,
      },
      {
        name: "Киви",
        price: 72,
      },
      {
        name: "Сухари",
        price: 44,
      },
    ],
  },
  methods: {
    sortProductsByAscending() {
      this.products.sort((a, b) => a.price - b.price);
    },
    sortProductsByDescending() {
      this.products.sort((a, b) => b.price - a.price);
    },
  },
});
