

function leap_year(n){
    if( n %4 == 0 && n %100 == 0 ||n %400 == 0 ){  
            return ('うるう年です！');
        }else{   
            return('うるう年ではありません');
    }   
}

const n = 2230;
console.log(leap_year(n));