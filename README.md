# CreateOwnConditionHandlebarsJs
hello, Attached code defines how we can add custom helper class such as greater than , Equal to , Less than etc

Before you add this code, you have to include 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.js' in your code

```
Handlebars.registerHelper('eq', function(val, val2, options) {
  if(val == val2){
    return options.fn(this);
  }
  else{
	 return options.inverse(this);
  }
});
```
=========================== Usage in template ===================================

{{#eq type "all" }}
<button class="orderer" data-target="sortableAnswers_{{type}}">save order</button>
{{/eq}}
