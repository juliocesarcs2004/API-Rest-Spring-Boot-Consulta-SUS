import { Injectable } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaetariaService {

  constructor() { }

  listFaixaEtaria(): Faixaetaria[]{
    return[
      { id: 1, faixa_i: 0, faixa_n: 14, descricao: 'Até 14 anos' },
      { id: 2, faixa_i: 15, faixa_n: 19, descricao: 'Entre 15 e 19 anos' },
      { id: 3, faixa_i: 16, faixa_n: 20, descricao: 'Entre 15 e 19 anos' }
    ];
  }
}
