const ball = document.querySelector('.ball');              
const field = document.querySelector('.field');             

field.onclick = (event) => {                             
    const fieldCoords = field.getBoundingClientRect();        

    const minLeft = 0;
    const maxLeft = field.clientWidth - ball.clientWidth;                       
    const minTop = 0;                                       
    const maxTop = field.clientHeight - ball.clientHeight ;     

    const left = event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2;   
    const top = event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2;

    ball.style.top = Math.min(Math.max(top, minTop), maxTop) + 'px';                                   
    ball.style.left = Math.min(Math.max(left, minLeft), maxLeft) + 'px';                                

};
