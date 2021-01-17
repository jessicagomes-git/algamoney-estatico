import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pessoas = [
    {
      nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', status: 'ativo'
    },
    {
      nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', status: 'inativo'
    }, 
    {
      nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', status: 'ativo'
    },
    {
      nome: 'Luix Pereira', cidade: 'Curitiba', estado: 'PR', status: 'ativo'
    },
    {
      nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'inativo'
    },
  ];
}
