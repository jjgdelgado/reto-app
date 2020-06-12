import { Component, OnInit } from '@angular/core';
import {ExchangeRate} from './exchange'
import {OperationService} from './operation.service'
import swal from 'sweetalert2'
import { Currency } from './currency';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  private exchangeRate: ExchangeRate = new ExchangeRate();
  private currency: Currency = new Currency();
  private titulo:string = "Tipo de Cambio";

  constructor(private operationService: OperationService) { }

  exchange(): void {
    this.operationService.exchange(this.exchangeRate)
      .subscribe(exchangeRate => {
        swal(`${exchangeRate.mount}`, ` ${exchangeRate.sourceISO} equivalen a ${exchangeRate.mountExchange} ${exchangeRate.targetISO}`, 'success')
      }
      );
  }

  updateExchangeRate():void{
    this.operationService.updateExchangeRate(this.currency)
    .subscribe( currency => {
      swal('Tipo de cambio actualizado', `${currency.iso} se ha actualizado con éxito!`, 'success')
    }

    )
  }

}
