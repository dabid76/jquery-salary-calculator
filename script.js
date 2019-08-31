$(document).ready( readyNow );

let employee = [];

function readyNow() {
    listOfEmployee();
    $( '#submitBtn' ).on( 'click', handleSubmit);
    let data = $(`
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Annual Salary</th>
                </tr>
            </thead>
            <tbody>`
            ) // end let
    $( 'table' ).append( data );

} // end function

function handleSubmit(){
   let nameVal = $( '#firstName' ).val();
   let lastVal = $( '#lastName' ).val();
   let idVal = $( '#id' ).val();
   let titleVal = $( '#title' ).val();
   let annuVal = $( '#annual' ).val();

   if( nameVal === '' ){
    alert("Please fill out the First Name input");
    $('#firstName').addClass('error');

} else if( lastVal === ''){
    alert("Please fill out the Last Name input");
    $('#lastName').addClass('error');

} else if( idVal === ''){
    alert("Please fill out the ID input");
    $('#id').addClass('error');

} else if( titleVal === ''){
    alert("Please fill out the Title input");
    $('#title').addClass('error');

} else if( annuVal === ''){
    alert("Please fill out the Annual Salary input");
    $('#annual').addClass('error');

} else {
    $('#firstName').removeClass('error');
    $('#lastName').removeClass('error');
    $('#id').removeClass('error');
    $('#title').removeClass('error');
    $('#annual').removeClass('error');

    let newInfo = {
        name: nameVal,
        last: lastVal,
        id: idVal,
        title: titleVal,
        annul: annuVal
    } // end let newInfo

    employee.push( newInfo );

    listOfEmployee();

    $( '#firstName' ).val('');
    $( '#lastName' ).val('');
    $( '#id' ).val('');
    $( '#title' ).val('');
    $( '#annual' ).val('');

    console.log( newInfo );
} // end else statement
} // end function

function listOfEmployee(){
    $('tbody').empty();
    console.log(employee);
    
    for( person of employee ){
        data = $(`
            <tr>
                <td>${person.name}</td>
                <td>${person.last}</td>
                <td>${person.id}</td>
                <td>${person.title}</td>
                <td>${person.annul}</td>
            </tr><button class="deleteEmployee"></button>
            </table>`
            ) // end let
        $( 'tbody' ).append( data );
    } // end for loop
} // end function