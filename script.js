// demo javascript
console.log('hello world!');



var a=6-1,b=5;
if(a<b){
    c=9
}else if(a==b){
    c=10
}else {
    c=11
};

console.log(c);

var e="3"
switch(e){
    case 3:
    document.write("haha");
        break;
    case 9:
    document.write('nana');
        break;
    case "9":
    console.log('ss');
        break;
    default:
    console.log('ddddddddddddd')
}

w=['ww','wc','ws','wy',76545];
for(i=0;i<=10;i++){

    document.write( w[i] );
};

var i=10;
while(i>0){
    i--;
    if(i==2)
    break;
    if(i==3)
    continue;

    console.log(i);
}

function func2(str){
    console.log(str)
};
func2();
