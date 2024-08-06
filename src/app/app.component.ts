import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PortofiloComponent} from './portofilo/portofilo.component'
import {ContactComponent} from './contact/contact.component'
import{AboutComponent} from './about/about.component'
import {FooterComponent} from './footer/footer.component'
import {NavbarComponent} from './navbar/navbar.component'
import{EndComponent} from './end/end.component'
import {StartComponent} from './start/start.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,PortofiloComponent,ContactComponent,AboutComponent ,FooterComponent,NavbarComponent ,EndComponent,StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
