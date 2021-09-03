const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div');
  const cardHead = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const imgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardName = document.createElement('span');

  cardDiv.appendChild(cardHead);
  cardDiv.appendChild(cardAuthor);
  cardAuthor.appendChild(imgContainer);
  cardAuthor.appendChild(cardName);
  imgContainer.appendChild(cardImg);
  
  cardDiv.className = "card";
  cardHead.className = "headline";
  cardAuthor.className = "author";
  imgContainer.className = "img-container";
  
  cardHead.textContent = `headline: ${headline}`;
  cardImg.src = `authorPhoto: ${authorPhoto}`;
  cardName.textContent = `authorName: ${authorName}`;

  cardDiv.addEventListener('click', () => {
    console.log(cardHead);
  })

  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  //   try {
  //   const resp = await axios.get(`http://localhost:5000/api/articles`);
  //   for (let i= 0; i < resp.data.message[i]; i++) {
  //   const cardApp = Tabs(selector);
  //   tabContainer.appendChild(cardApp);
  //   }
  // } catch(err) {
  //   const errorText = document.createElement('p');
  //   errorText.textContent = "no articles here";
  //   document.body.appendChild(errorText);
  // }finally {
  //   console.log("please show up");
  // }
}

export { Card, cardAppender }
