// part 4: Control Flow
// section 9: Break and Continue

let i = 0;
while (i <= 10)  {
    if (i === 9) break;
    if (i % 2 === 0)    {
        i++;
        continue;
    }

    console.log(i);
    i++;
}
