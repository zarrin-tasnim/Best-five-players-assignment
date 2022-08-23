

const playerListArray = [];
function buttonSelect(element) {
    let playerName = element.parentNode.parentNode.children[0].innerText;
    playerListArray.push(playerName);

    const ol = document.getElementById('list')
    ol.innerText = '';
    for (let i = 0; i < playerListArray.length; i++) {
        let name = playerListArray[i];
        const li = document.createElement('li');
        li.innerText = `${name}`
        ol.appendChild(li);

    }
    element.disabled = true;

}


document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCostField = document.getElementById('per-player-number');
    const perPlayerCost = perPlayerCostField.value;
    // console.log(perPlayerCost);

    const TotalElement = document.getElementById('per-player-number-total');
    const playerTotalExpence = TotalElement.innerText;
    // console.log(playerTotalExpence);

})

document.getElementById('calculate').addEventListener('click', function () {



})


