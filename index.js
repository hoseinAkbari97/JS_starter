// part 4: Control Flow
// section 13: Exercise: Demerit Points

checkSpeed(445);

function checkSpeed(speed)  {
    if (speed < 75) 
        console.log("ok")

    else    {
        let point = Math.floor((speed-70)/5) < 12;
        if (point < 12)
            console.log(point);
        else
            console.log('License suspended!!!');
    }
}
