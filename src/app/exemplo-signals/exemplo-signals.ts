import { Component, computed, signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
interface Pedido {
  cliente: string;
  valor: number;
  status: 'Pendente' | 'Pago' | 'Cancelado';
  data: string;
}

@Component({
  selector: 'app-exemplo-signals',
  imports: [MatProgressBarModule, MatCardModule, MatChipsModule, MatTableModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './exemplo-signals.html',
  styleUrl: './exemplo-signals.scss',
})
export class ExemploSignals {
  displayedColumns: string[] = ['cliente', 'valor', 'status', 'data'];

  dataSource: Pedido[] = [
    { cliente: 'Ana Souza', valor: 129.9, status: 'Pendente', data: '2026-05-21' },
    { cliente: 'Bruno Lima', valor: 74.5, status: 'Pendente', data: '2026-05-22' },
    { cliente: 'Carla Mendes', valor: 212.3, status: 'Pago', data: '2026-05-23' },
    { cliente: 'Diego Rocha', valor: 48.75, status: 'Cancelado', data: '2026-05-24' },
    { cliente: 'Fernanda Alves', valor: 96, status: 'Pendente', data: '2026-05-25' },
    { cliente: 'Gustavo Pereira', valor: 315.2, status: 'Pago', data: '2026-05-26' },
    { cliente: 'Helena Costa', valor: 58.4, status: 'Pago', data: '2026-05-27' },
    { cliente: 'Igor Martins', valor: 187.99, status: 'Pendente', data: '2026-05-28' },
    { cliente: 'Juliana Castro', valor: 42.3, status: 'Pago', data: '2026-05-29' },
    { cliente: 'Leonardo Nunes', valor: 263.75, status: 'Cancelado', data: '2026-05-30' },
    { cliente: 'Mariana Ribeiro', valor: 151.6, status: 'Pago', data: '2026-05-31' },
    { cliente: 'Nicolas Teixeira', valor: 89.9, status: 'Pendente', data: '2026-06-01' },
    { cliente: 'Olivia Barbosa', valor: 540, status: 'Pago', data: '2026-06-02' },
    { cliente: 'Pedro Henrique', valor: 33.25, status: 'Cancelado', data: '2026-06-03' },
    { cliente: 'Rafaela Gomes', valor: 119.8, status: 'Pago', data: '2026-06-04' },
    { cliente: 'Samuel Dias', valor: 76.45, status: 'Pendente', data: '2026-06-05' },
    { cliente: 'Tatiane Moreira', valor: 228.1, status: 'Pago', data: '2026-06-06' },
    { cliente: 'Vitor Carvalho', valor: 64.9, status: 'Pago', data: '2026-06-07' },
    { cliente: 'Amanda Fernandes', valor: 392.5, status: 'Pendente', data: '2026-06-08' },
    { cliente: 'Caio Azevedo', valor: 27.99, status: 'Cancelado', data: '2026-06-09' },
    { cliente: 'Bianca Freitas', valor: 84.7, status: 'Pago', data: '2026-06-10' },
    { cliente: 'Eduardo Lopes', valor: 173.35, status: 'Pendente', data: '2026-06-11' },
    { cliente: 'Larissa Moura', valor: 255.6, status: 'Pago', data: '2026-06-12' },
    { cliente: 'Felipe Cardoso', valor: 98.2, status: 'Pago', data: '2026-06-13' },
    { cliente: 'Priscila Duarte', valor: 43.9, status: 'Cancelado', data: '2026-06-14' },
    { cliente: 'Renato Campos', valor: 134.45, status: 'Pendente', data: '2026-06-15' },
    { cliente: 'Sofia Correia', valor: 208.8, status: 'Pago', data: '2026-06-16' },
    { cliente: 'Thiago Batista', valor: 61.5, status: 'Pago', data: '2026-06-17' },
    { cliente: 'Vanessa Melo', valor: 470.25, status: 'Pendente', data: '2026-06-18' },
    { cliente: 'Wagner Farias', valor: 36.6, status: 'Cancelado', data: '2026-06-19' },
    { cliente: 'Alice Monteiro', valor: 149.99, status: 'Pago', data: '2026-06-20' },
    { cliente: 'Bernardo Cunha', valor: 112.3, status: 'Pendente', data: '2026-06-21' },
    { cliente: 'Camila Pires', valor: 287.4, status: 'Pago', data: '2026-06-22' },
    { cliente: 'Daniel Rezende', valor: 52.8, status: 'Pago', data: '2026-06-23' },
    { cliente: 'Estela Marques', valor: 75.15, status: 'Cancelado', data: '2026-06-24' },
    { cliente: 'Fabio Tavares', valor: 199.9, status: 'Pendente', data: '2026-06-25' },
    { cliente: 'Gabriela Santana', valor: 321.75, status: 'Pago', data: '2026-06-26' },
    { cliente: 'Henrique Silveira', valor: 67.4, status: 'Pago', data: '2026-06-27' },
    { cliente: 'Isabela Matos', valor: 158.25, status: 'Pendente', data: '2026-06-28' },
    { cliente: 'Joao Victor', valor: 40.5, status: 'Cancelado', data: '2026-06-29' },
    { cliente: 'Karen Vieira', valor: 236.9, status: 'Pago', data: '2026-06-30' },
    { cliente: 'Lucas Andrade', valor: 93.6, status: 'Pendente', data: '2026-07-01' },
    { cliente: 'Monica Soares', valor: 125.45, status: 'Pago', data: '2026-07-02' },
    { cliente: 'Otavio Macedo', valor: 359.99, status: 'Pago', data: '2026-07-03' },
    { cliente: 'Patricia Neves', valor: 57.75, status: 'Cancelado', data: '2026-07-04' },
    { cliente: 'Ricardo Xavier', valor: 144.2, status: 'Pendente', data: '2026-07-05' },
    { cliente: 'Talita Reis', valor: 218.3, status: 'Pago', data: '2026-07-06' },
    { cliente: 'Uriel Almeida', valor: 82.9, status: 'Pago', data: '2026-07-07' },
    { cliente: 'Yasmin Rocha', valor: 504.6, status: 'Pendente', data: '2026-07-08' },
  ];

  pesquisaCliente = signal('');
  pesquisaStatus = signal('Todos');

  sales = signal(this.dataSource);

  filteredSales = computed(() => {
    const pesquisaCliente = this.pesquisaCliente().toLowerCase();
    const pesquisaStatus = this.pesquisaStatus();
    let retorno = this.sales();
    console.log('Filtrando: pesquisaCliente, pesquisaStatus: ', pesquisaCliente, pesquisaStatus);
    
    if (pesquisaCliente !== '') {
      retorno = retorno.filter((pedido) => pedido.cliente.toLocaleLowerCase().includes(pesquisaCliente));
    }

    if (pesquisaStatus !== 'Todos') {
      retorno = retorno.filter((pedido)=>pedido.status === pesquisaStatus);
    }

    return retorno;
  })
}
