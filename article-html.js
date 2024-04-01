const liElement = document.querySelector("section:nth-child(2) ul");

let liHTML = "";

for (let i = 0; i < 6; i++) {
  liHTML += ` <li>
    <article>
        <img src="pencil.svg">
        <div>
            <h5>Branches</h5>
            <p>Abstract Branches lets you manage, version and documment
                and your designs in one place
            </p>
            <p>Learn more <span class="bi bi-arrow-right"></span> </p>
        </div>
    </article>
</li>`;
}
liElement.innerHTML = liHTML;
