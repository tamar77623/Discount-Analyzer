let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let btn = document.getElementById('btn');
let h3 = document.getElementById('h3');
function h3text(){
    setTimeout(() => {
        h3.innerText = ''
    }, 1800);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = `Please ${inp1.placeholder}`;
        h3text();
        return;
    }
    if(inp2.value === ""){
        h3.innerText = `Please ${inp2.placeholder}`;
        h3text();
        return;
    }
    if(inp3.value === ""){
        h3.innerText = `Please ${inp3.placeholder}`;
        h3text();
        return;
    }
    if(inp4.value === ""){
        h3.innerText = `Please ${inp4.placeholder}`
        h3text();
        return;
    }
    account();
}
function account(){
    let Percentagediscountvalue = Number(inp2.value) / 100 * Number(inp1.value);
    console.log(Percentagediscountvalue);
    let Discountedprice = Number(inp1.value) - Percentagediscountvalue - Number(inp4.value);
    console.log(Discountedprice);
    let Taxvalue = Discountedprice * Number(inp3.value) / 100;
    console.log(Taxvalue);
    let Finalprice = Discountedprice + Taxvalue;
    console.log(Finalprice);
    let Totalsavings = Percentagediscountvalue + Number(inp4.value);
    console.log(Totalsavings);
    let Savingspercentage = (Totalsavings / Number(inp1.value)) * 100;
    console.log(Savingspercentage);
}