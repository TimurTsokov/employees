$(document).ready(function () {
    // var responsedata = eval('('+ Request.responseText +')');
    // $('#employeeList').load('data/employees.json');


    // $.getJSON('data/employees.json', function (json) {
    //     $('#employeeList').html('');
    //     $('#employeeList').append(json.inoffice + ' ' + json.name);
    // })

    // $(function () {
    //     $.ajax({
    //         utl: 'data/employees.json',
    //         dataType : 'json',
    //         success: function (response) {
    //             $.each(response, function (i, el) {
    //                 var model = '<span>' + el.inoffice + '</span>' + '<span>' + el.name + '</span>';
    //                 $('#employeeList').append(model);
    //             });
    //         }
    //     })
    // })

    $.getJSON('data/employees.json', function(data) {
        var elem_body = document.createElement('ul');
        var odd_even = false;
        $.each(data, function() {
            var elem_column = elem_body.insertRow();
            elem_column.className = odd_even ? "odd" : "even";
            $.each(this, function(k , v) {
                var cell = elem_column.insertCell();
                cell.appendChild(document.createTextNode(v.toString()));
            });
            odd_even = !odd_even;
        });
        $("#employeeList").appendChild(elem_body);
    });
});