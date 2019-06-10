import {Component, OnInit} from '@angular/core';
declare var query : any;
declare var $ : any;

@Component(
    {
        selector: 'tienda',
        templateUrl: './tienda.component.html',
        styleUrls: ['./tienda.component.css']
    }
)

export class TiendaComponent implements OnInit{
    public titulo;
    public nombreParque : string;
    public metrosParque : number;

    constructor(){
        this.titulo = 'Esta es la tienda';
    }

    mostrarNombre(){
        console.log(this.nombreParque.toUpperCase());
    }

    verDatosParque(event){
        console.log(event);
    }

    ngOnInit(){
        $('#textojq').hide();
        $('#botonjq').click(function(){
            console.log("click desde jqery");
            $('#textojq').slideToggle();
        });

        $('#caja').dotdotdot({});
    }
}