name_of_student_array=[];

function submit() {
    var numberone = document.getElementById("number1").value;
    var numbertwo = document.getElementById("number2").value;
    var numberthree = document.getElementById("number3").value;
    var numberfour = document.getElementById("number4").value;

    name_of_student_array.push(numberone);
    name_of_student_array.push(numbertwo);
    name_of_student_array.push(numberthree);
    name_of_student_array.push(numberfour);

    console.log(name_of_student_array);

    document.getElementById("Seconddiv").innerHTML=name_of_student_array;
    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.display="inline-block";

}

function sort() {
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("Seconddiv").innerHTML=name_of_student_array;
}