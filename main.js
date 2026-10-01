let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let btn = document.getElementById('btn');
let h3 = document.getElementById('h3');
let btn2 = document.getElementById('btn2')
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
    inp1.value = '';
    inp2.value = '';
    inp3.value = '';
    inp4.value = '';
}
function account() {
    let originalPrice = Number(inp1.value) || 0;
    let discountPercent = Number(inp2.value) || 0;
    let taxPercent = Number(inp3.value) || 0;
    let couponValue = Number(inp4.value) || 0;

    // 1. حساب قيمة الخصم المئوي
    let Percentagediscountvalue = (discountPercent / 100) * originalPrice;

    // 2. حساب السعر بعد الخصم والقسيمة (مع حماية من القيم السالبة)
    let Discountedprice = originalPrice - Percentagediscountvalue - couponValue;
    if (Discountedprice < 0) Discountedprice = 0;

    // 3. حساب الضريبة
    let Taxvalue = Discountedprice * (taxPercent / 100);

    // 4. حساب السعر النهائي
    let Finalprice = Discountedprice + Taxvalue;

    // 5. حساب إجمالي التوفير ونسبته
    let Totalsavings = Percentagediscountvalue + couponValue;
    let Savingspercentage = originalPrice > 0 ? (Totalsavings / originalPrice) * 100 : 0;
    let result = document.getElementById('result');
    result.style.display = 'block'
    // عرض النواتج داخل عناصر الـ span وتنسيقها لرقمين عشريين (toFixed)
    document.getElementById("resDiscount").textContent = Percentagediscountvalue.toFixed(2);
    document.getElementById("resDiscountedPrice").textContent = Discountedprice.toFixed(2);
    document.getElementById("resTax").textContent = Taxvalue.toFixed(2);
    document.getElementById("resFinalPrice").textContent = Finalprice.toFixed(2);
    document.getElementById("resTotalSavings").textContent = Totalsavings.toFixed(2);
    document.getElementById("resSavingsPercentage").textContent = Savingspercentage.toFixed(1);
    btn2.style.display = 'block';
}
btn2.onclick = function(){
    location.reload();
}