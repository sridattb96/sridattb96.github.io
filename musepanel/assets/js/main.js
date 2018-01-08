// Initialize Firebase
var config = {
	apiKey: "AIzaSyBvKsqUnBdWiH2BEhalq1m4gupvEWfV1ak",
	authDomain: "musepanel-181904.firebaseapp.com",
	databaseURL: "https://musepanel-181904.firebaseio.com",
	projectId: "musepanel-181904",
	storageBucket: "",
	messagingSenderId: "199451268657"
};
firebase.initializeApp(config);

var database = firebase.database();

// Global Vars
var songTable = {};
var keyTable = {};
var keyToRank = {
	"C": 0,
	"Db": 0.5,
	"D": 1,
	"Eb": 1.5,
	"E": 2,
	"F": 2.5,
	"Gb": 3,
	"G": 3.5,
	"Ab": 4,
	"A": 4.5,
	"Bb": 5,
	"B": 5.5
}

var source = [];

$(document).ready(function(){

	retrieveFirebaseData();

	function retrieveFirebaseData(){
		firebase.database().ref('songdb/').once('value').then(function(snapshot) {
			var allSongs = snapshot.val();

			if (localStorage.getItem("songTable")){
				songTable = JSON.parse(localStorage.getItem("songTable"));
				keyTable = JSON.parse(localStorage.getItem("keyTable"));
			}

			for (var key in allSongs){
				initDataObjects(allSongs[key].song, allSongs[key].artist, allSongs[key].key, allSongs[key].note, allSongs[key].keyType);
			}

			localStorage.setItem("songTable", JSON.stringify(songTable));
			localStorage.setItem("keyTable",  JSON.stringify(keyTable));

			initAutocomplete(source);
		});
	}


	function initDataObjects(song, artist, key, note, keyType){
		var rank = keyToRank[note];

		source.push({
			value: song, 
			artist: artist,
			key: key
		});

		var hash = hashSong(song, artist);

		songTable[hash] = {
			title: song, 
			artist: artist,
			key: key,
			note: note,
			keyType: keyType,
			rank: rank
		}

		if (!(key in keyTable)){
			keyTable[key] = [];
		}

		keyTable[key].push(hash);

	}

	$("#add-song-button").click(function(){

		var song = $("#song-input").val();
		var artist = $("#artist-input").val();
		
		if (song.length == 0 || artist.length == 0){
			$(".modal").effect("shake");
			$("#missing-fields").show();
		} else {
			$("#cancel-modal").hide();
			$("#missing-fields").hide();
			$("#add-song-button").text("Adding Song...");

			var hash = hashSong(song, artist);

			var key = $("#key-select").val() + " " + $("#interval-select").val();
			var note = $("#key-select").val();
			var keyType = $("#interval-select").val();

			//add new song to firebase
			firebase.database().ref('songdb/' + hash).once('value').then(function(snapshot) {
				$(".modal-body").hide(400);
				$(".modal-footer").hide(400);
				var url = "song?title=" + song + "&artist=" + artist;

				if (snapshot.val() == null){
					firebase.database().ref('songdb/' + hash).set({
				     	song: song,
				     	key: key,
				     	artist: artist,
				     	note: note,
				     	keyType: keyType
				    });

					initDataObjects(song, artist, key, note, keyType);
					initAutocomplete(source);

					$("#addSongModalTitle").html('Song Added! <a href="' + url + '"> Take me there </a>');

				} else {
					$("#addSongModalTitle").html('Song already exists! <a href="' + url + '"> Take me there </a>');
				}
			});
		}
	})

	function initAutocomplete(source){
		$("#songSearch").autocomplete({
		    source: function(req, res) {
	            var results = $.ui.autocomplete.filter(source, req.term);        
	            res(results.slice(0, 5));
	        },    
	        select: function(event, ui) {
	        	event.preventDefault();
	        	window.location.href += "song?title=" + ui.item.value + "&artist=" + ui.item.artist;
	        },
	        response: function(event, ui) {
	        	if (ui.content.length === 0) {
	                $("#empty-message").show();
	            } else {
	            	$("#empty-message").hide();
	            }
	        }
		}).data("ui-autocomplete")._renderItem = function (ul, item) {
			var resultTemplate = "<span style='color:#76C51F;'>%s</span>";
			var inp = properCaps(item.value, $("#songSearch").val().toLowerCase());
			item.value = shorten(item.value, 40);
			var newTitle = item.value.replace(inp, resultTemplate.replace('%s', inp));

		    return $("<li class='song-panel'></li>")
		       		.data("ui-autocomplete-item", item)
		           .append("<div class='song-title'>" + newTitle + "</div>")
		           .append("<div class='song-key'>" + item.key + "</div>")
		           .append("<div class='song-artist'>" + item.artist + "</div>")
		           .appendTo(ul);
		};
	}

	$("#songSearch").keyup(function(){
		if ($(this).val() == ""){
			$("#empty-message").hide();
		}
	})

	function shorten(str, maxLength){
		return str.length <= maxLength ? str : str.substr(0, maxLength) + "...";
	}
	
	function properCaps(song, inp){
		return song.substr(song.toLowerCase().indexOf(inp), inp.length)
	}

	function hashSong(song, artist){
		return (song + "-" + artist).split(' ').join('');
	}

	function spellKey(key){
		return key.slice(0, -1) + (key[key.length-1] == key[key.length-1].toLowerCase() ? " minor" : " Major");
	}
});


