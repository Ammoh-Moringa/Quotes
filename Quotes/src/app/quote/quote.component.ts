import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Genius Quotes ';
  quotes:Quotes[] = [
    new Quotes (1,'Peter','Genius','There is a fine line between genius and insanity. I have erased this line.','Oscar Levant', new Date(2020,5,12),0,0),
    new Quotes (2,'Faith','Genius','No great mind has ever existed without a touch of madness.','Aristotle',new Date(2021,2,10),0,0),
    new Quotes (3,'Simon','Genius','It takes a lot of time to be a genius. You have to sit around so much, doing nothing, really doing nothing.','Gertrude Stein',new Date(2020,1,21),0,0),
    new Quotes (4,'Debra','Genius','Genius is the recovery of childhood at will.','Arthur Rimbaud',new Date(2020,4,9),0,0),
    new Quotes (5,'Nehemiah','Genius','The only genius that is worth anything is the genius for hard work.','Oscar Wilde',new Date(2020,3,19),0,0),
    new Quotes (6,'Josphine','Genius','When you make a choice, you change the futureus.','Deepak Chopra',new Date(2020,12,10),0,0),
    new Quotes (7,'Allan','Genius','Color is my daylong obsession, joy, and torment.','Claude Monet ',new Date(2020,10,16),0,0),
    new Quotes (8,'Joy','Genius','I do not want to be a genius-I have enough problems just trying to be a man.','Albert Camus ',new Date(2020,12,30),0,0),
    
  
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addQuote(quote: Quotes){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index:  number){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  findMax() {
    return Math.max.apply(Math, this.quotes.map((quote) => quote.upvotes));
  }
  constructor() { }

  ngOnInit(){
  }

}
