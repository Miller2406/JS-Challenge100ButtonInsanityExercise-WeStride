// WRITE YOUR CODE IN HERE:

const containerId = document.body.querySelector('#container')

for (let i = 0; i < 100; i++) {
    const btn = document.createElement('button')
    console.log(btn);
    btn.append('Hey!')
    containerId.appendChild(btn)
}