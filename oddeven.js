function oddeven(num) {
    if (num == 0){
        console.log("0 is neither Odd nor Even");
    }
    else if (num % 2 === 0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
}

oddeven(4);
oddeven(7);
oddeven(10);
oddeven(15);
oddeven(20);
oddeven(25);
oddeven(0);

