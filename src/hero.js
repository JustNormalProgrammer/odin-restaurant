import bgImg from "./assets/debora-rothenbuehler-P65R4uEe5_g-unsplash.jpg"

export default function heroPage(){
    const content = document.querySelector('#content');
    const divText = document.createElement('div');
    divText.classList.add('text-content');
    const h1 = document.createElement('h1');
    h1.textContent = "Pizzeria Boccalino";
    const p = document.createElement('p');
    p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores dolorem tempora nulla dicta.
                Expedita quisquam
                aliquid maiores nihil harum iure unde, quam, numquam laborum architecto dolore iusto atque deleniti.
                Illum libero quod ea natus laboriosam, hic quis! Corrupti unde error soluta sed excepturi nisi!
                Quisquam voluptate, consectetur sequi alias voluptatem reprehenderit quam blanditiis suscipit
                praesentium, minus molestiae voluptates. Non.
                Cum mollitia, nobis laboriosam quibusdam, quos doloribus odit et quas maiores, fugit ratione
                quidem saepe similique porro voluptatibus vitae dolorem assumenda rem distinctio voluptatem
                quo repellendus! Assumenda beatae ut cumque.
                Expedita enim debitis perspiciatis amet, in sit earum hic harum iure veritatis, voluptate eum
                repellat impedit autem nobis! Ullam optio accusamus ut exercitationem commodi consectetur officiis id
                mollitia sunt odio!`;
    divText.appendChild(h1);
    divText.appendChild(p);
    const divImg = document.createElement('div');
    divImg.classList.add('img-content');
    const image = document.createElement('img');
    image.src = bgImg;
    divImg.appendChild(image);
    content.appendChild(divText);
    content.appendChild(divImg);
}
