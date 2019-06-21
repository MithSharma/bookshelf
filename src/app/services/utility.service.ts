import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  formatData(data) {
    const seasons = [
      "Currently Reading",
      "Read",
      "Want to Read",
      "None"
    ];
    data.sort(function (a, b) {
      let aIndex = seasons.indexOf(a["ReadState"]);
      let bIndex = seasons.indexOf(b["ReadState"]);
      return aIndex-bIndex;
    });
    let array = [];
    let obj={}
    let bookArray = [];
    let book = {};
    let ReadState = "";
    for (let datum in data) {
      if (ReadState === "") {
        book = this.makeBookObj(data[datum]);
        ReadState = data[datum]["ReadState"];
        bookArray.push(book);
      } else if (ReadState === data[datum]["ReadState"]) {
        book = this.makeBookObj(data[datum]);
        bookArray.push(book);
        if(parseInt(datum) === data.length-1){
          obj["ReadState"] = ReadState;
          obj["books"] = bookArray;
          array.push(obj);
        }
      }else{
        obj["ReadState"] = ReadState;
        obj["books"] = bookArray;
        array.push(obj);
        bookArray = [];
        obj = {};
        book = this.makeBookObj(data[datum]);
        ReadState = data[datum]["ReadState"];
        bookArray.push(book);
        if(parseInt(datum) === data.length-1){
          obj["ReadState"] = ReadState;
          obj["books"] = bookArray;
          array.push(obj);
        }
      }
    }
    return array;
  }

  makeBookObj(datum){
    let book={}
    book["imageURL"] = datum.imageURL;
    book["name"] = datum.name;
    book["author"] = datum.author;
    book["genre"] = datum.genre;
    book["id"] = datum._id;
    return book;
  }
}
