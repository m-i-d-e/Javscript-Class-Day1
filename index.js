const body = document.querySelector('.body')

display = () => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class='main-title'>
            <h1>My API Table</h1>
        </div>
    
       <div  class= 'bread'>
        <h2>users:1</h2>
        <h2>Title:bread </h2>
        <h2>body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat provident ipsam?</h2>
       </div>
    
       
       <div class= 'wine'>
        <h2>users:2</h2>
        <h2>Title: wine</h2>
        <h2>body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure doloribus impedit nobis vel expedita.</h2>
       </div> 
    
       <div class= 'malt'>
        <h2>users:3</h2>
        <h2>Title: malt</h2>
        <h2>body: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eius ab molestias eveniet ut! Voluptatem aspernatur quasi hic!</h2>
       </div>
    `

    body.appendChild(div)
}

display();