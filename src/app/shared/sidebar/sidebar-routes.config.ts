import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
     { path: '/dashboard', title: 'Dashboard ', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },  
    { path: '/role/createrole', title: 'Role Management ', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/store/createstore', title: 'Store Management ', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/user-management', title: 'User Management ', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '', title: 'kiosk Management ', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, 
         submenu: [
            { path: '/kiosk/createkiosk', title: 'Add Kiosk', icon: ''  , class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/kiosk/bill-validator', title: 'Add Bill Validator', icon: ''  , class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/kiosk/printer', title: 'Add Printer', icon: ''  , class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/kiosk/locks', title: 'Add Locks', icon: ''  , class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },


         ] 
    },
  
    { path: '', title: 'Settings', icon: 'ft-aperture', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
            submenu: [
    
                { path: '/settings/change-password', title: 'Change Password', icon: ''  , class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //              { path: '/settings/my-profile', title: 'My Profile', icon: ''  , class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                
                         
            ]
        },
        
       
       
       
       
   
];
