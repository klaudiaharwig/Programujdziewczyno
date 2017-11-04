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
      
      //Zadanie 2
        var buttons = document.querySelectorAll('.read-more');     
        console.log(buttons);
        console.log(buttons[0].previousElementSibling);
 			buttons[0].addEventListener('click', function(){
 				var textArea = this.previousElementSibling;
 				if (textArea.style.display == 'none' || textArea.style.display == ''){
      			textArea.style.display = 'block';
      			this.innerHTML = 'mniej <span class="glyphicon glyphicon-chevron-up"></span>';
      	} else {
      	textArea.style.display = 'none';
      	this.innerHTML = 'więcej <span class="glyphicon glyphicon-chevron-down"></span>';
      	
        }
    	 })
    	 
    	 
        
   })
    	
    	  