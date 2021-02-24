var myNum = 10, myStr = 'строка', myBool = true, myArr = [1,2,3,4,5],myObj = {first: "First Name", last: "Last Name"};

console.log(myNum,myStr,myBool,myArr,(myObj.first),(myObj.last));
/*let myObj = 
{
    first: "First Name",
    last: "Last Name"
};

alert(myObj.first);
alert(myObj.last);*/

/*var decimal2 = new Number(myNum);
console.log(decimal2.toFixed(2));//в консоли выводит число 10.00*/
var decimal2 = myNum.toFixed(2);
console.log(decimal2);

var i = new Number(myNum);
console.log(i++,++i,i--,--i);

var myTest = 20;
myTest += myNum;
console.log(myTest, myTest -= myNum, myTest *= myNum, myTest /= myNum, myTest %= 3);

var myPi = Math.PI,
    myRound = Math.round(89.279), 
    myRandom = Math.random()*10, 
    myPow = Math.pow(3,5);

console.log(myPi, myRound, myRandom, myPow);


/*var strObj = {
    str: "Мама мыла рама, рама мыла маму"
    
};   */ 
function obj(str_,length_){
    this.str = str_;
    this.length = length_;
};

var str = 'Мама мыла рамy, рама мыла маму';

var strObj = new obj(str,str.length);
console.log(strObj);

var isRamaPos = str.indexOf('рама');
console.log(isRamaPos);

var strReplace = str.replace(str,'Мама моет раму, Рама держит маму');
console.log(strReplace);

//strObj.str = strReplace;
//console.log(strObj,str.length);
console.log(strReplace.toUpperCase(),'\n',str.toLowerCase());

/*var mas = str.split(' ',str.length);
console.log(mas);
for(var i=0; i<mas.length;++i){
   /* if(mas[i]==="рама"){
        console.log(mas[i]);
        var isRamaBool = true;
        console.log(isRamaPos);
    }else{
        var isRamaBool = false;
        console.log('совпадений не найдено');
    }*/
/*    var isRamaBool = mas[i]==="рама"? true : false;
    console.log(isRamaBool);
}*/






 
