let advent = document.querySelector(".js-advent");

function cards() {
    for(let a = 1; a <= 24; ++a) {
        advent.innerHTML += `<div id="index-${a}" class="cards-main">
                                <div class="cards-sub">
                                    <span class="days">December ${a}.</span>
                                </div>
                            </div>`;
    }
}

function render() {
    cards();
}

render();