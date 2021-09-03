import axios from "axios";

const tabContainer = document.querySelector('.tabs-container');
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const tabTopics = document.createElement('div');
  const tabJs = document.createElement('div');
  const tabBs = document.createElement('div');
  const tabTech = document.createElement('div');

  tabTopics.appendChild(tabJs);
  tabTopics.appendChild(tabBs);
  tabTopics.appendChild(tabTech);

  tabTopics.classList.add('topics');
  tabJs.classList.add('tab');
  tabBs.classList.add('tab');
  tabTech.classList.add('tab');

  tabJs.textContent = `${Tabs[1]}`
  tabBs.textContent = `${Tabs[2]}`
  tabTech.textContent = `${Tabs[3]}`


  return tabTopics;


}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
//   try {
//     const resp = await axios.get(`http://localhost:5000/api/topics`);
//     for (let i= 0; i < resp.data.message[i]; i++) {
//     const tabApp = Tabs(selector);
//     tabContainer.appendChild(tabApp);
//     }
//   } catch(err) {
//     const errorText = document.createElement('p');
//     errorText.textContent = "no topics here";
//     document.body.appendChild(errorText);
//   }finally {
//     console.log("this shows up at least");
//   }
}

export { Tabs, tabsAppender }
