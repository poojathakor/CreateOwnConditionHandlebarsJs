Handlebars.registerHelper('eq', function(val, val2, options) {
  if(val == val2){
    return options.fn(this);
  }
  else{
	 return options.inverse(this);
  }
});

//Usage in template
//{{#eq type "all" }}
//<button class="orderer" data-target="sortableAnswers_{{type}}">save order</button>
//{{/eq}}
