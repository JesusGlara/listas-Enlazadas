
import Nodo from "./nodo.js";

 export default class ListaCircular {


    constructor(cabeza=null){
  this.cabeza=cabeza;
}
insertCircle(data){
    let nuevo=new Nodo(data);
   
    if(this.cabeza===null){
        this.cabeza=nuevo;
        nuevo.derecha=this.cabeza;
      
    }else if(this.cabeza!=null){
      nuevo.derecha = this.cabeza;
      let temp = this.cabeza;
      while (temp.derecha !== this.cabeza) {
        temp=temp.derecha;
      }
      temp.derecha=nuevo;
    } 
 
 }

 impresionCircular(){
    let temp = this.cabeza;
    let valores = ' O -> ';
 
  
        do {
          valores += temp.data + '  ->  ';
          temp = temp.derecha;
        } while (temp !== this.cabeza);
      
    console.log(valores + ' O ');
  }
        

}
 
