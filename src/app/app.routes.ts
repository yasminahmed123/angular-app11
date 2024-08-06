import { Routes } from '@angular/router';

import{AboutComponent} from './about/about.component'
import{ContactComponent} from './contact/contact.component'
import{FooterComponent} from './footer/footer.component'
import {EndComponent} from './end/end.component'
import{StartComponent } from './start/start.component'
import {PortofiloComponent} from './portofilo/portofilo.component'

export const routes: Routes = [
    { path: '', component: StartComponent , title: 'start' },
    { path: 'about', component: AboutComponent, title: 'about' },
    { path: 'contact', component: ContactComponent, title: 'contact' },
    { path: 'footer', component: FooterComponent, title: 'end' },
    { path: 'end', component: EndComponent, title: 'end' },
    { path: 'portfolio', component: PortofiloComponent, title: 'portfolio' },



    
];
