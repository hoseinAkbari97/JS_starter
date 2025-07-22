// part 4: Control Flow
// section 13: Exercise: Demerit Points

checkSpeed(70);

function checkSpeed(speed)  {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit)
        console.log("Ok")
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log("License suspended!!!");
        else
            console.log("points: ", points)
    }
}
