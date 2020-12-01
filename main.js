let card = document.querySelector('.card-container');
console.log(card);

let searchInput = document.querySelector('.search-bar');
console.log(searchInput);

let searchItem;
let data = [];

searchInput.addEventListener('keydown', e => {
    searchItem = e.target.value.toLowerCase();
    const filterSearch = data.filter(item => {
        return item.name.toLowerCase().includes(searchItem);
    });

    display(filterSearch);
});

const getApi = async() => {

    let fetchApi = await fetch('https://emajency.com/js/numbers.json');
    data = await fetchApi.json();
    console.log(data);

    display(data);
};


const display = (input) => {
    const htmlDisplay = input.map(item => {
        return (`

            <div class="card">

                <p> <span>name:</span> ${item.name}</p>
                <p><span>number:</span> <a href="tel:${item.number}">
                        <i class="fas fa-phone"></i>
                    </a>
               </p>

         </div>
            `);
    }).join('');
    card.innerHTML = htmlDisplay;
}

getApi();