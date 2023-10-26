"use strict";

// Часть 2. Задание по Vue

// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.
// 2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
// 3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию)

new Vue({
  el: "#app",
  data: {
    btnText: "Перевернуть текст в кнопке",
    liArray: [{ text: "Первый элемент спсика" }],
  },
  methods: {
    reverseBtnText() {
      this.btnText = this.btnText.split("").reverse().join("");
    },
    addLiElement() {
      this.liArray.push({ text: "Новый элемент списка" });
    },
    removeLiItem(event) {
      const li = event.target.closest("li");
      // первый вариант решения с удалнием из DOM
      // if (li.tagName === "LI") {
      //   li.remove();
      // }
      // второй вариант решения с удалением из массива li
      if (li.tagName === "LI") {
        this.liArray.splice(this.liArray.indexOf(li), 1);
      }
    },
  },
});
