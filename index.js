(function(scs) {
    scs(window.jQuery, window, document);
    }(function($, window, document) {

        'use strict';

        function getDogImage(userBreedEntry) {
            let breedParameter = userBreedEntry;

            let newURL = `https://dog.ceo/api/breed/${userBreedEntry}/images/random`;
            //console.log(test);

            fetch(newURL)
                .then(response => response.json())
                .then(data => 
                    displayResults(data))
        }

        function displayResults(data) {
            console.log(data);

            $('#dog-list').append(``);

        }

        function watchForm() {
            $('form').submit(event => {
                event.preventDefault();

               let userBreedEntry = $('#breed-list-entry').val();
               console.log(userBreedEntry);
               getDogImage(userBreedEntry);

            });
        }

        $(function() {
            console.log('App loaded! Waiting for submit!');
            watchForm();
        });
        
    })
);