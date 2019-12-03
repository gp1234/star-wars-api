const form = document.querySelector(".form");

function handleRequest(e) {
    e.preventDefault();
    let id = this[0].value;
    fetch(`https://swapi.co/api/people/${id}`)
        .then(result => {
            return result.json();
        }).then(resp => {
            const table = document.querySelector('tbody');
            const html  = `
                    <tr>
                        <td>${resp.name}</td>
                        <td>${resp.birth_year}</td>
                        <td>${resp.gender}</td>
                    </tr>
            `;
            table.insertAdjacentHTML('beforeend', html);
        })
        .catch((err) => {
            console.log(err)
            
        })

}

form.addEventListener("submit", handleRequest);