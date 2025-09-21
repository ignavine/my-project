       
document.getElementById("submit-btn").addEventListener("click", function(){
    document.getElementById("err").innerText="Message sent successfully";
});
        document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  this.style.borderColor = isValid ? "green" : "red";
});
Let=[
  {tribe:Mankon,Bafut,Mbengwi,Babaki},
  {Meal:Achu},
];
let=[
{tribes:Kom,Bali,Nso,Wom},
{Meal:fufu},
]
let=[
{Trbes:Bakossi,Bayang,Balong,Balondo},
{Meals:Eru},
]
