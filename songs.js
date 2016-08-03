console.log ("songs loaded!");

var songs = [];
// index 0 of the array
songs[songs.length] = "Back in Black > by AC/DC on the album Back in Black";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Paranoid > by Black Sabbath on the album Paranoid";

// Each student must add one song to the beginning and the end of the array.(DONE)


// Loop over the array and remove any words or characters that obviously don't belong.
var removeChar= [];
for (var i = 0; i<songs.length; i++) {
		removeChar.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""))
		// console.log(removeChar);
}

// Students must find and replace the > character in each item with a - character.
var finalArray= [];
for (var i = 0; i<songs.length; i++) {
finalArray.push(removeChar[i].replace (/>/g,"-"))
// for finalArray.push(removeChar[i].replace(">","-"))
// Must add each string to the DOM in index.html in the main content area.

var finalSongs=document.getElementById("right_side");
finalSongs.innerHTML+= `<p> ${finalArray[i]}</p>`
		// console.log("finalArray", finalArray);
	}




document.getElementById("userSubmit").addEventListener ("click", function (){
// set up variables to capture user input from DOM:////////
var userSong= document.getElementById("userSong").value
// console.log("user Song", userSong.value);
var userArtist= document.getElementById("userArtist").value
var userAlbum= document.getElementById("userAlbum").value

// this variable combines all of the 3 input variables:
var newSong= userSong + " by " + userArtist + " on the album " + userAlbum;

	finalArray.push(newSong);
		right_side.innerHTML += `<p>${newSong}</p>`
		console.log ("new Song", newSong, "finalArray", finalArray)
})


