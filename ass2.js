const body = document.querySelector('.body')


const display = (data) => {
  data.map((post) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class='main-title'>
                <h1>My API Table 2</h1>
            </div>
           <div  class= 'water'>
            <h2>users: ${post.id}</h2>
            <h2>Title:${post.title}</h2>
            <h2>completed: ${post.completed}</h2>
           </div>
    
        `;
        body.appendChild(div)
  })
}


const info = async () => {
  const reponse = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await reponse.json();
  return display(data)
}

info()

