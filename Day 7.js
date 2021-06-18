// First question
function myFunction(object) { 
    var text = "";
    var x;
    for (x in object) {
        text += x + ",";
    }
    
    return text
}

myFunction({ name : "David Rayy", sclass : "VI", rollno : 12 });

//Second question

function delRoll(object) {
    delete object.rollno;
}

delRoll({ name : "David Rayy", sclass : "VI", rollno : 12 });

//Third question
function myFunction(object) {
    var text = 0;
    for (var x in object) {
        text += 1;
    }
    
    return text
}

myFunction({ name : "David Rayy", sclass : "VI", rollno : 12 });

//Fourth question
function myFunction(object) {
    var text = "";
    var x;
    for (x in object) {
        text += object[x] + " ,";
    }
    
    return text;
}

//Fifth question
function myFunction(object) { 
    let Vol = Math.PI*object.radius**2*object.height;
    console.log(volume.toFixed(4));
}
myFunction({radius:5,height:20})

//Sixth question

library.sort(function (obj1, obj2) {
    return obj1["libraryID"] - obj2["libraryID"];
});
