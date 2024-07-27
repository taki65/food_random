const foods = [
    {name: "김치찌개", img: "kimchi.png"},
    {name: "비빔밥", img: "bibimbap.png"},
    {name: "삼겹살", img: "samgyeopsal.png"},
    {name: "된장찌개", img: "doenjang.png"},
    {name: "불고기", img: "bulgogi.png"},
    {name: "잡채", img: "japchae.png"},
    {name: "김밥", img: "kimbap.png"},
    {name: "떡볶이", img: "tteokbokki.png"},
    {name: "순두부찌개", img: "soondubu.png"},
    {name: "치킨", img: "chicken.png"},
    {name: "피자", img: "pizza.png"},
    {name: "햄버거", img: "hamburger.png"}
];

document.addEventListener('DOMContentLoaded', () => {
    const canContainer = document.getElementById('canContainer');
    canContainer.innerHTML = '<div class="can">?</div>';
});

document.getElementById('randomizeButton').addEventListener('click', () => {
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    const foodItem = document.getElementById('foodItem');
    const canContainer = document.getElementById('canContainer');

    // Clear previous result
    foodItem.style.top = '-40px';
    foodItem.textContent = '';

    setTimeout(() => {
        // Update food item text
        foodItem.textContent = randomFood.name;
        foodItem.style.top = '10px';

        // Update can container with food name
        canContainer.innerHTML = `<div class="can">${randomFood.name}</div>`;

        // Add sparkle effect
        const sparkleContainer = document.createElement('div');
        sparkleContainer.className = 'sparkle-container';
        document.body.appendChild(sparkleContainer);

        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 100}vw`;
            sparkle.style.top = `${Math.random() * 100}vh`;
            sparkleContainer.appendChild(sparkle);
        }

        setTimeout(() => {
            sparkleContainer.remove();
        }, 1000);
    }, 1000);
});
