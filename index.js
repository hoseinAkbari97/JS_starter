// part 4: Control Flow
// section 19: Stars

showStart(10)

function showStart(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern)
  }
}
