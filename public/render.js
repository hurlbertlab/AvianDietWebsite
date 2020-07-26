const $root = $('#root');

$(function () {
    renderPage();
});

let species=[];

species[0]= {
    commonName: "Bobolink",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Icteridae",
    genus: "Dolichonyx",
    species: "D. oeyzivorus",
    records: "444",
    studies: "7",
    
    
}

species[1]= {
    commonName: "Grasshopper Sparrow",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Passerellidae",
    genus: "Ammodramus",
    species: "A. savannarum",
    records: "336",
    studies: "5",
    
}

species[2]= {
    commonName: "Philidelphia Vireo",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Vireonidae",
    genus: "Vireo",
    species: "V. philadelphicus",
    records: "749",
    studies: "11",
    
}

species[3]= {
    commonName: "Indigo Bunting",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Cardinalidae",
    genus: "Passerina",
    species: "P. cyanea",
    records: "810",
    studies: "12",
    
}

species[4]= {
    commonName: "Oak Titmouse",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Paridae",
    genus: "Baeolophus",
    species: "B. inornatus",
    records: "583",
    studies: "9",
}

species[5]= {
    commonName: "Yellow-billed Cuckoo",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Cuculiformes",
    family: "Cuculidae",
    genus: "Coccyzus",
    species: "C. americanus",
    records: "198",
    studies: "5",
    
}

species[6]= {
    commonName: "Golden-crowned Kinglet",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Regulidae",
    genus: "Regulus",
    species: "R. satrapa",
    records: "689",
    studies: "8",
    
}

species[7]= {
    commonName: "California Scrub-Jay",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Corvidae",
    genus: "Aphelocoma",
    species: "A. californica",
    records: "700",
    studies: "8",
    
}

species[8]= {
    commonName: "Yellow-billed Magpie",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Corvidae",
    genus: "Pica",
    species: "P. nutalli",
    records: "234",
    studies: "4",
    
}

species[9]= {
    commonName: "Baltimore Oriole",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Icteridae",
    genus: "Icterus",
    species: "I. galbula",
    records: "259",
    studies: "3",
    
}

species[10]= {
    commonName: "Cedar Waxwing",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Bombycillidae",
    genus: "Bombycilla",
    species: "B. cedrorum",
    records: "688",
    studies: "10",
    
}

species[11]= {
    commonName: "Tennessee Warbler",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Parulidae",
    genus: "Leiothlypis",
    species: "L. peregrina",
    records: "799",
    studies: "11",
    
}

species[12]= {
    commonName: "Elegant Trogon",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Trogoniformes",
    family: "Trogonidae",
    genus: "Trogon",
    species: "T. elegans",
    records: "801",
    studies: "12",
    
}

species[13]= {
    commonName: "Evening Grosbeak",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Fringillidae",
    subfamily: "Carduelinae",
    genus: "Coccothraustes",
    species: "C. vespertinus",
    records: "523",
    studies: "4",
    
}

species[14]= {
    commonName: "Chipping Sparrow",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Passerellidae",
    genus: "Spizella",
    species: "S. passerina",
    records: "783",
    studies: "9",
    
}

species[15]= {
    commonName: "Red-tailed Hawk",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Accipitriformes",
    family: "Accipitridae",
    genus: "Buteo",
    species: "B. jamaicensis",
    records: "877",
    studies: "12",
    records: "877",
    studies: "12",
    
}

species[16]= {
    commonName: "Blue Grosbeak",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Cardinalidae",
    genus: "Passerina",
    species: "P. caerulea",
    records: "300",
    studies: "5",
    
}

species[17]= {
    commonName: "Northern Cardinal",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Cardinalidae",
    genus: "Cardinalis",
    species: "C. cardinalis",
    records: "500",
    studies: "10",
    
}

species[18]= {
    commonName: "Bald Eagle",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Accipitriformes",
    family: "Accipitridae",
    genus: "Haliaeetus",
    species: "H. leucocephalus",
    records: "999",
    studies: "22",

    
}
/*
species[19]= {
    commonName: "",
    kingdom: "",
    phylum: "",
    class: "",
    order: "",
    family: "",
    genus: "",
    species: "",
    records: "0",
    studies: "0",

    
}
*/


