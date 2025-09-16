let k = 0;
let r = 0;
let f = false;

function cokc(){
    let m = document.getElementById("geg");
    
    setInterval(() => {
        if (k >= 100){
            f = true
        }
        else if (k <= 0){
            f = false
        }

        if (f)
        k--;
    else k++;
    m.style.width = k + "%";
    }, 1);
}