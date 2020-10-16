'use strict';
// Задача на поиск Горы 
function landscapeType(arr) {   
    let mountArr = [];  
    let vallArr = [];   
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i-1] < arr[i] && arr[i] > arr[i+1]) {
            mountArr.push(arr[i]);
        } 
        else if (arr[i-1] > arr[i] && arr[i] < arr[i+1]) {
            vallArr.push(arr[i]);
            }}
        if (mountArr.length === 1 && vallArr.length === 0) {
            if (arr.filter(item => item < mountArr[0]).length === arr.length - 1) {
                return "mountain";
            } 
            else {
                 return "neither";
                 }}
         else if (vallArr.length === 1 && mountArr.length === 0) {
            if (arr.filter(item => item > vallArr[0]).length === arr.length - 1) {
                 return "valley";
                } 
            else {
                return "neither";
            }} 
            else {
                return "neither";
            }}

//--- Distance Between Two Points  https://edabit.com/challenge/caeSeQ3K53GMQKenX

function getDistance(a, b) {
    return Number((Math.sqrt(Math.pow((b.x-a.x),2)+Math.pow((b.y-a.y),2))).toFixed(3));
}

//---- Index Multiplier  https://edabit.com/challenge/3Efavz8YmSBia4p8s 
function indexMultiplier(arr) {
    let summ=0;
    for (let i in arr) {
        summ+=arr[i]*i;
    }
    return summ;
}
//---------- warOfNumbers  https://edabit.com/challenge/Aofd78q72sAtgCyEY
function warOfNumbers(arr) {
    console.log(arr.length)
        let evenSumm=0;
        let oddSumm=0;
        for(let i in arr) {
        if(arr[i]%2==0){
        oddSumm+=arr[i];
        }else {
        evenSumm+=arr[i];
        }
        }
        if(evenSumm>oddSumm){
        return evenSumm-oddSumm; }
        else{
        return  oddSumm - evenSumm
        }
        
    }
    // -- countVowels https://edabit.com/challenge/j3N6DQa4Z5LvqPGEb
    function countVowels(str, total=0) {    
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        if (str.length === 0) {     
            return total;   
         }          
        vowels.forEach(letter => {      
            if (letter === str[0]) {            
                total++;            
                return countVowels(str.slice(1), total)     
            }}) 
        return countVowels(str.slice(1), total)}
