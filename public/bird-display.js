const $root = $('#root');

//Below are the sample values for testing. These represent some species and
//prey options that will be present in the final product.
//These can later be put into a different file and they should be in one now,
//but I wasn't really sure how to connect them.

let species = [];

species[0]= {
    commonName: "Bobolink",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "Passeriformes",
    family: "Icteridae",
    genus: "Dolichonyx",
    species: "D. oeyzivorus",
    records: 444,
    studies: 7,
    
    
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
    records: 336,
    studies: 5,
    
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
    records: 749,
    studies: 11,
    
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
    records: 810,
    studies: 12,
    
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
    records: 583,
    studies: 9,
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
    records: 198,
    studies: 5,
    
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
    records: 689,
    studies: 8,
    
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
    records: 700,
    studies: 8,
    
}

species[8]= {
    commonName: "Yellow-billed Magpie",
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Aves",
    order: "",
    family: "",
    genus: "",
    species: "",
    records: 234,
    studies: 4,
    
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
    records: 259,
    studies: 3,
    
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
    records: 688,
    studies: 10,
    
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
    records: 799,
    studies: 11,
    
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
    records: 801,
    studies: 12,
    
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
    records: 523,
    studies: 4,
    
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
    records: 783,
    studies: 9,
    
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
    records: 877,
    studies: 12,
    
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
    records: 300,
    studies: 5,
    
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
    records: 500,
    studies: 10,
    prey: [{
        preyName: "Caryophyllales",
        items: .3638,
        weight: "NA",
        occur: ".0543"
    }]
    
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
    records: "1218",
    studies: "22",

    
}



$(function () {
    renderPage();
});



export function renderPage() {

    let birdName=window.location.search;
    console.log("bird name is " + birdName);
    let a=birdName;
    var b = '';
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= 'A' && a[i] <= 'z' || a[i]=='+') {
            if(a[i]=='+'){
                b+=' ';
            }
            else
            {b += a[i];}
            
        }
    }
    console.log(b);

    b=b.substring(8);
    console.log(b);

    let r;
    let thisBird=species[0];

    var settings = {
        "url": "https://birddietmiddlelayer.herokuapp.com/bird_search?bird=" + b,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        thisBird=response;
      });


    // for(let i=0; i<species.length; i++) {
    //     if(b==species[i].commonName) {
    //         thisBird=species[i];
    //         break;
    //     }
    // }

    

    r=`
    <br><br><br>
        <div>
            <div class="columns">
                <div class="column">
                    <h1 class="subtitle">What does <b>${b}</b> eat?</h1>
            
                    <div class="columns">
                        <div class="column">
                            <h2><b>108</b> records</h2>
                            <img src="first-half-graphs.png">
                        </div>
                        <div class="column">
                            <h2><b>4</b> studies</h2>
                            <img src="first-half-graphs.png">
                        </div>
                    </div>
                </div>
                <div class="column">
                    <img src="US-bird-map.png">
                </div>
            </div>
        </div>
        <div>
        <div class="columns">
            <div class="column">
            <div>Based on 
                <div class="columns">
                    <div class="column">
                        <input type="checkbox" id="all" name="all" value="all" checked>
                        <label for="all">all</label><br>
                        <input type="checkbox" id="occur" name="occur" value="occur">
                        <label for="occur">% occurrence</label>
                    </div>
                    <div class="column">
                        <input type="checkbox" id="items" name="items" value="items">
                        <label for="items">% by items</label><br>
                        <input type="checkbox" id="weight" name="weight" value="weight">
                        <label for="weight">% by weight/vol</label>
                    </div>
                </div>
            </div>
            </div>
            <div class="column">
                Data from <select name="year" id="year">
                <option value="allYears">all years</option>
                <option value="year1">year 1</option>
                <option value="year2">year 2</option>
                <option value="year3">year 3</option>
              </select> in <select name="seasons" id="seasons">
              <option value="allSeasons">all seasons</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
              </select> in <select name="regions" id="regions">
              <option value="allRegions">all regions</option>
              <option value="alabama">Alabama</option>
              <option value="alaska">Alaska</option>
              <option value="arizona">Arizona</option>
              <option value="arkansas">Arkansas</option>
              <option value="california">California</option>
              <option value="colorado">Colorado</option>
              <option value="connecticut">Connecticut</option>
              <option value="delaware">Delaware</option>
              <option value="florida">Florida</option>
              <option value="georgia">Georgia</option>
              <option value="hawaii">Hawaii</option>
              <option value="idaho">Idaho</option>
              <option value="illinois">Illinois</option>
              <option value="indiana">Indiana</option>
              <option value="iowa">Iowa</option>
              <option value="kansas">Kansas</option>
              <option value="kentucky">Kentucky</option>
              <option value="louisiana">Louisiana</option>
              <option value="maine">Maine</option>
              <option value="maryland">Maryland</option>
              <option value="massachusetts">Massachusetts</option>
              <option value="michigan">Michigan</option>
              <option value="minnesota">Minnesota</option>
              <option value="mississippi">Mississippi</option>
              <option value="missouri">Missouri</option>
              <option value="montana">Montana</option>
              <option value="nebraska">Nebraska</option>
              <option value="nevada">Nevada</option>
              <option value="hampshire">New Hampshire</option>
              <option value="jersey">New Jersey</option>
              <option value="mexico">New Mexico</option>
              <option value="york">New York</option>
              <option value="ncarolina">North Carolina</option>
              <option value="ndakota">North Dakota</option>
              <option value="ohio">Ohio</option>
              <option value="oklahoma">Oklahoma</option>
              <option value="oregon">Oregon</option>
              <option value="pennsylvania">Pennsylvania</option>
              <option value="rhode">Rhode Island</option>
              <option value="scarolina">South Carolina</option>
              <option value="sdakota">South Dakota</option>
              <option value="tennessee">Tennessee</option>
              <option value="texas">Texas</option>
              <option value="utah">Utah</option>
              <option value="vermont">Vermont</option>
              <option value="virginia">Virginia</option>
              <option value="washington">Washington</option>
              <option value="wvirginia">West Virginia</option>
              <option value="wisconsin">Wisconsin</option>
              <option value="wyoming">Wyoming</option>

            </select>
            </div>
        </div>
        </div>
        <div class="has-text-centered">
        <br><br>
            and summarized at the level of <select name="tax" id="tax">
            <option value="domain">domain</option>
            <option value="kingdom">kingdom</option>
            <option value="phylum">phylum</option>
            <option value="class">class</option>
            <option value="order">order</option>
            <option value="family">family</option>
            <option value="genus">genus</option>
            <option value="species">species</option>
          </select> the <u><b>${thisBird.commonName} <i>(${thisBird.species})</i></b></u>
          eats: <input type="submit" id="conditions" value="Submit" />
          <br><br><br>

        </div>
        <div id="table">
        </div>
    `;

    $root.append(r);
    $root.on('click', "#conditions", handleSubmitButtonPress);

}

