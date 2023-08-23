name_of_the_students_array=[];

function submit(){
    display_students_array=[];

    for (var j = 1; j<=4; j++) {
        var name=document.getElementById("name_of_the_student_" +j).value;
        name_of_the_students_array.push(name);
    }

    console.log(name_of_the_students_array);
    
    for (var k = 0; k<name_of_the_students_array.length; k++) {
       display_students_array.push("<h4> Name- "+name_of_the_students_array[k]+"</h4>");
    }

    console.log(display_students_array);

    document.getElementById("display_name_with_commas").innerHTML=display_students_array;

    var remove_commas_array=display_students_array.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas_array;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";



}

function sorting(){
    name_of_the_students_array.sort();
    display_students_array=[];

    for (var k = 0; k<name_of_the_students_array.length; k++) {
       display_students_array.push("<h4> Name- "+name_of_the_students_array[k]+"</h4>");
    }

    console.log(display_students_array);

    var remove_commas_array=display_students_array.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas_array;
}