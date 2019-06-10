import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core'

@Component({
    selector:'parque',
    templateUrl:'./parque.component.html',
    styleUrls: ['./parque.component.css']
})

export class ParqueComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
    @Input() nombre : string;
    @Output() pasarDatos = new EventEmitter();

    @Input() public metros : number;

    constructor(){
        this.nombre = 'parquesito de ever';
    }

    ngOnChanges(changes: SimpleChanges){
        console.log("Se realizó un cambio");
    }

    ngOnInit(){
        console.log("Se inició");
    }

    ngDoCheck(){
        console.log("Se ejecuto el do check");
    }

    ngOnDestroy(){
        console.log("Se va a eliminar el componente");
    }

    emitirEvento(){
        this.pasarDatos.emit({
            'nombre' : this.nombre,
            'metros' : this.metros
        });
    }
}
