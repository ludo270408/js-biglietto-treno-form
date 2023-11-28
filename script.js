button.addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;

    if(age == 1){
        price = 0.21 *km * km* 0.8;
    }
    else if(age == 3){
        price = 0.21 *km * km* 0.6;
    }
    else{
        price = 0.21 *km * km;
    }

    console.log(price);
});