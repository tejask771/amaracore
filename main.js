function getData(){
    const url = "https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts";
    fetch(url).then((res)=>{
        return res.json();
    }).then((mydata)=>{
        console.log(mydata);
        buildTable(mydata);
    }).catch((err) => {
        console.error(err);
    });
}

function buildTable(data){
    const table = document.getElementById('myTable');
    for (let i = 0; i < data.length; i++){
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
        table.innerHTML += row;
    }
}

getData();