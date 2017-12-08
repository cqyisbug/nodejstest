var a = [1, 2, 3, 4];
console.log(a);

//slice test ,it just like the prototype of substring of String
// argument 1 : start index
// argument 2 : end index  [ ) 前开后闭的形式
console.log(a.slice(1, 2));


var b = {
    1:"ni",
    2:"shi",
    3:"shui",
    length:4
}

console.log(b)

console.log(Array.prototype.slice.call(b))//[ <1 empty item>, 'ni', 'shi', 'shui' ]