import ListaEnlazada from "./lista_enlazada.js";



export default class ListaOrdenada extends ListaEnlazada{
    constructor(){
      super(null);


    }
burbuja(data){
    let copy=this.cabeza;
    
    while(copy!==null){
let cat =copy.derecha;
        while(cat!==null){
            if(copy.data>cat.data){
                let temp=copy.data;
                copy.data=cat.data;
                cat.data=temp;
                
            }
            cat=cat.derecha;
        }
        copy=copy.derecha;
    }
}
seleccion(data){
    let copy=this.cabeza;
    while(copy!==null){
let min=copy;
let temp=copy.derecha;
while(temp!==null){
    if(temp.data<min.data){
        min=temp;
    }
temp=temp.derecha;
}
let inter=copy.data;
copy.data=min.data;
min.data=inter;
copy=copy.derecha;
}

}


}


