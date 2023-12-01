//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sotto forma di stringhe



//*img solo in formato stringa


//dichiaro il div contenitore
const teamElement = document.getElementById("team_membri");

//creo l'array object dei vari membri del team
const arrayTeam = [
    {
        "nome":"Wayne Barnett",
        "ruolo":"Founder & CEO",
        "img":"wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome":"Angel Caroll",
        "ruolo":"Chief Editor",
        "img":"angela-caroll-chief-editor.jpg"
    },
    {
        "nome":"Walter Gordon",
        "ruolo":"Office Manager",
        "img":"walter-gordon-office-manager.jpg"
    },
    {
        "nome":"Angela Lopez",
        "ruolo":"Social Media Manager",
        "img":"angela-lopez-social-media-manager.jpg"
    },
    {
        "nome":"Scott Estrada",
        "ruolo":"Developer",
        "img":"scott-estrada-developer.jpg"
    },
    {
        "nome":"Barbara Ramos",
        "ruolo":"Graphic Designer",
        "img":"barbara-ramos-graphic-designer.jpg"
    }
]

//console.log(arrayTeam);

//creo un ciclo per tutti i membri e stampo per ognuno nome, ruolo e img
for(let i = 0; i< arrayTeam.length; i++){

   let teamIesimo = arrayTeam[i];
   
   //prendo il nome
   let nomeTeamIesimo = teamIesimo.nome;

   //prendo il ruolo
   let ruoloTeamIesimo = teamIesimo.ruolo;

   //prendo l'img
   let imgTeamIesimo = teamIesimo.img;

    //stampo in console tutte le informazioni
   console.log("nome: " + nomeTeamIesimo,
   "ruolo: " + ruoloTeamIesimo,
   "img: " + imgTeamIesimo);


   //creo il div che conterrà le informazioni
   teamMembri = document.createElement("div");

   //creo una classe per poter andare a modificare il css
    teamMembri.classList.add("card");

    //inserisco i membri nel DOM
    teamMembri.innerHTML = 
   `<p>Nome: ${nomeTeamIesimo}</p>
    <p>Ruolo: ${ruoloTeamIesimo}</p>
    <p>img : ${imgTeamIesimo}</p>`;

    //li appendo nel contenitore (teamElement) dichiarato all'inizio
    teamElement.appendChild(teamMembri);


}