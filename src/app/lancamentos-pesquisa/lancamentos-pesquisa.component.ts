import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: '28/06/2017', valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '10/06/2017',
      dataPagamento: '10/06/2017', valor: 8000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '15/09/2017',
      dataPagamento: '15/09/2017', valor: 14312, pessoa: 'Ministério da Fazenda'
    },
  ];
  
}
