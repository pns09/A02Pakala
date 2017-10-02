var book_prices = new Array();
book_prices["satire"]=20;
book_prices["comedy"]=25;
book_prices["drama"]=35;
book_prices["adventure"]=75;

//Set up an associative array 
//The keys represent the filling type
//The value represents the cost of the filling i.e. Denise case filling is $15,Annie filling is $19
//We use this this array when the user selects a filling from the form
var filling_prices = new Array();
filling_prices["None($0)"]=0;
filling_prices["Denise case($15)"]=15;
filling_prices["stephenking($15)"]=15;
filling_prices["Salmanrushdie($10)"]=10;
filling_prices["toni($11)"]=11;
filling_prices["Roy($10)"]=10;
filling_prices["Dr.Seuss($25)"]=25;
filling_prices["Annie($19)"]=19;
filling_prices["neil($25)"]=25;


// getbooktypePrice() finds the price based on the type of the book.
// Here, we need to take user's the selection from radio button selection
function getbooktypePrice() {
	var bookRadio = document.getElementsByName('selectedbook');

	for (i=0; i < bookRadio.length; i++) {
		if (bookRadio[i].checked) {
			user_input = bookRadio[i].value;
		}
	}

	return book_prices[user_input];
}

// getFillingPrice() finds the price based on the filling of the cake.
// Here, we need to take user's the selection from selection list
function getFillingPrice() {
	var authorSelect = document.getElementById('filling');


	return filling_prices[authorSelect.value];
}

// getcdPrice() finds the price based on if they want the cd or not.
function getcdPrice() {
	var includecd = document.getElementById('includecd');

	if(includecd.checked) {
		return(5);
	} else {
		return(0);
	}
}

// getInscriptionPrice() finds the price based if Inscription is selected or not.
function getInscriptionPrice() {
	var bookInscription = document.getElementById('includeinscription');

	if(bookInscription.checked) {
		return(20);
	} else {
		return(0);
	}
}

function calculateTotal() {
	var total = getbooktypePrice() + getFillingPrice() + getcdPrice() + getInscriptionPrice();
	var totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = "Your Total is: $" + total;
	totalEl.style.display = 'block';
}

function hideTotal() {
	var totalEl = document.getElementById('totalPrice');
	totalEl.style.display = 'none';
}