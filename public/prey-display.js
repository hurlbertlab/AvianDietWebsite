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
            the followingbirds eat prey of the <select name="tax" id="tax">
            <option value="domain">domain</option>
            <option value="kingdom">kingdom</option>
            <option value="phylum">phylum</option>
            <option value="class">class</option>
            <option value="order">order</option>
            <option value="family">family</option>
            <option value="genus">genus</option>
            <option value="species">species</option>
          </select> the <u><b>northern cardinal Lepidoptera</b></u>,
          <br><br>
          including life stages 
          <div class="columns">
          <div class="column">
           <div class="columns">
          <div class="column">
            
              <input type="checkbox" id="allStage" name="allStage" value="allStage" checked>
              <label for="allStages">all</label><br>
              <input type="checkbox" id="adult" name="adult" value="adult">
              <label for="adult">adult</label>
          </div>
          <div class="column">
              <input type="checkbox" id="larva" name="larva" value="larva">
              <label for="larva">larva</label> <br>
              <input type="checkbox" id="pupa" name="pupa" value="pupa">
              <label for="pupa">pupa/vol</label>

              
          </div>
        
          
      </div>
      </div>
      <div class="column">
      
      </div>
      </div>
          <input type="submit" id="conditions" value="Submit" />
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
    &nbsp;&nbsp;&nbsp;&nbsp;<div class="column">
            <img src="row-header.png">
        

    `;
    
    if(itemsValue||allValue) {
        r+=`<img src="row-items.png">`;
    }
    

    if(occurValue||allValue) {
        r+=`<img src="row-occur.png">`;
    }

    if(weightValue||allValue) {
        r+=`<img src="row-weight.png">`;
    }



    r+=`</div>
    <div class="column">
        
    </div>
    </div>
    </div>`;
    $('#table').replaceWith(r);
}