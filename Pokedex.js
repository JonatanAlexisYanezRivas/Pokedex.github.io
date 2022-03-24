//Fecth es la forma en la que hacemos una consulta/peticion a un api

const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./assets/sadPokemon.png")
        }else{
            return res.json();
        }
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
       
    }).then((data)=>{
        document.getElementById("tipo").innerHTML="";
        document.getElementById("estadisticas").innerHTML="";
        document.getElementById("movimientos").innerHTML="";
        console.log(data)
        // let pokeImg = data.sprites.front_default;
        let pokeImg = data.sprites.other.home.front_default;
        let pokeType = data.types;
        let stats = data.stats;
        let moves = data.moves;
        console.log(data.moves.length);
        document.getElementById("estadisticas").innerHTML += `<li class="titleUl">Stats\n</li>`
        for(var i = 0; i<stats.length; i++){
            pokeStats(stats[i].stat.name,stats[i].base_stat)
        }
        document.getElementById("movimientos").innerHTML += `<li class="titleUl">Moves\n</li>`
        for(var i = 0; i<moves.length; i++){
            pokeMoves(data.moves[i].move.name);
           
        }
        for(var i = 0; i<pokeType.length; i++){
            pokeDatos(data.types[i].type.name);
            console.log(data.types[i].type.name);
        }

        console.log(pokeImg);
        pokeImage(pokeImg); 
       
    })
}



const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeDatos = (type) =>{
  document.getElementById("tipo").innerHTML  +=`<li class="color-${type} tiposResponse">${type}</li>`;
    
}

const pokeStats = (nameStat,base_stat) =>{
    document.getElementById("estadisticas").innerHTML += `<li class="statItem">${nameStat}: ${base_stat}\n</li>`
}

const pokeMoves = (move) =>{
    document.getElementById("movimientos").innerHTML += `<li class="moveItem">${move}</li>`
}