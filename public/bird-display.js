const $root = $('#root');

$(function () {
    renderPage();
});

export function renderPage() {

    let r;

    r=`
    <br><br><br>
        <div>
            <div class="columns">
                <div class="column">
                    <h1 class="subtitle">What does <b>Northern Cardinal</b> eat?</h1>
            
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
              <option value="region1">region 1</option>
              <option value="region22">region 2</option>
              <option value="region3">region 3</option>
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
          </select> the <u><b>northern cardinal <i>(Cardinalis cardinalis)</i></b></u>
          eats: <input type="submit" id="conditions" value="Submit" />
          <br><br><br>

        </div>
        <div id="table">
        </div>
    `;

    $root.append(r);
    $root.on('click', "#conditions", handleSubmitButtonPress);

}

export function handleSubmitButtonPress(event) {
    let allValue = document.getElementById('all').checked;
    let itemsValue = document.getElementById('items').checked;
    let occurValue = document.getElementById('occur').checked;
    let weightValue = document.getElementById('weight').checked;
    
    let r=`<div id="table">
    <div class="columns">
        <div class="column">
            <img src="col-tax.png">
        

    `;
    
    if(itemsValue||allValue) {
        r+=`<img src="col-items.png">`;
    }
    if(weightValue||allValue) {
        r+=`<img src="col-weight.png">`;
    }

    r+=`<img src="col-unspecified.png">`;
    if(occurValue||allValue) {
        r+=`<img src="col-occur.png">`;
    }


    r+=`</div>
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