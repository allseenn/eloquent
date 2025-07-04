let sign = "#";

const size = 8;

for(row = 0; row < size; row++){
    line = "";
    if(size % 2 === 0){
        sign = sign === "#" ? " " : "#";
    }
    for(col = 0; col < size; col++){
        sign = sign === " " ? "#" : " ";
        line += sign;
    }
    console.log(line);
}
