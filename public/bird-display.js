const $root = $('#root');

//Below are the sample values for testing. These represent some species and
//prey options that will be present in the final product.
//These can later be put into a different file and they should be in one now,
//but I wasn't really sure how to connect them.

let thisBird;

$(function () {
    renderPage();
});



export function renderPage() {

    let birdName=window.location.search;
    console.log("bird name is " + birdName);
    let a=birdName;
    var b = '';
    let c = '';
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= 'A' && a[i] <= 'z' || a[i]=='+') {
            if(a[i]=='+'){
                b+=' ';
                c+=a[i];
            }
            else
            {b += a[i]
                c+=a[i];}
            
        }
    }
    console.log(b);

    b=b.substring(8);
    console.log(b);
    c=c.substring(8);

    let r;
    //thisBird=species[0];
    console.log("c is " + c);
    

    let urlUsed = ("https://birddietmiddlelayer.herokuapp.com/bird_search?bird=" + c);
    console.log(urlUsed);
    var settings = {
        "url": urlUsed,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        thisBird=response;
        //console.log("Space indicating...");
        //console.log(thisBird);
        //console.log(thisBird[0].Scientific_Name);
      });

      setTimeout(function() {
        console.log("This bird is "+ thisBird[0].Scientific_Name);
        console.log(thisBird);
      }, 3000);
      



    // for(let i=0; i<species.length; i++) {
    //     if(b==species[i].commonName) {
    //         thisBird=species[i];
    //         break;
    //     }
    // }

    setTimeout(function() {  

        let counter=0;
        for(let i =0; i<thisBird.length; i++) {
            counter++;
        }

    r=`
    <br><br><br>
        <div>
            <div class="columns">
                <div class="column">
                    <h1 class="subtitle center">What does <b>${b}</b> eat?</h1>
            
                    <div class="columns">
                        <div class="column">
                            <h2 class="center"><b>${counter}</b> records</h2>
                            <img src="first-half-graphs.png" class="center">
                        </div>
                        <div class="column">
                            <h2><b>4</b> studies</h2>
                            <img src="first-half-graphs.png" class="center">
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
            <option value="species">species</option>`

          r+=`</select> the <u><b>${b} <i>(${thisBird[0].Scientific_Name})</i></b></u>
          eats: <input type="submit" id="conditions" value="Submit" />
          <br><br><br>

        </div>
        <div id="table">
        </div>
    `;

    $root.append(r);
    $root.on('click', "#conditions", handleSubmitButtonPress);
}, 1000);

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
        <div class="scrollbox betterscroll" id="betterscroll">
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

    if(occurValue||allValue) {
        r+=`<th>Occurrence</th>`;
    }

    r+=`</tr>`;

    let alreadyCounted = [];
    let j=0;
    let isUnique=true;

    //This will go through each piece of data for this bird and makes sure
    //each only gets counted once when summing up values for the table.
    for(let i=0; i<thisBird.length; i++) {

        for(let k = 0; k<alreadyCounted.length; k++){
            if(alreadyCounted[k]==thisBird[i].Prey_Common_Name){
                isUnique=false;

            }
        }

        if(isUnique) {

            alreadyCounted[j]=thisBird[i].Prey_Common_Name;
            j++;
            let values=countNumbers(thisBird[i].Prey_Common_Name);

            r+=`<tr><td>${thisBird[i].Prey_Common_Name}</td>`
            
            if(itemsValue||allValue) {
                r+=`<td>${values.items}</td>`;
            }
            if(weightValue||allValue) {
                r+=`<td>${values.weight}</td>`;
            }
            if(occurValue||allValue) {
                r+=`<td>${values.occur}</td></tr>`;
            }
        }

        // if(allValue) {

        // }

        isUnique=true;

    }

    //repeated from renderPage
    let birdName=window.location.search;
    console.log("bird name is " + birdName);
    let a=birdName;
    var b = '';
    let c = '';
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= 'A' && a[i] <= 'z' || a[i]=='+') {
            if(a[i]=='+'){
                b+=' ';
                c+=a[i];
            }
            else
            {b += a[i]
                c+=a[i];}
            
        }
    }
    console.log(b);

    b=b.substring(8);
    console.log(b);
    c=c.substring(8);

    console.log("c is " + c);
//end of repeat
let sources;
let sourceURL="https://birddietmiddlelayer.herokuapp.com/sources?bird="+c;
var settings = {
  "url": sourceURL,
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
  sources=response;
});
    
setTimeout(function() {
    r+=`</table></div></div>
    <div class="column"><div class="scrollbox betterscroll">
        <h3 class="title">Data sources:</h3>`;
        for(let i=0; i<sources.length; i++) {
       r+= `<p>${sources[i].Source}
        </p>
        <br>
        `;
        }
    r+=`</div></div>
    </div>
    </div>`;
    $('#table').replaceWith(r);
}, 2000);
}

//This function sums up each kind of fraction for each type of diet measurement
//Some types will need different methods, but this uses the same basic one for
//each.
export function countNumbers(str) {

    let fullSet = {
        items: 0,
        weight: 0,
        occur: 0,
    }
    for(let i=0; i<thisBird.length; i++) {
        
        if(thisBird[i].Prey_Common_Name==str) {

            if(thisBird[i].Diet_Type=="Items") {

                fullSet.items+=thisBird[i].Fraction_Diet;

            }
            if(thisBird[i].Diet_Type=="Wt_or_Vol") {

                fullSet.weight+=thisBird[i].Fraction_Diet;

            }
            if(thisBird[i].Diet_Type=="Occurrence") {
                
                fullSet.occur+=thisBird[i].Fraction_Diet;

            }
        }
    }

    return fullSet;
}