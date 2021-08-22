// Code your solutions in this file

function writeCards(array, string) {
	let new_arr = []

	for (let i = 0; i < array.length; i++) {
		new_arr.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
	}

	console.log(new_arr)
	return new_arr
}

// writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' )

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }