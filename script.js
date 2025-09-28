       
document.getElementById("submit-btn").addEventListener("click", function(){
    document.getElementById("err").innerText="Message sent successfully";
});
        document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  this.style.borderColor = isValid ? "green" : "red";
});








const data= {
Mankon:[
  {
    title: "achu",
    descriptio: "Achu is a traditional dish from Cameroon, typically made with pounded cocoyams and served with a yellow soup made from palm oil, spices, and sometimes meat or fish.",
    image:"images/Achu.jpg",
    tribalname:"",
    ingredients: [
      "Cocoyams",
      "Palm oil",
      "Spices (e.g., kanwa,)",
      "Meat or fish (optional)",
      "Salt"
    ]
  } ,
  {
  title:"fufu",
  description:"Fufu is a staple food in  Cameroon. It is made by boiling starchy vegetables then pounding them into a smooth, dough-like consistency. Fufu is typically served with soups or stews.",
  image:"images/fufu.jpg",
  tribalname:"",
  ingredients: [
    "Cassava, yams, or plantains",
    "Water",
    "Salt (optional)"
  ]
  }
],
Kom:[
{
title:"fufu  and khati khati",
description:"Fufu and khati khati is a traditional meal in kom that is made with fresh vegitables,fowl and grind corn",
image:"images/fufu.jpg",
tribalname:"",
ingredients: [
"corn flour",
"Boild water",
"Fresh vegitable",
"Fowl",
"maggi ans salt"
]
},
{
title: "achu",
    descriptio: "Achu is a traditional dish from Cameroon, typically made with pounded cocoyams and served with a yellow soup made from palm oil, spices, and sometimes meat or fish.",
    image:"images/Achu.jpg",
    tribalname:"",
    ingredients: [
      "Cocoyams",
      "Palm oil",
      "Spices (e.g., kanwa,)",
      "Meat or fish (optional)",
      "Salt"
    ]
}
],
Batibo:[
{
title:"Beans & Plantian",
description:"It is a traditional meal in batibo made with beans,palm oil, meat,bonga and plantians",
image:"images/beans.jpg",
ingredients:[
  "Beans",
  "Red oil",
  "Bonga",
  "Maggi and salt",
  "Plantians"
]
},
{
Title:"Better leave and banana",
description:"It is one of the cultural meals of batibo maid with better leave,palm oil and banana",
ingredients:[
"Better leave",
"Red oil",
"Dry meat",
"Massopo",
"Maggi and salt"
]
}
],
Bassa:[
{
Title:"Koki and cassava",
description:"Koki and cassava is a traditional meal in Bassa which is made with koki beans,red oil,and cassava",
image:"images/koki.jpg",
ingredients:[
"Koki beans",
"Red oil",
"Coco leaves",
"Salt and Maggi",
"Cassava",
]
},
{
Title:"Ndole",
description:"Ndole and plantian is a traditional meal made with better leaves ,groundnuts,and plantians ",
image:"images/Ndole.jpg",
ingredients:[
"Better leaves",
"Groundnuts",
"Groundnut oil",
"Maggi and salt",
"Ginger and gallies",
"onion",
"Plantians"
]
}
],
Bali:[
{
Title:"Fufu",
title:"fufu  and Soup",
description:"Fufu and khati khati is a traditional meal in kom that is made with fresh vegitables,fowl and grind corn",
image:"images/fufu.jpg",
tribalname:"",
ingredients: [
"corn flour",
"Boild water",
"Fresh vegitable",
"Fowl",
"maggi ans salt"
]
}
],
Bamilike:[
{
Title:"Eru",
description:"Eru is a traditional meal in Bamilike made with water leaves, eru leaves, red oil and water fufu",
image:"images/Eru.jpg",
ingredients:[
"Water leaves",
"Eru leaves",
"Red oil",
"Salt and maggi",
"Crefish",
"Water fufu"
]
},
{
Title:"Koki ",
description:"Koki and cassava is a traditional meal in Bamilike which is made with koki beans,red oil,and cassava",
image:"images/koki.jpg",
ingredients:[
"Koki beans",
"Red oil",
"Coco leaves",
"Salt and Maggi",
"Cassava",
]
}
],
Manfe:[
{
Title:"Turning cocoyams",
description:"Turning cocoyams is a traditional meal in Manfe made with cocoyams, red oil and better leaves",
image:"images/turning.jpg",
ingredients:[
"Cocoyams",
"Red oil",
"Better leaves",
"Salt and maggi",
"Dry fish"
]
},
{
Title:"Beans and plantian",
description:"It is a traditional meal in batibo made with beans,palm oil, meat,bonga and plantians",
image:"images/beans.jpg",
ingredients:[
  "Beans",
  "Red oil",
  "Bonga",
  "Maggi and salt",
  "Plantians"
]
}
],
Meta:[
  {
  Title:"Turning cocoyams",
  description:"Turning cocoyams is a traditional meal in Manfe made with cocoyams, red oil and better leaves",
  image:"images/turning.jpg",
  ingredients:[
  "Cocoyams",
  "Red oil",
  "Better leaves",
  "Salt and maggi",
  "Dry fish"
  ]
  },
  {
  Title:"Eru",
  description:"Eru is a traditional meal in Bamilike made with water leaves, eru leaves, red oil and water fufu",
  image:"images/Eru.jpg",
  ingredients:[
  "Water leaves",
  "Eru leaves", 
  "Red oil",
  "Salt and maggi",
  "Crefish",
  "Water fufu"
  ]
  }
],
Bakoko:[
{
Title:"Kok",
description:"kok is a traditional meal in Bakoko made with eru leaves,groundnuts,sugar and cassava",
image:"images/kok.jpg",
ingredients:[
"Eru leaves",
"Groundnuts",
"Sugar",
"Salt",
"Banga",
"Cassava"
]
},
{
Title:"Ndole",
description:"Ndole and plantian is a traditional meal made with better leaves ,groundnuts,and plantians ",
image:"images/Ndole.jpg",
ingredients:[
"Better leaves",
"Groundnuts",   
"Groundnut oil",
"Maggi and salt",
"Ginger and gallies",
"onion",
"Plantians"
]
},
{
Title:"Ekwang",
description:"Ekwang is a traditional meal in Bakoko made with grated cocoyams, cocoyam leaves, and palm nut soup",
image:"images/ekwang.jpg",
ingredients:[
"Grated cocoyams",
"Cocoyam leaves",
"Palm nut soup",
"Meat or fish",
"Salt and maggi"
]
}
],
WOM:[
{
Title:"Fufu",
title:"fufu  and Soup",
description:"Fufu and khati khati is a traditional meal in kom that is made with fresh vegitables,fowl and grind corn",
image:"images/fufu.jpg",
tribalname:"",
ingredients: [
"corn flour",
"Boild water",
"Fresh vegitable",
"Fowl", 
"maggi ans salt"
]
},
{
Title:"Fufu and khati khati",
description:"Fufu and khati khati is a traditional meal in kom that is made with fresh vegitables,fowl and grind corn",
image:"images/fufu.jpg",
tribalname:"",
ingredients: [
"corn flour",
"Boild water",
"Fresh vegitable",
"Fowl",
"maggi ans salt"
]
}
]
}  