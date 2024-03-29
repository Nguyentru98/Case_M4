function search() {
    let name = document.getElementById('name').value ;
    let date = document.getElementById('date').value ;
    let type = document.getElementById('type').value ;

    axios.get(`http://localhost:3000/trades?date=${date}&type=${type}&name=${name}`).then((res) => {
        let traders = res.data;
        let str ='';
        traders.map(item => {
            str += `
            <tr>
                        <td><input class="form-check-input" type="checkbox"></td>
                        <td>${item.date}</td>
                        <td>${item.name}</td>
                        <td>${item.type}</td>
                        <td>${item.amount}</td>
                        <td> <a class="btn btn-sm btn-primary" onclick="findById(${item.id})">EDIT</a>
                             <a class="btn btn-sm btn-primary" onclick="deleteTrade(${item.id})">DELETE</a>
                        </td>
                        
                    </tr>`
        })
        document.getElementById('list').innerHTML = str;
    })
    
}
