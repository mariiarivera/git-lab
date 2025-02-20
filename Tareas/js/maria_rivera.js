/* export functions to practice JavaScript
Maria Rivera Gutierrez
A01029678
12-02-25
*/

"use strict";

export function firstNonRepeating(cadena){
    for (let i=0; i<cadena.length; i++){
        let repeated = false;
        for (let j=0; j<cadena.length; j++){
            if(cadena[i]==cadena[j] && i!=j){
                repeated = true; 
                break;
            }
        }
        if(!repeated)
            return cadena[i];
    }
}


export function bubbleSort(nums){ 
    let l=nums.length;
    for(let i=1; i<l; i++){
        for(let j=0; j<(l-i); j++){
            if (nums[j] > nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums;
}


export function invertArray(arreglo){
    let l=arreglo.length;
    var reverso = []
    for(let i=0; i<l; i++){
        reverso.unshift(arreglo[i]);
    }
    return reverso;
}


export function invertArrayInplace(arreglo) {
    let l = arreglo.length;
    for (let i = 0; i < l / 2; i++) {
        let temp = arreglo[i];
        arreglo[i] = arreglo[l - 1 - i];
        arreglo[l - 1 - i] = temp;
    }
    return arreglo;
}


export function capitalize(word) {
    let words = String(word).split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(' ');
}


export function mcd(x,y){
    while (x != y) {
        if (x > y) {
            x -= y;
        } else {
            y -= x;
        }
    }

    return x;
}


export function hackerSpeak(speak) {
    let result = "";
    for (let i = 0; i < speak.length; i++) {
        let char = speak[i];
        if (char == "a") char = "4";
        else if (char == "e") char = "3";
        else if (char == "s") char = "5";
        else if (char == "i") char = "1";
        else if (char == "o") char = "0";
        result += char;
    }
    return result;
}


export function factorize(div) {
    let factores = []; 
    for (let i = 1; i <= div; i++) {
        if (div % i == 0) { 
            factores.push(i);
        }
    }
    return factores; 
}


export function deduplicate(numbs) {
    let without = [];
    for (let i = 0; i < numbs.length; i++) {
        if (!without.includes(numbs[i])) {
            without.push(numbs[i]);
        }
    }
    return without;
}


export function findShortestString(many){
    if(many.length == 0){
        return 0;
    }
    let smallest = many[0].length;
    for(let i = 1; i < many.length; i++){
        if(many[i].length < smallest){
            smallest = many[i].length;
        }
    }
    return smallest;
}


export function isPalindrome(samesies) {
    if (samesies.includes(' ')) {
        samesies = samesies.replace(/\s/g, '');
    }
    
    let j = samesies.length - 1;
    for (let i = 0; i < samesies.length / 2; i++) {
        if (samesies[i] !== samesies[j - i]) {
            return false;
        }
    }
    return true;
}


export function sortStrings(another){
    for(let i=0; i<another.length; i++){
        for(let j=0; j<another.length; j++){
            if(another[i]<another[j]){
                let temp = another[i];
                another[i] = another[j];
                another[j] = temp;
            }
        }
    }
    return another;
}


export function stats(numeros) {
    let l = numeros.length;
    let suma = 0;
    let moda;
    let max = 0;
    let count = {};
    if(l==0){
        return[0,0];
    }
    for (let i = 0; i < l; i++) {
        suma += numeros[i];
        if (count[numeros[i]]) {
            count[numeros[i]]++;
        } else {
            count[numeros[i]] = 1;
        }
        if (count[numeros[i]] > max) {
            max = count[numeros[i]];
            moda = numeros[i];
        }
    }
    let promedio = suma / l;
    
    return [promedio, moda];
}

export function popularString(parrafo) {
    let count = {};
    let max = 0;
    let popular = '';
    
    for (let i = 0; i < parrafo.length; i++) {
        if (count[parrafo[i]]) {
            count[parrafo[i]]++;
        } else {
            count[parrafo[i]] = 1;
        }
        if (count[parrafo[i]] > max) {
            max = count[parrafo[i]];
            popular = parrafo[i];
        }
    }
    
    return popular;
}


export function isPowerOf2(power) {
    if (power < 1) {
        return false;
    }
    for (let i = 1; i <= power; i *= 2) {
        if (i === power) {
            return true;
        }
    }
    return false;
}


export function sortDescending(nums){
    let l=nums.length;
    for(let i=1; i<l; i++){
        for(let j=0; j<(l-i); j++){
            if (nums[j] < nums[j+1]) {
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums;
}