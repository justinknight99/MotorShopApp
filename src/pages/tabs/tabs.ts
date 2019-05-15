import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';
import { BelanjaPage } from '../belanja/belanja';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoryPage;
  tab3Root = BelanjaPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {

  }
}