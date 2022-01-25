const quotes = [
	{ 
		"quote" : "I do hereby accept to present myself as a Presidential candidate at the Presidential Election on the 9th of August 2022.", 
		"source" : "ODM Leader Raila Odinga" 
	},
	{
		"quote" : "Leadership needs wisdom, which is mostly brought about by age. You can start campaigning early with speed but before long you are tired and the person you branded old will come at his pace and overtake you", 
		"source" : "President Uhuru Kenyatta"
	},
	{
		"quote" : "Mi sipangwingwi", 
		"source" : "Deputy President William Ruto"
	},
	{
		"quote" : "Great minds discuss ideas;  small minds discuss Quotes", 
		"source" : "Wakambo"
	},
	{
		"quote" : "Mezeni wembe ama mjinyonge!", 
		"source" : "Interior Principal Secretary Karanja Kibicho"
	},
	{
		"quote" : "Chama ni UDA, form ni Hustler na mpango ni bottom-up", 
		"source" : "Kirinyaga Governor Anne Waiguru"
	},
	{
		"quote" : "I don’t think you can describe Jimi Wanjigi as Raila’s competition", 
		"source" : "ODM Secretary General Edwin Sifuna."
	},
	{
		"quote" : "You are hereby commanded to apprehend George Kinoti and to bring him before this court to be dealt with according to the law", 
		"source" : "The High Court Of Kenya"
	}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)