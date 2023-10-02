const repositories = document.querySelector('.content-main');

function getApiGitHub(){
fetch('https://api.github.com/users/Romariolima99/repos')
.then(async res => {
if ( !res.ok){
    throw new Error(res.status);

}
let data = await res.json();
data.map(item =>{

    let project = document.createElement('div');

    project.innerHTML = `

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
  

})

} )
}

getApiGitHub();