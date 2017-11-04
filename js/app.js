console.log ('tak!');
'use strict';
document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
      var forDropdown = document.querySelector('.for-dropdown');
      var dropdown = document.querySelector('.dropdown');
      
      forDropdown.addEventListener('mouseover', function(){
      	dropdown.style.display = 'block';
      })
      
       forDropdown.addEventListener('mouseleave', function(){
      	dropdown.style.display = 'none';
      })
      
      
    });
