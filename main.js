// function to fetch data
function getData() {
    const url = "https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts";
    fetch(url).then((res) => {  //fetched API using fetch method
        return res.json();
    }).then((mydata) => {       //stored result into mydata oject
        console.log(mydata);
        buildTable(mydata);
    }).catch((err) => {         // hadnled the error if an occurs 
        console.error(err);
    });
}

//Function to add data to the table
function buildTable(data) {
    const table = document.getElementById('myTable');
    for (let i = 0; i < data.length; i++) {  //for loop to iterate json object
        const row = `<tr>
            <td>${data[i].id}</td>
            <td>${data[i].avatar}</td>
            <td>${data[i].first_name}</td>
            <td>${data[i].last_name}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].email}</td>
            <td>${data[i].company}</td>
            <td>${data[i].job_title}</td>
        </tr>`;
        table.innerHTML += row;             //added html for the table
    }
}

getData();