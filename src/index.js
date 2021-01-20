import apiServer from './services/apiServer';

class App {
  constructor() {
    this.searchForm = document.getElementById('form')
    this.mainBody = document.getElementById('main');
    this.paginationBody = document.querySelector(".pagination");
    this.offset = '0';
  }

  async getCharacters() {
    try {
      const charactersDataFromBackend = await apiServer.get(`/characters?offset=${this.offset}`);

      this.populatePageWithCharacters(charactersDataFromBackend.data.characters);
      this.paginateResults(charactersDataFromBackend.data.total);
      this.enableSearch();
    } catch (error) {
      console.log(error);
    }
  }

  populatePageWithCharacters(characters) {
    this.mainBody.innerHTML = '';
    
    characters.forEach(item => { 
  
      const characterElement = document.createElement('div');
      characterElement.classList.add('character');
  
      characterElement.innerHTML = `
              <img src="${this.populateCharactersImage(item.thumbnail.path, item.thumbnail.extension)}" alt="${item.name}">
              <div class="character-info">
                  <h3>${item.name}</h3>
              </div>
              <div class="overview">
                  <h4>Descrição</h4>
                      ${this.populateCharactersDescription(item.description)}
              </div>
              `;
  
      this.mainBody.appendChild(characterElement);
    })
  }

  populateCharactersImage(path, extension) {
    if(path.includes("image_not_available") || extension.includes("gif")) {
      return './img/marvel_logo.jpg';
    } else {
      return `${path}/portrait_uncanny.${extension}`;
    }
  }

  populateCharactersDescription(description) {
    if(description === "") {
      return "Não informado.";
    } else {
      return description;
    }
  }
  
  paginateResults(total) {
    this.paginationBody.innerHTML = "";
  
    const pages = Math.ceil(total / 100);
  
    for(let i = 1; i<= pages; i++) {
      const li = `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
  
      this.paginationBody.innerHTML += li;
    }

    for(let link of document.getElementsByClassName("page-link")) {
      link.onclick = (event) => {
        const page = event.target.dataset.page;

        this.offset = (parseInt(page) - 1) * 100;

        this.getCharacters();
      }
    }
  }
 
  enableSearch() {
    this.searchForm.addEventListener('submit', (e) => {
      e.preventDefault()

      this.mainBody.innerHTML = '';
      const searchTerm = search.value;
  
      if(searchTerm && searchTerm !== '') {
          this.getSpecificCharacterByID(searchTerm);  
      } else {
          window.location.reload()
      }
    })
  }

  async getSpecificCharacterByID(name) {
    try {
      const searchedDataFromBackend = await apiServer.get(`/charactersName?nameStartsWith=${name}`);
      
      this.populatePageWithCharacters(searchedDataFromBackend.data);
      search.value = '';
    } catch (error) {
      console.log(error);
    }
  }
}

const app = new App();

app.getCharacters();