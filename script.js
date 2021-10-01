
function multiplyBy()
{
        num1=document.getElementById("mass").value;
        
        num2=document.getElementById("acceleration").value;
        document.getElementById("result").innerHTML = num1 * num2;
} 
function computeDisplacement()
{
       num1=document.getElementById("u").value;
       
       num2=document.getElementById("a").value;
       num3=document.getElementById("t").value;
       document.getElementById("d-result").innerHTML = (num1 * num3)-((num2*(num3*num3))/2);
}
function computeQuadratic()
{    
let root1, root2;

let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById("q-result").innerHTML = (`The roots of quadratic equation are ${root1} and ${root2}`);
}

else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    document.getElementById("q-result").innerHTML = (`The roots of quadratic equation are ${root1} and ${root2}`);
}

else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    document.getElementById("q-result").innerHTML = (
    `${realPart} ,+ ${imagPart} and ${realPart} ,- ${imagPart}`
  );
}
}
function computePmt()
{
        const PMT = parseInt(prompt('Enter PMT:'));
        const rate = parseInt(prompt('Enter the Interest rate:'));
        const period = parseInt(prompt('Enter the number of periods for payment:'));
        var comp = 1 + rate;
        var den =Math.pow(comp,period);
        var p= 1/den;
        var sol= 1-p;
        document.getElementById("pmt-result").innerHTML  = PMT*sol/rate;
}

