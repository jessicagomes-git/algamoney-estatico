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
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 6 ,30),
      dataPagamento: new Date(2017, 6 ,28), valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: new Date(2017, 6 ,10),
      dataPagamento: new Date(2017, 6 ,10), valor: 8000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2017, 9, 15),
      dataPagamento: new Date(2017, 9, 15), valor: 14312, pessoa: 'Ministério da Fazenda'
    },
  ];

}
