//FOR EVIDENCE 01//
$(() => {

    $("#frm").submit(function (e) {
        e.preventDefault();
        if (!validate()) return;

        var data = new FormData(this);
        console.log(data);
        $.ajax({
            url: './submit',
            type: "POST",
            data: data,

            cache: false,
            contentType: false,
            processData: false,
        })
            .done(r => {
                console.log(r);
                var output = `<h4 >Submited Info:</h4>       
                <div id="p">
                    <img class='thumb-shown' src='${r.p}' />
                </div>
                <div>
                    <strong>Name: </strong> ${r.n}<br />
                    <strong>Email: </strong> ${r.e}<br />
                    <strong>City:</strong> ${r.c}<br />
                    <strong>Gender:</strong> ${r.g}<br />
                    <strong>Date Of Birth:</strong> ${r.d}<br />
                    <strong>Date Of Time:</strong> ${r.t}<br />
                </div>`;

                $('#message_Data').html(output).show();
            })
            .fail(err => {
                console.log(err);
            });
    });
});
function validate() {
    var valid = true;
    var errMsg = "<h4>Error occured in Form: Please check!</h4><br>";
    if ($("#name").val() == "") {
        valid = false;
        errMsg += "Name is required.<br>"
    }
    if ($("#email").val() == "") {
        valid = false;
        errMsg += "Email is required.<br>"
    }else if (!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        valid = false;
        errMsg += "Email Format is invalid.<br>"
    }
    if ($("#city").val() == "") {
        valid = false;
        errMsg += "City is required.<br>"
    }
    if ($("input[name=gender]:checked").length == 0) {
        valid = false;
        errMsg += "Gender is required.<br>"
    }

    if ($("#tob").val() == "") {
        valid = false;
        errMsg += "Time of Birth is required.<br>"
    } else if (!$("#tob").val().match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
        valid = false;
        errMsg += "Time of Birth invalid.<br>"
    }

    if ($("#pic").val() == "") {
        valid = false;
        errMsg += "Picture is required.<br>"
    } else if (/\.(jpg|jpeg|png|gif)$/i.test($('#pic').val()) == false) {
        valid = false;
        errMsg += "Photo's format can be jpg, png or gif.<br>"
    }

    if (!valid) {
        $("#error").html(errMsg).show();
    }
    else $("#error").html("").hide();
    return valid;
}

//FOR EVIDENCE 02//

var emp = { id: 1, name: "Anamul Haque Sohel", salary: 30000.00 };
function Employee(id, name, salary) {
     this.id = id;
     this.name = name;
     this.salary = salary;
}
Employee.prototype.info = function () {
     return `Employee ID: ${this.id}<br>
           Employee Name: ${this.name}<br />
           Salary: ${this.salary}`;
};
function createEmployee(id, name, salary) {
     var obj = {};
     obj.id = id;
     obj.name = name;
     obj.salary = salary;
     obj.info = function () {
          return `Employee ID: ${this.id}<br>
          Employee Name: ${this.name}<br />
             Salary: ${this.salary}`;
     };
     return obj;
}
function Person(name) {
     this.name = name;
}
Person.prototype.info = function () {
     return `${this.name}`;
};
Person.prototype = new Person(); //to intact prototype chain
function Trainee(name, course) {
     Person.call(this, name);
     this.course = course;
}
Trainee.prototype.info = function () {
     return `${this.name} ${this.course}`;
};
document.getElementById("d1").innerHTML += `Employee ID: ${emp.id}<br>
                                             Employee Name: ${emp.name}<br />
                                             Salary: ${emp.salary}`;
var emp1 = new Employee(1, " Md. Habibul Haq", 70000.0);
var emp2 = createEmployee(3, "Sayed Zahidul Hassan", 90000.0);

var p1 = new Person('Person-01');
 var t1 = new Trainee('Person-02', 'Javascript');
document.getElementById("d2").innerHTML += emp1.info();
document.getElementById("d3").innerHTML += emp2.info();
document.getElementById("d4").innerHTML += p1.info();
document.getElementById("d4").innerHTML += "<br />";
document.getElementById("d4").innerHTML += t1.info();