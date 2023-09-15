const form = document.querySelector("form");
const result = document.querySelector("#result");
const p = document.createElement("p");
// In This case it will give you empty Value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter Valid Height ${height}`;
    } else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter Valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`

        if(bmi < 18.6){
            p.innerHTML = `You Are In Under Weight Category`;
            result.appendChild(p);
        }else if( bmi < 18.6 || bmi > 24.6){
            p.innerHTML = `You Are In Normal Range`;
            result.appendChild(p);
        } else if(bmi > 24.9){
            p.innerHTML = `You Are In Over Weight Category`;
            result.appendChild(p);
        }
    }
})