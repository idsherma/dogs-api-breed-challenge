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
            let dogData = data.message;
            console.log(dogData);

            if(dogData === 'Breed not found (master breed does not exist)') {
                alert('Breed not found');
                return;
            } else {
                $('.results-img').replaceWith(`<img src="${dogData}" class="results-img">`);
            }
                    
            //display the results section
            $('.results').removeClass('hidden');
        }

        function watchForm() {
            $('form').submit(event => {
                event.preventDefault();

               let userBreedEntry = $('#breed-list-entry').val();

                if(userBreedEntry === '') {
                    alert('Input can not be left blank');
                    return;
                }

                getDogImage(userBreedEntry);
                $('#dog-form').find('input:text').val(''); 

            });
        }

        $(function() {
            console.log('App loaded! Waiting for submit!');
            watchForm();
        });
        
    })
);