console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count=100){
    if(count<0){count=count*-1;}
    if(count == 0){
        console.log("Can't count to 0 from 0");
    }else{
        for(let x=1;x<=count;){
            if(x%2 == 1){
                console.log(x);
            }
            ++x;
        }
    }

}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age=-1, name=" SomeOne SomeBody Jr. The Many-th"){
    let ageREQ =16;

    if(age>=ageREQ){
        console.log(`Congrats ${name} You can drive!`)
    }else {
        console.log(`Sorry ${name}, but you need to wait until you're 16.`)
    }
}


do {
    var userNumber = prompt("Pleaser enter a number", 100)
}while(userNumber <= 0)

printOdds(userNumber);

checkAge();
checkAge(19, "MiMi");
checkAge(3, "Johnny");

