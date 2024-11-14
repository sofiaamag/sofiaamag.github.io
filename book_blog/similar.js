fetch('similar.html')
.then(res => res.text())
.then(text => {
    let oldElem = document.querySelector ("script#similar-book-recs");
    let newElem = document.createElement("div");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChildren(newElem, oldElem);
})


$(document).ready(() => {
    $('.style-book-image').on('mouseenter', () => {
        $('.style-book-image').css('border', '0.5rem solid black ;');
    })
    $('.style-book-image').on('mouseleave', () => {
        $('.style-book-image').css('border', 'none');
    })
})

const books = () => {
    let book1 = document.getElementById();
    console.log(book1)
}

books();