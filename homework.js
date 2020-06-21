var user ={
    name:"John";
    surname:"Mike"
}
user.name="Peter";
delete user.name;



var fruit = {
    apple:20,
    pear:20,
    peach:10
};

function a(){
    for (var i=0;i<3;i++){
        for (var j=0;j<3;j++){
            for (var k=0;k<6;k++){
                if (i*20+j*20+k*10 == 50){
                    console.log("apple "+i+"pear "+j+"peach "+k);
                }
            }
        }
    }
}

a();

