const $root = $('#root');

$(function () {
    renderPage();
});

let birdList;

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

    var settings = {
        "url": "https://birddietmiddlelayer.herokuapp.com/all_birds",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        birdList=response;
      });

      setTimeout(function(){

        let birdNames = [];
        for(let i=0; i<birdList.length; i++) {
            birdNames[i]=birdList[i].Common_Name;
        }
        console.log(birdNames);

let r;
r=`<script>
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}


/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), ${birdNames});
</script>
<div class="container"><br><br><div class="title has-text-centered">Avian Diet Database</div><br>
<div class="columns is-vcentered">
    <div class="column has-text-centered data-display subtitle"><i>Number of records</i><br><b><span class="number-display">56,008</span></b></div>
    <div class="column has-text-centered data-display subtitle"><i>Number of studies</i><br><b><span class="number-display">722</span></b></div>
    <div class="column has-text-centered data-display subtitle"><i>Number of species</i><br><b><span class="number-display">600</span></b></div>
</div>
<div class="columns is-vcentered"> 
    <div class="column has-text-centered"><form autocomplete="off" action="bird-display.html" method="GET">What does <span class="autocomplete"><input type="text" class="search" name="birdName" id="myInput"/></span> eat?
    <br><br><input type="submit" value="Search" class="search-button" /></div>
</form>

    <div class="column has-text-centered"><form action="prey-display.html" method="GET">What eats <input type="text" class="search" name="birdName"/>?
        <br><br><input type="submit" value="Search" class="search-button" /></div>
    </form>
</div>
<div class="columns is-vcentered">
    <div class="column has-text-centered"><h1 class="subtitle">Top 10 species</h1>
        <table style="width:100%">`

        //NOTE: This first table section will need to go through a lot of reworking
        //because it does not implement the database. This uses placeholder values
        //from the array at the top of the page. It is not a very complicated fix but 
        //Right now it is a missing function

        let sortedBirds = [];
        let array=species;

       
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


    //This needs to be changed when I can reference all the birds
    let alreadyListed = [];
    let j=0;
    let included = false;
    for(let i=0; i<birdList.length; i++) {
        for (let k=0; k<alreadyListed.length; k++) {
            if(birdList[i].Family==alreadyListed[k]) {
                included = true;
            }
        }
        if(!included) {
            alreadyListed[j]=birdList[i].Family;
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
    let selectValue = alreadyListed[0];
    console.log(selectValue);

    // var settings = {
    //     "url": "https://birddietmiddlelayer.herokuapp.com/family_count?bird=",
    //     "method": "GET",
    //     "timeout": 0,
    //   };
      
    //   $.ajax(settings).done(function (response) {
    //     console.log(response);
        
    //   });

    r+=` </select>
  </form><br><div class="scrollbox">
        <table style="width:100%" id="familyTable">
        <tr>
          <th>Species</th>
          <th>Records</th> 
        </tr>`;

         //Here, we're leaving the species reference because referring to the
         //study_count query was causing some server issues. But that should be
         //called for each bird and displayed in that spot.
        for(let i=0; i<birdList.length; i++) {
            if(birdList[i].Family==selectValue) {
                r+=`<tr>
                <td>${birdList[i].Common_Name}</td>
                <td>${species[i].studies}</td>
                </tr>`;
                
            }
        }

       r+= `
      </table></div></div>
</div>
</div></body>`;

$root.append(r);
$root.on('change', "#families", submitPress);

    }, 2000);

}

export function submitPress(event) {

    let selectValue = document.getElementById('families').value; 
    let content=`<table style="width:100%" id="familyTable">
        <tr>
          <th>Species</th>
          <th>Records</th> 
        </tr>`;
        for(let i=0; i<birdList.length; i++) {
            if(birdList[i].Family==selectValue) {
                let numRecords=0;
                let currrentBirdURL = ("https://birddietmiddlelayer.herokuapp.com/record_count?bird="+birdList[i].Common_Name);
                let currentBirdRecords;
                // var settings = {
                //     "url": currrentBirdURL,
                //     "method": "GET",
                //     "timeout": 0,
                //   };
                  
                //   $.ajax(settings).done(function (response) {
                //     console.log(response);
                //     currentBird = response;
                //     for(let j=0; j<currentBird.length; j++) {
                //         numRecords++;
                //     }
                    
                    
                //   });

                var settings = {
                    "url": currrentBirdURL,
                    "method": "GET",
                    "timeout": 0,
                  };
                  
                  $.ajax(settings).done(function (response) {
                    console.log(response);
                    let currentBirdRecords=response;

                    //console.log(currentBirdRecords[Object.keys(currentBirdRecords[0])]);
                    //Here, we're leaving the species reference because referring to the
                    //study_count query was causing some server issues. But that should be
                    //called for each bird and displayed in that spot.
                    content+=`<tr>
                    <td>${birdList[i].Common_Name}</td>
                    <td>${species[i].studies}</td>
                    </tr>`;
                    console.log("Tried to add a bird");
                  });

                  

                  console.log("The bird being displayed here was " + birdList[i].Common_Name);
                
                
            }
        }

        setTimeout(function() {
        content+=`</table>`;

        $('#familyTable').replaceWith(content);
        }, 2000);

}
