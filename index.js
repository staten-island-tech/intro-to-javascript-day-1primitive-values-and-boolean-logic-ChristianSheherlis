/*let string = "strings";
let sentence = "Hello " + "Junshen";
let sentence2 = " and Ema";
//console.log(sentence + sentence2);
let student1 = "Sandra";
let student2 = "Kelly";
let courseName = "AP Computer Science";
let teacherName = "Whalen";*/
/*const longerSentence = 
    student1 +
    " and " +
    student2 +
    " are amazing and will be taking " +
    courseName +
    " next year with " +
    teacherName;*/

    /* const longSentence = `${student1} and ${student2} are amazing and will be taking ${courseName} with ${teacherName}`; */

    ////////////////Number or Integers
    /*let year = 2020;
    let nextYear = 2020 + 1;
    let past = 2020 / 2;
    let farFuture = 2020 * 50; */

    /////Booleans
    /*let trueStatement = true;
    let falseStatement = false;*/

    ////Null and Undefined
    //let undefined;

    //////Boolean Logic
    /*let student = "Caroline";
    let age = 15;*/
    //console.log(student === "Caroline");
    //console.log(student === "caroline");
    //console.log(age <= 15 || age > 19);
    //console.log(age <= 15 && age > 19);

    /////////If statements
    /*let school = "Elementary";
    if(school = "Elementary"){
        console.log("You are in k-5")
    } else if(school === "Middle"){
        console.log("You are in 6,7 or 8th grade");
    } else{
        console.log("you are in HS");
    }
    let ron = "Ron";
    console.log(ron !== "Ema");*/

    let light = "Green";
    if(light == "Green"){
        console.log("Go")
    } else if(light == "Yellow"){
        console.log("Caution")
    } else{
        console.log("Stop")
    }

    let Kristy = "lactose intolerant"
    let baoBao = "loves milk"
    if(Kristy && baoBao == "lactose intolerant"){
        console.log("Kristy and Bao Bao buy almond milk")
    } else if(Kristy || baoBao == "lactose intolerant"){
        console.log("Kristy and Bao Bao buy milk and almond milk")
    } else{
        console.log("Kristy and Bao Bao buy milk")
    }

    let temperature = "69"
    if(temperature < 68){
        console.log("Weather is too damn cold!")
    } else if(temperature <= 72){
        console.log("Hmmmmm, this do be perfect weather")
    } else if(temperature <= 76){
        console.log("Wowzas feel that warmth on my skin")
    } else{
        console.log("Oh jeez, this do be one mega scorcher of a day")
    }

    //////////functions
    /*function test(){
        console.log("TEST");
    }
    test();*/

    /*function argument(name1, name2){
        console.log(name1, name2);
    }
    argument("val", "eric");

    const add = function(x, y){
        return x + y; //immediately ends the function
    };
    console.log(add(10, 3));*/
    /*const hello = function(){
        alert("hello");
    };
    const bye = function(){
        alert("Bye");
    };

    const beatles = function(){
        hello();
        bye();
        hello();
        bye();
    };
    beatles();*/

    /////scope
    /*const name = "Michael y" //global space
    function makeFunc(){
        //closure
        //function scope
        const name = "Sarah"; //function scope
        function displayName(){
            alert(name); //inner function can access outer function
        }
       return displayName; //returning the inner function
    }
    const myFunc = makeFunc();
    myFunc();*/

    ///////arrays
    //const names = ["Diego", "Frid", "Christian", "Valerie", "Haoran", "Brian", "Caroline"];
    //names.push("Caroline");
    //let newNames = names.unshift("Brian");
    //names.forEach(name => console.log(name));
    /*names.filter(somecode).forEach(el () => console.log (el))*/
    ////spread operator
    /*const numbers = [1, 2, 3, 4, 43957690];
    
    const add = function(x, y, z, f, g){
        return x + y + z + f;
    };
    console.log(add(...numbers));*/

    const students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
    const result = students.filter(student => student.length < 5);
    console.log(result);
    console.log(students.includes("junshen"));
    const alan = (element) => "Alan";
    const savva = (element) => "Savva";
    console.log(students.some(alan||savva))
