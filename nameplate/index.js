/**
 * Created by DerrowR on 9/8/2016.
 */
function updatePreview() {
    //Left name plate updates
    if (document.getElementById("departmentSelect").value != "") {
        document.getElementById("departmentLeft").innerHTML = document.getElementById("departmentSelect").value;
    }
    if (document.getElementById("firstNameInput").value != "") {
        document.getElementById("firstNameLeft").innerHTML = document.getElementById("firstNameInput").value;
    }
    if (document.getElementById("lastNameInput").value != "") {
        document.getElementById("lastNameLeft").innerHTML = document.getElementById("lastNameInput").value;
    }
    if (document.getElementById("startYearInput").value != "" ) {
        if (!isNaN(document.getElementById("startYearInput").value)) {
            document.getElementById("startYearLeft").innerHTML = document.getElementById("startYearInput").value;
        } else {
            alert("Enter a valid start year. Must be a number");
        }
    }


    //Right name plate updates

    if (document.getElementById("departmentSelect").value != "") {
        document.getElementById("departmentRight").innerHTML = document.getElementById("departmentSelect").value;
    }
    if (document.getElementById("departmentSelect").value != "") {
        document.getElementById("departmentRight").innerHTML = document.getElementById("departmentSelect").value;
    }
    if (document.getElementById("firstNameInput").value != "") {
        document.getElementById("firstNameRight").innerHTML = document.getElementById("firstNameInput").value;
    }
    if (document.getElementById("lastNameInput").value != "") {
        document.getElementById("lastNameRight").innerHTML = document.getElementById("lastNameInput").value;
    }
    if (document.getElementById("startYearInput").value != "") {
        document.getElementById("startYearRight").innerHTML = document.getElementById("startYearInput").value;
    }

}

function imgUpload(input) {
    if(input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            //Left plate image
            document.getElementById("plateImageLeft").src = e.target.result;

            //Right plate image
            document.getElementById("plateImageRight").src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function printPlates() {
    window.print()
}

function squareImage() {
    console.log("Square Image");
    //Left plate define
    document.getElementById("plateImageLeft").style.borderRadius = "0px";
    document.getElementById("plateLeftText").style.padding = "0px";
    document.getElementById("departmentLeft").style.marginLeft = "0px";
    document.getElementById("startYearLeft").style.marginLeft = "0px";
    document.getElementById("firstNameLeft").style.marginLeft = "0px";
    document.getElementById("lastNameLeft").style.marginLeft = "0px";

    //Right plate define
    document.getElementById("plateImageRight").style.borderRadius = "0px";
    document.getElementById("plateRightText").style.padding = "0px";
    document.getElementById("departmentRight").style.marginRight = "0px";
    document.getElementById("startYearRight").style.marginRight = "0px";
    document.getElementById("firstNameRight").style.marginRight = "0px";
    document.getElementById("lastNameRight").style.marginRight = "0px";
}

function circularImage() {
    console.log("Circular Image");
    //Left plate define
    document.getElementById("plateImageLeft").style.borderRadius = "50%";
    document.getElementById("plateLeftText").style.padding = "0px";
    document.getElementById("departmentLeft").style.marginLeft = "-37px";
    document.getElementById("startYearLeft").style.marginLeft = "-37px";
    document.getElementById("firstNameLeft").style.marginLeft = "5px";
    document.getElementById("lastNameLeft").style.marginLeft = "5px";

    //Right plate define
    document.getElementById("plateImageRight").style.borderRadius = "50%";
    document.getElementById("plateRightText").style.padding = "0px";
    document.getElementById("departmentRight").style.marginRight = "-37px";
    document.getElementById("startYearRight").style.marginRight = "-37px";
    document.getElementById("firstNameRight").style.marginRight = "5px";
    document.getElementById("lastNameRight").style.marginRight = "5px";
}