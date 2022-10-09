function number(num){
    if (num > 0){
        return "positive"
    }
    else{
        return "negative"
    }
}
console.log(number(-2))

function number1(num){
    return (num>0)?"It is positive":"It is negative";
}
console.log(number1(5))