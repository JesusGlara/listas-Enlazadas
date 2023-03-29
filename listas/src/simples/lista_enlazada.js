

import Nodo from "./nodo.js";

export default class ListaEnlazada{
    constructor(cabeza = null,cola = null){
        this.cabeza = cabeza;    
                  
    }

    /**
     * Este método insertar los nodos al inicio de la lista     * 
     * @param {*} data El parámetro data puede tomar cualquier valor
     */
    insertarInicio(data){
        let nuevo;
        nuevo = new Nodo(data);
        nuevo.derecha = this.cabeza;
        this.cabeza = nuevo;
    }

    /**
     * Este método inserta entre dos nodos en una lista enlazada simple
     * @param {*} valorInsertado Es el valor que se insertará en la lista
     * @param {*} buscar Indica detrás de qué nodo se debe insertar
     */
    insertarEntre(data, buscar){
      const  nuevo =new Nodo(data);
      let temp =this.cabeza;
        do{
          if(temp.derecha && temp.derecha.data===buscar){
           let tempo=temp.derecha;
            temp.derecha=nuevo;
            nuevo.derecha=tempo;
            break;
          }

        }while(temp!==null);
temp=temp.derecha;

    }

  

    impresion(){
        let temp = this.cabeza;
        let valores = '';
        
        do{
            valores += temp.data + ' <=> ';
            temp = temp.derecha;
        }while(temp !== null);
        console.log(valores + 'null');
    }

  

}
