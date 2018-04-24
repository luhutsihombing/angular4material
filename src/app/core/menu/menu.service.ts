import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { API_DOMAIN } from '../../_const/api.const';
export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'apps',
    name: 'APPS',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'calendar', name: 'CALENDAR'},
      {state: 'media', name: 'MEDIA'},
      {state: 'messages', name: 'MESSAGES'},
      {state: 'social', name: 'SOCIAL'},
      {state: 'chat', name: 'CHAT'}
    ]
  },
  {
    state: 'widgets',
    name: 'WIDGETS',
    type: 'link',
    icon: 'photo'
  },
  {
    state: 'material',
    name: 'MATERIAL',
    type: 'sub',
    icon: 'equalizer',
    badge: [
      {type: 'purple', value: '10'}
    ],
    children: [
      {state: 'autocomplete', name: 'AUTOCOMPLETE'},
      {state: 'button', name: 'BUTTON'},
      {state: 'button-toggle', name: 'BUTTONTOGGLE'},
      {state: 'card', name: 'CARDS'},
      {state: 'checkbox', name: 'CHECKBOX'},
      {state: 'chips', name: 'CHIPS'},
      {state: 'datepicker', name: 'DATEPICKER'},
      {state: 'dialog', name: 'DIALOG'},
      {state: 'drawer', name: 'DRAWER'},
      {state: 'expansion', name: 'EXPANSION'},
      {state: 'grid-list', name: 'GRID'},
      {state: 'input', name: 'INPUT'},
      {state: 'list', name: 'LISTS'},
      {state: 'menu', name: 'MENU'},
      {state: 'progress-bar', name: 'PROGRESSBAR'},
      {state: 'progress-spinner', name: 'PROGRESSSPINNER'},
      {state: 'radio', name: 'RADIO'},
      {state: 'ripple', name: 'RIPPLE'},
      {state: 'select', name: 'SELECT'},
      {state: 'slide-toggle', name: 'SLIDETOGGLE'},
      {state: 'slider', name: 'SLIDER'},
      {state: 'snack-bar', name: 'SNACKBAR'},
      {state: 'stepper', name: 'STEPPER'},
      {state: 'table', name: 'TABLE'},
      {state: 'tabs', name: 'TABS'},
      {state: 'toolbar', name: 'TOOLBAR'},
      {state: 'tooltip', name: 'TOOLTIP'},
      {state: 'typography', name: 'TYPOGRAPHY'}
    ]
  },
  {
    state: 'forms',
    name: 'FORMS',
    type: 'sub',
    icon: 'looks_3',
    children: [
      // {state: 'editor', name: 'EDITOR'},
      {state: 'validation', name: 'VALIDATION'},
      {state: 'upload', name: 'UPLOAD'},
      {state: 'tree', name: 'TREE'},
    ]
  },
  {
    state: 'tables',
    name: 'DATATABLE',
    type: 'sub',
    icon: 'format_line_spacing',
    badge: [
      {type: 'blue-grey', value: '8'
      }
    ],
    children: [
      {state: 'fullscreen', name: 'FULLSCREEN'},
      {state: 'editing', name: 'EDITING'},
      {state: 'filter', name: 'FILTER'},
      {state: 'paging', name: 'PAGING'},
      {state: 'sorting', name: 'SORTING'},
      {state: 'pinning', name: 'PINNING'},
      {state: 'selection', name: 'SELECTION'},
    ]
  },
  {
    state: 'ecommerce',
    name: 'ECOMMERCE',
    type: 'sub',
    icon: 'looks_3',
    badge: [
      {type: 'red', value: 'new'
      }
    ],
    children: [
      {state: 'products', name: 'PRODUCTS'},
      {state: 'compact', name: 'COMPACT'},
      {state: 'detail', name: 'DETAIL'},
    ]
  },
  {
    state: 'taskboard',
    name: 'TASKBOARD',
    type: 'link',
    icon: 'view_column',
  },
  {
    state: 'charts',
    name: 'CHARTS',
    type: 'link',
    icon: 'show_chart',
  },
  {
    state: 'maps',
    name: 'MAPS',
    type: 'sub',
    icon: 'navigation',
    children: [
      {state: 'google', name: 'GOOGLE'},
      {state: 'leaflet', name: 'LEAFLET'}
    ]
  },
  {
    state: 'dragndrop',
    name: 'DND',
    type: 'link',
    icon: 'show_chart',
  },
  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'pages',
    children: [
      {state: 'invoice', name: 'INVOICE'},
      {state: 'timeline', name: 'TIMELINE'},
      {state: 'user', name: 'USER'},
      {state: 'blank', name: 'BLANK'},
      {state: 'pricing', name: 'PRICING'},
    ]
  },
  {
    state: 'session',
    name: 'SESSION',
    type: 'sub',
    icon: 'face',
    children: [
      {state: '404', name: '404'},
      {state: 'error', name: 'ERROR'},
      {state: 'signin', name: 'SIGNIN'},
      {state: 'signup', name: 'SIGNUP'},
      {state: 'forgot', name: 'FORGOT'},
      {state: 'lockscreen', name: 'LOCKSCREEN'},
    ]
  },
  {
    state: 'http://primer.nyasha.me/docs',
    name: 'DOCS',
    type: 'extTabLink',
    icon: 'local_library'
  }
];

@Injectable()
export class MenuService 
{
  private auth;
  
  constructor(private http: Http) {
    this.auth = JSON.parse(sessionStorage.getItem('Auth'));
   }
  posts: any[];
  valRes;
  httpdata;url2;
  getAll(): Menu[] {
    //console.log("menus array: "+ JSON.stringify(MENUITEMS));
    return MENUITEMS;
  }
  add(menu: Menu) {
    //MENUITEMS.push(menu);
  }
  sendPost()
 {
  
  if(this.auth.user.authority.authorityName=='ROLE_BUYER')
  {
     this.url2   = "buyer";
  }else if(this.auth.user.authority.authorityName=='ROLE_SELLER')
  {
    this.url2   = "seller";
  }else
  {
    this.url2   = "admin";
  }
  let url   = `${API_DOMAIN}`+"/api/menu/"+this.url2;
  console.info("url : "+url);
  let headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Authorization, X-Requested-With, Content-Type, Accept',
    'Authorization': 'Bearer '+this.auth.token
  }
  
  let requestOptions = {                                                                                                                                                                                 
    headers: new Headers(headerDict), 
  };

  console.log(localStorage.getItem('token'));
  let headers = new Headers({ 'Accept': '*/*',
            'Authorization': 'Bearer '+localStorage.getItem('token')});
  let options = new RequestOptions({ headers: headers });
  return this.http.get(url,  requestOptions)
  .map(response => response.json())
 }
}
