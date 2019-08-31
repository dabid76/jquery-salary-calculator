$(document).ready( readyNow );

let employee = [
    // name: "FirstName",
    // last: "LastName",
    // id: "ID",
    // title: "Title",
    // annul: "AnnuSalalary"
];

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
            </thead>`
            ) // end let
    $( 'table' ).append( data );

    
} // end function

function handleSubmit(){
   let nameVal = $( '#firstName' ).val();
   let lastVal = $( '#lastName' ).val();
   let idVal = $( '#id' ).val();
   let titleVal = $( '#title' ).val();
   let annuVal = $( '#annual' ).val();

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
    
} // end function

function listOfEmployee(){
    $('#listEmployee').empty();
    console.log(employee);
    
    // for (let i = 0; i < employee.length; i++) {
    for( person of employee ){
        let $tbody = $(`
        <tbody>
            <tr>
                <td>${person.name}</td>
                <td>${person.last}</td>
                <td>${person.id}</td>
                <td>${person.title}</td>
                <td>${person.annul}</td>
            </tr>
        </tbody>
        </table>`
            ) // end let
        $tbody.data( 'info', employee );
        $( 'table' ).append( $tbody );
    } // end for loop
} // end function