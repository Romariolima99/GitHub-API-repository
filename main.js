const repositories = document.querySelector('.content-main');

function getApiGitHub(){
  let User = document.getElementById("User").value;

  console.log("User", User);
  
  fetch(`https://api.github.com/users/${User}/repos`)
  .then(async res => {
  if ( !res.ok){
    alert("Usuario não encontrado")
      throw new Error(res.status);
      
  }

  let data = await res.json();

  if( !data || data.length <= 0 ){
    alert("repositorios não encontrados");
    return;
  }

  data.map(item => {
    console.log("Recebendo", item.language);
    if(item?.language?.length > 0){
      let project = document.createElement('div');

      project.innerHTML = 
      `
    <div class="project">
      <div>
        <h4 class="title">${item.name}</h4>
         <span class="date-create">${Intl.DateTimeFormat('pt-br').format (new Date(item.created_at)) }</span>
      </div>
   <div>
      <a id="url" href="${item.html_url}" target="_blank">${item.html_url}</a>
      <span class="language"><span class="circle"></span>${item.language}</span>
    </div>
  </div> 
  `
    repositories.appendChild(project);  
    }
  });

  } )
}

function limpar (){
  const  list = document.getElementById("limpar");
  list.replaceChildren();
}

  const container = document.getElementById('limpar');
  const btn = document.getElementById('btn');

  btn.addEventListener('click',function handleClick(){
    container.replaceChildren();
  });



//getApiGitHub();