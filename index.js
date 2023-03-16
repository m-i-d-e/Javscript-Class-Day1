const body = document.querySelector('.body')

const info = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return display(data);
};


const display = (data) => {
  data.map((post) => {
const div = document.createElement("div");
div.innerHTML = `
    <div class='main-title'>
            <h1>My API Table</h1>
        </div>
       <div  class= 'bread'>
        <h2>users:${post.id}</h2>
        <h2>Title:${post.title} </h2>
        <h2>body: ${post.body}</h2>
       </div>

    `;
    body.appendChild(div)
  })
}

info()