//Generates table depending on selected conditions
export function handleSubmitButtonPress(event) {
    let allValue = document.getElementById('all').checked;
    let itemsValue = document.getElementById('items').checked;
    let occurValue = document.getElementById('occur').checked;
    let weightValue = document.getElementById('weight').checked;
    
    let r=`<div id="table">
    <div class="columns">
        <div class="column">
        <table style="width:100%">
            <table>
            <tr>
            <th>Taxon</th>
    `;
    
    //Title row
    if(itemsValue||allValue) {
        r+=`<th>Items</th>`;
    }
    if(weightValue||allValue) {
        r+=`<th>Weight</th>`;
    }

    r+=`<th>Unspecified</th>`;
    if(occurValue||allValue) {
        r+=`<th>Occurrence</th>`;
    }

    //Further rows
    // for(let i=0; i<currentBird.)
    // if(itemsValue||allValue) {
    //     r+=`<th>Items</th>`;
    // }
    if(weightValue||allValue) {
        r+=`<th>Weight</th>`;
    }

    r+=`<th>Unspecified</th>`;
    if(occurValue||allValue) {
        r+=`<th>Occurrence</th>`;
    }


    r+=`</tr>`;

    
    r+=`</table></div>
    <div class="column">
        <h3 class="title">Data sources:</h3>
        <p>Beal, F. E.L. 1941. Common birds of southeastern United States in relation to agricutlure. U.S. Fish and Wildlife Service Conservation Bulletin 15.
        </p>
        <br>
        <p>McAtee, W. L. 1908. Food habits of the grosbeaks. U.S. Department of Agriculture Biological Survey, Bulletin No. 32. Washington, D.C.
        </p>
        <br>
        <p>Martin, A. C., Zim, H. S., and Nelson, A. L. 1961. American wildlife & plants : a guide to wildlife food habits : the use of trees, shrubs, weeds, and herbs by birds and mammals of the United States. Dover Publications, New York, 500 pp.
        </p>
        <br>
        <p>Howell, A. 1928. Birds of Alabama. Department of Game and Fisheries of Alabama.
        </p>
    </div>
    </div>
    </div>`;
    $('#table').replaceWith(r);
}