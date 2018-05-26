import { Component } from '@angular/core';
import { topBarComponent } from './components/component.topbar';
import { SidebarNavComponent } from './components/component.sidebar-nav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sidebarLinks = [
    {name: "Painel de Gestão", iconUrl: "../assets/globe-white.svg", iconAltTxt: "icone de Globo"},
    {name:"Conta Digital", iconUrl: "../assets/arroba.svg", iconAltTxt: "icone de arroba"},
    {name:"Ant. de Recebíveis", iconUrl: "../assets/bar-graph.svg", iconAltTxt: "icone de Gráfico de Barras"}
  ];
  acoesAlertaNotas = [
    {name:"Ação 1", actionUrl: "#"}
    {name:"Ação 2", actionUrl: "#"}
    {name:"Ação 3", actionUrl: "#"}
  ];
  acoesAlertaAssinaturas = [
    {name:"Ação 1", actionUrl: "#"}
    {name:"Ação 2", actionUrl: "#"}
    {name:"Ação 3", actionUrl: "#"}
  ]
}