export function renderPage() {

let r;
r=`<div class="title has-text-centered">Avian Diet Database</div>
<div class="columns is-vcentered">
    <div class="column has-text-centered subtitle">Number of records<br>56,008</div>
    <div class="column has-text-centered subtitle">Number of studies<br>722</div>
    <div class="column has-text-centered subtitle">Number of species<br>600</div>
</div>
<div class="columns is-vcentered"> 
    <div class="column has-text-centered"><form action="bird-display.html" method="GET">What does <input type="text" name="birdName"/> eat?
    <input type="submit" value="Submit" /></div>
</form>

    <div class="column has-text-centered">What eats <b>Lepidoptera</b>?</div><br><form action="prey-display.html">
        <input type="submit" value="Submit" />
    </form>
</div>
<div class="columns is-vcentered">
    <div class="column has-text-centered"><h1 class="subtitle">Top 10 species</h1><br>
        <table style="width:100%">`

        let sortedBirds = [];
        let array=species;

        /*
        for(let i=0; i<species.length; i++) {
            if(species[i]>sortedBirds[i]) {
                
            }
        }
        */

       
        let swapped = false 
        do {
          swapped = false;
          array.forEach((current, i) => {
            //console.log(array.join(' '));
            if(i<array.length-1) {
            if (current.records > array[i + 1].records) {
              const temp = current;
              //console.log(array.join(' '));
              
              array[i] = array[i + 1];
              array[i + 1] = temp;
              swapped = true;
            }
        }
          })
        } while(swapped);
        //console.log(array.join(' '));
        //return array;
      

       //sortedBirds = bubbleSort(species);
       console.log(array);
       r+=`<tr>
       <th>Species</th>
       <th>Records</th> 
       <th>Studies</th>
     </tr>`
       for(let i=0; i<10; i++) {
           r+= `<tr>
           <td>${species[species.length-1-i].commonName}</td>
           <td>${species[species.length-1-i].records}</td>
           <td>${species[species.length-1-i].studies}</td>
         </tr>`;
       }

        
        r+=`
      </table></div>
    <div class="column has-text-centered"><h1 class="subtitle">Bird Family Summary</h1>`

    let alreadyListed = [];
    let j=0;
    let included = false;
    for(let i=0; i<species.length; i++) {
        for (let k=0; k<alreadyListed.length; k++) {
            if(species[i].family==alreadyListed[k]) {
                included = true;
            }
        }
        if(!included) {
            alreadyListed[j]=species[i].family;
            j++;
        }
        included=false;
    }
    console.log(alreadyListed);

    r+=`<form>
    <select name="families" onchange="submitPress()" id="families">
   `;

    for(let m=0; m<alreadyListed.length; m++){

        r+=`<option value="${alreadyListed[m]}">${alreadyListed[m]}</option>`
        
    }


    r+=` </select>
  </form><br>
        <table style="width:100%" id="familyTable">
        <tr>
          <th>Species</th>
          <th>Records</th> 
        </tr>`;

        let selectValue = alreadyListed[0]; 
        for(let i=0; i<species.length; i++) {
            if(species[i].family==selectValue) {
                r+=`<tr>
                <td>${species[i].commonName}</td>
                <td>${species[i].studies}</td>
                </tr>`;
            }
        }

       r+= `
      </table></div>
</div>
</body>`;

$root.append(r);
$root.on('change', "#families", submitPress);

}

export function submitPress(event) {

    let selectValue = document.getElementById('families').value; 
    let content=`<table style="width:100%" id="familyTable">
        <tr>
          <th>Species</th>
          <th>Records</th> 
        </tr>`;
        for(let i=0; i<species.length; i++) {
            if(species[i].family==selectValue) {
                content+=`<tr>
                <td>${species[i].commonName}</td>
                <td>${species[i].studies}</td>
                </tr>`;
            }
        }
        content+=`</table>`;

        $('#familyTable').replaceWith(content);

}
