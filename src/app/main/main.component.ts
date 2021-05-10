import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  searchQuery = new FormControl('test');
  synsets = [];
  //htmlterms = [];
  synonymsAmount = 'keine Suchanfrage';
  query;
  
  ngOnInit(): void {
  }
  
  async getSynonyms() {
    this.query = this.searchQuery.value;
    let url = 'https://www.openthesaurus.de/synonyme/search?q=' + this.query + '&format=application/json'; //load from server
    let response = await fetch(url);
    let responseAsJson = await response.json();
    this.synsets = await responseAsJson['synsets'];

    console.log(this.synsets);

    for (let i = 0; i < this.synsets.length; i++) { //outer loop (synsets)
      const synset = this.synsets[i];
      const synsetId = i;
      let terms = synset['terms'];

      /*  for (let j = 0; j < terms.length; j++) { //inner loop (terms) //in html gelöst
          const term = terms[j];   
          const expression = term['term'];
          this.htmlterms.push(expression);
        }*/
    }


    this.rendersynsets(this.synsets);
  }

  rendersynsets(synsets) {
    let container = document.getElementById('container');
    this.synonymsAmount = synsets.length + ' Synonym-Sets';
    container.classList.remove('d-none');

    //for-loop in html
  }

  onSubmit() {
    return this.searchQuery;
  }
}

