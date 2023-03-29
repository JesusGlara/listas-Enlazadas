
import Nodo from "./nodoDoble.js";


export default class ListaDoble {
    
    constructor(cabeza=null,cola=null){
       this.cabeza=cabeza;
       this.cola=cola;
    }

addToEnd(data){
    let nuevo;
    nuevo=new Nodo(data);
    if(this.cabeza===null && this.cola===null){
    this.cabeza=nuevo;
    this.cola=nuevo;
    }
    else{
    this.cola.derecha=nuevo;
    nuevo.izquierda=this.cola;
    this.cola=nuevo;
    }}

    addToBeggin(data){
        let nuevo;
        nuevo=new Nodo(data);
        if(this.cabeza===null && this.cola===null){
        this.cabeza=nuevo;
        this.cola=nuevo;
        }
        else{
        this.cabeza.izquierda=nuevo;
        nuevo.derecha=this.cabeza;
        this.cabeza=nuevo;
        }}

      impresionInversa(){
        let temp = this.cola;
        let valores = '';
        
        do{
            valores += temp.data + ' <=> ';
            temp = temp.izquierda;
        }while(temp !== null);
        console.log(valores + 'null');
      }

 insertShort(data){
     let copy=this.cabeza;
      let nuevo;
      nuevo=new Nodo(data);
      if(this.cabeza===null && this.cola===null){
      this.cabeza=nuevo;
      this.cola=nuevo;
      } else if(nuevo.data<this.cabeza.data){
        let temp =this.cabeza;
        this.cabeza=nuevo;
        nuevo.derecha=temp;
        temp.izquierda=nuevo
      } else if(nuevo.data>this.cola.data){
  let temp=this.cola;
  this.cola=nuevo
  nuevo.izquierda=temp;
  temp.derecha=nuevo;
 } 
 else{
  let temp=this.cabeza;
  while(temp.derecha && temp.derecha.data < data){
    temp=temp.derecha;
  }
  nuevo.derecha=temp.derecha;
  nuevo.izquierda=temp;
  temp.derecha.izquierda=nuevo;
  temp.derecha=nuevo;
 }
}
  
}