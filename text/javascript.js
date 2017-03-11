 /*		q - search query term or phrase
		limit - (optional) number of results to return, maximum 100. Default 25.
		offset - (optional) results offset, defaults to 0.
		rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).
		lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported languages here
		fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test) 




//setting up global variables: 

	var queryURL = "http://api.giphy.com/v1/gifs/search?q"
	var q = 
	var limit = 
	var rating = 
	var animals = ["dog","cat","bird","cow", "sheep","chicken"];
 	var animal-input = "cow";
 	var APIkey = dc6zaTOxFJmzC


 	//creating buttons by first emptying out any previous buttons
 	//and then looping through the array
 	function renderButtons() {
 		$("animalButtons").empty();
 		//looping through the array of animals

 		for (var i = 0; i <animals.length; i++){


 			var a = $("<button>");
 			//adding a class
 			a.addClass("movie");
 			//adding a data-attribute with a value of the animals
 			//array at index i
 			a.attr("data-name", animals[i]);
 			//incorporating text in to the newly created buttons
 			a.text(aniamls[i]);
 			//adding the button and text in to the HMTL
 			$("#animalButtons").append(a);


 		}

 	}


	function displayAnimalInformation() {
      var animal = $(this).attr("data-name");
      	alert(animal);



    var queryURL = "http://api.giphy.com/v1/gifs/search?q=dog&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
    	console.log(queryURL);
    };
     /* // Initial array of movies
      var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayAnimalInfor() {
        var movie = $(this).attr("data-name");
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          // Creating a div to hold the movie
          var movieDiv = $("<div class='movie'>");
          // Storing the rating data
          var rating = response.Rated;
          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);
          // Displaying the rating
          movieDiv.append(pOne);
          // Storing the release year
          var released = response.Released;
          // Creating an element to hold the release year
          var pTwo = $("<p>").text("Released: " + released);
          // Displaying the release year
          movieDiv.append(pTwo);
          // Storing the plot
          var plot = response.Plot;
          // Creating an element to hold the plot
          var pThree = $("<p>").text("Plot: " + plot);
          // Appending the plot
          movieDiv.append(pThree);
          // Retrieving the URL for the image
          var imgURL = response.Poster;
          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);
          // Appending the image
          movieDiv.append(image);
          // Putting the entire movie above the previous movies
          $("#movies-view").prepend(movieDiv);
        });
      }
      // Function for displaying movie data
      function renderButtons() {
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("movie");
          // Adding a data-attribute
          a.attr("data-name", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }
      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();
        // Adding movie from the textbox to our array
        movies.push(movie);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".movie", displayMovieInfo);
      // Calling the renderButtons function to display the intial buttons
      renderButtons();
    </script>
  </div>
</body>
</html> 