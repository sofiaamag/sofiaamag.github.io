fetch('similar.html')
.then(res => res.text())
.then(text => {
    let oldElem = document.querySelector ("script#similar-book-recs");
    let newElem = document.createElement("div");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChildren(newElem, oldElem);
})


