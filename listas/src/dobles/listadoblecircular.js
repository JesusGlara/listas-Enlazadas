import Nodo from "./nodoDoble.js";
 export default class  ListaDobleCircular{
constructor(cabeza=null,cola=null){
this.cabeza=cabeza;

}
insertDoubleC(data){
  
        let nuevo=new Nodo(data);
       
        if(this.cabeza===null){
            this.cabeza=nuevo;
            nuevo.derecha=this.cabeza;
            nuevo.izquierda=this.cabeza;
          
        }else if(this.cabeza!=null){
          nuevo.derecha = this.cabeza;
          let temp = this.cabeza;
       
          while (temp.derecha !== this.cabeza) {
            temp=temp.derecha;
            nuevo.izquierda=temp;
          }
        
          temp.derecha=nuevo;
          nuevo.izquierda=temp;
          temp=temp.izquierda;

       this.cabeza.izquierda=nuevo; 
        } }
     impresionCircular(){
        let temp = this.cabeza;
        let valores = ' O  <=> ';
     
      
            do {
              valores += temp.data + '  <=>  ';
              temp = temp.derecha;
            } while (temp !== this.cabeza);
          
        console.log(valores + ' O ');
      }

}



 