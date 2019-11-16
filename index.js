(function(scs) {
    scs(window.jQuery, window, document);
    }(function($, window, document) {

        // function shoppingList() {

        //     $("#js-shopping-list-form").submit(function(e) {
        //       e.preventDefault();

        //         let textItem = $(this).find('input[name="shopping-list-entry"]').val();

        //         if (textItem !== "") {	
        //             $('.shopping-list').append((`<li>
        //             <span class="shopping-item">${textItem}</span>
        //             <div class="shopping-item-controls">
        //                 <button class="shopping-item-toggle">
        //                 <span class="button-label">check</span>
        //                 </button>
        //                 <button class="shopping-item-delete">
        //                 <span class="button-label">delete</span>
        //                 </button>
        //             </div>
        //             </li>`));
    
        //           $('#shopping-list-entry').val('');
        //         } 

        //     });

        //     $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        //         $(this).parent().prev().toggleClass('shopping-item__checked');
        //     });
            
        //     $('.shopping-list').on('click','.shopping-item-delete', function() {
        //         $(this).closest('li').remove();
        //     });
        // }

        // shoppingList();

        'use strict';

        function createNode(element) {
            return document.createElement(element);
        }
      
        function append(parent, el) {
          return parent.appendChild(el);
        }
      
        const ul = document.getElementById('authors');

        function getDogImage(num) {
            let numParameter = num;
            const URL = 'https://dog.ceo/api/breeds/image/random/';

            const newURL = URL + numParameter;
            console.log("number of dogs requested was" + " " + `${numParameter}`);

            fetch(newURL)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    // Work with JSON data here
                    //console.log(data);

                    let dogData = data.message;

                    function accessDogData() {
                        let dogArr = [];

                        dogData.forEach(function (dogData, index) {
                            console.log(dogData);
                            dogArr.push(
                                `<img src=${dogData}>`
                            );
                        });

                        return `${dogArr}`;
                    } 

                    function render() {
                        let dogPhotoString = accessDogData();
                        $('#dog-list').html(dogPhotoString);
                    }
    
                    render();
                    
                })
        }

        function watchForm() {
            $('form').submit(event => {
                event.preventDefault();

               let num = $('#dogs').val();
               getDogImage(num);

            });
        }

        $(function() {
            console.log('App loaded! Waiting for submit!');
            watchForm();
        });
        
    })
);