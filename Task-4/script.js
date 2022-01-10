var selectedRow = null
function onFormSubmit()
{
    if (validate()) 
    {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData()
{
    var formData = {};    
    formData["FirstName"] = document.getElementById("FirstName").value;
    formData["LastName"] = document.getElementById("LastName").value;
    formData["Gender"] = document.querySelector('input[name="Gender"]:checked').value;
    formData["Email"] = document.getElementById("Email").value;
    formData["date"] = document.getElementById("date").value;
    formData["PhoneNumber"] = document.getElementById("PhoneNumber").value;
    formData["Hobby"] = document.querySelector('input[name="Hobby"]:checked').value;
    formData["Address"] = document.getElementById("Address").value;
    return formData;
}
function insertNewRecord(data)
{
    var table = document.getElementById("biodata").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML=data.FirstName;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML=data.LastName; 
    cell3 = newRow.insertCell(2);
        cell3.innerHTML=data.Gender;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML=data.Email;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML=data.date;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML=data.PhoneNumber;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML=data.Hobby;
    cell8 = newRow.insertCell(7);
        cell8.innerHTML=data.Address;
    cell9 = newRow.insertCell(8);
        cell9.innerHTML=`<button onClick="onEdit(this)">Edit</button>
                         <button onClick="onDelete(this)">Delete</button>`;
}
function resetForm()
{
    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("date").value = "";
    document.getElementById("PhoneNumber").value = "";
    document.getElementById("Hobby").value = "";
    document.getElementById("Address").value = "";
    selectedRow= null;
}
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FirstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("LastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;
    document.getElementById("PhoneNumber").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Hobby").value = selectedRow.cells[6].innerHTML;
    document.getElementById("Address").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.FirstName;
    selectedRow.cells[1].innerHTML = formData.LastName;
    selectedRow.cells[2].innerHTML = formData.Gender;
    selectedRow.cells[3].innerHTML = formData.Email;
    selectedRow.cells[4].innerHTML = formData.date;
    selectedRow.cells[5].innerHTML = formData.PhoneNumber;
    selectedRow.cells[6].innerHTML = formData.Hobby;
    selectedRow.cells[7].innerHTML = formData.Address;
}
function onDelete(td)
{
    if (confirm('Are you sure to DELETE this record ?'))
    {
        row = td.parentElement.parentElement;
        document.getElementById("biodata").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate()
{
    isValid = true;
    if(document.getElementById("FirstName").value == "")
    {
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    }
    else
    {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }
    return isValid;
}
