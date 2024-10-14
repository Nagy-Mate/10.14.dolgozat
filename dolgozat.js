
//1feladat
function seconds(time) {
    time = time.split(':');
    let totalSeconds = 86400;

    totalSeconds -= parseInt(time[0])  * 3600;
    totalSeconds -= parseInt(time[1]) * 60;
    totalSeconds -= parseInt(time[2]);
    return totalSeconds;
}
console.log(seconds('14:34:42'));

//2feladat
function factorial(number) {
    let factorialNumber = 1;
    for(let i = number; i > 0; i--){
        factorialNumber = factorialNumber * i;
    }
    return factorialNumber;
}
console.log(factorial(6));

//3 feladat
function gradeCalculator(score, maximum) {
    let percent = Math.floor((score / maximum) * 100);
    if(percent < 100 && percent >= 90){
        return 'A';
    }
    else if(percent < 90 && percent >= 80){
        return 'B';
    }
    else if(percent < 80 && percent >= 70){
        return 'C';
    }
    else if(percent < 70 && percent >= 60){
        return 'D';
    }
    else if(percent < 60 && percent >= 50){
        return 'E';
    }
    else if(percent < 50){
        return 'F';
    }
    else{
        return 'Hibás adat!'
    }
}
console.log(gradeCalculator(70, 100));

//4 feladat 
function threeRuls() {
    let array = [];
    let counter = 0;
    for(let i = 1; i <= 50; i++){
        if(i % 3 == 0){
            counter++;
            if(counter == 1){

            }else if(counter == 2){
                array.push(i);
            }else if(counter == 3){

            }
            else if(counter == 4){
                array.push(i);
            }
            else if(counter == 5){
                array.push(i); 
            }
            else if(counter == 6){

                counter = 0;
            }
        }
        else{
            array.push(i);
        }
    } 
    return array;
}
console.log(threeRuls());