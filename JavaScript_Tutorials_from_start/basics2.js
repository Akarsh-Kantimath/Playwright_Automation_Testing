const flag = true;

// if condition
if ( !flag ) {
    console.log("condition satisfied");
} else {
    console.log(flag);
    console.log("condition not satisfied");
}

//--------------------------------------------------------------------------------------------------------------------
// while loop

let i = 0;
while(i < 10) {
    i++
    console.log(i);
}

/* difference between if and while loop 
if the condition is true, if loop excutes one time
whereas in whiel loop, if the condition is true loop get executed infinite times, till the time condition fails */ 

//-----------------------------------------------------------------------------------------------------------------------
//do-while loop

let j = 0;
do {
j++
}while(j > 10); {
    console.log(j);
}

/* where do we use the do-while loop
irrespective of the condition true or false, if we want to run something before while loop execution do-while loop is used.
*/

//--------------------------------------------------------------------------------------------------------------------------
//for loop
for ( let k = 10; k <= 20; k++ ){
    console.log(k);
}

/* for loop use: when you know, how many times a loop must run
while loop use: when you want run a loop based on the condition
*/

//------------------------------------------------------------------------------------------------------------------------------
// from 1 to 10 give me common multiple value of 2 and 5

for ( let l = 1; l <= 10; l++){
    if (l%2 == 0 && l%5 == 0){
        console.log(l);
    }
}

//from 1 to 10 give me common multiple value of 2 or 5
for (let m = 1; m <= 10; m++){
    if (m%2 == 0 || m%5 == 0){
        console.log(m);
    }
}

// from 1 to 10 give me common multiple value of 2 and 5 only the first 3
let n = 0;
for (let o = 1; o <= 100; o++){
    if (o%2 == 0 && o%5 == 0){
        n++;
        console.log(o);
        if(n == 3){
            break;
        }
    }
}
