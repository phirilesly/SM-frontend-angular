/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'main',
        title   : 'Main',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'main.dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/main/dashboard'
            },
            {
                id   : 'main.product',
                title: 'Products',
                type : 'basic',
                icon : 'heroicons_outline:archive',
                link : '/main/products'
            },
            {
                id   : 'main.inventory',
                title: 'Inventories',
                type : 'basic',
                icon : 'heroicons_outline:collection',
                link : '/main/inventories'
            },
            {
                id   : 'sale',
                title: 'Daily Sales',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/main/sales'
            }, 
            {
                id   : 'branch',
                title: 'My Branches',
                type : 'basic',
                icon : 'heroicons_outline:library',
                link : '/main/branches'
            }
        ]
    }, 
    {
        id      : 'accounting',
        title   : 'Acconting',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'accounting.invoices',
                title: 'Invoices',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-list',
                link : '/accounting/invoices'
            },
            {
                id   : 'accounting.reports',
                title: 'Reports',
                type : 'basic',
                icon : 'heroicons_outline:document-report',
                link : '/accounting/reports'
            }
           
        ]
    },
    {
        id      : 'settings',
        title   : 'Settings',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'settings.accounts',
                title: 'My Business',
                type : 'basic',
                icon : 'heroicons_outline:user-add',
                link : '/settings/accounts'
            },
            {
                id   : 'settings.users',
                title: 'Users',
                type : 'basic',
                icon : 'heroicons_outline:users',
                link : '/settings/users'
            }
           
        ]
    }
   
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'main',
        title   : 'Main',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'main.dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboard'
            },
            {
                id   : 'main.product',
                title: 'Products',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/products'
            },
            {
                id   : 'main.inventory',
                title: 'Inventories',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/inventories'
            },
            {
                id   : 'sale',
                title: 'Sales',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/sales'
            }, 
            {
                id   : 'branch',
                title: 'Branches',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/branches'
            },
            {
                id   : 'user',
                title: 'Users',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/users'
            }
        ]
    }, 
    {
        id      : 'accounting',
        title   : 'Acconting',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'accounting.invoices',
                title: 'Invoices',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/accounting/invoices'
            },
            {
                id   : 'accounting.reports',
                title: 'Reports',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/accounting/reports'
            }
           
        ]
    },
    {
        id      : 'settings',
        title   : 'Settings',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'settings.accounts',
                title: 'Accounts',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/accounting/accounts'
            },
            {
                id   : 'settings.users',
                title: 'Users',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/setting/users'
            }
           
        ]
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'main',
        title   : 'Main',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'main.dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboard'
            },
            {
                id   : 'main.product',
                title: 'Products',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/products'
            },
            {
                id   : 'main.inventory',
                title: 'Inventories',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/inventories'
            },
            {
                id   : 'sale',
                title: 'Sales',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/sales'
            }, 
            {
                id   : 'branch',
                title: 'Branches',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/branches'
            },
            {
                id   : 'user',
                title: 'Users',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/users'
            }
        ]
    }, 
    {
        id      : 'accounting',
        title   : 'Acconting',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'accounting.invoices',
                title: 'Invoices',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/accounting/invoices'
            },
            {
                id   : 'accounting.reports',
                title: 'Reports',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/accounting/reports'
            }
           
        ]
    },
    {
        id      : 'settings',
        title   : 'Settings',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'settings.accounts',
                title: 'Accounts',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/accounting/accounts'
            },
            {
                id   : 'settings.users',
                title: 'Users',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/setting/users'
            }
           
        ]
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'main',
        title   : 'Main',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'main.dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboard'
            },
            {
                id   : 'main.product',
                title: 'Products',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/products'
            },
            {
                id   : 'main.inventory',
                title: 'Inventories',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/inventories'
            },
            {
                id   : 'sale',
                title: 'Sales',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/sales'
            }, 
            {
                id   : 'branch',
                title: 'Branches',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/branches'
            },
            {
                id   : 'user',
                title: 'Users',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/users'
            }
        ]
    }, 
    {
        id      : 'accounting',
        title   : 'Acconting',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'accounting.invoices',
                title: 'Invoices',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/accounting/invoices'
            },
            {
                id   : 'accounting.reports',
                title: 'Reports',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/accounting/reports'
            }
           
        ]
    },
    {
        id      : 'settings',
        title   : 'Settings',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'settings.accounts',
                title: 'Accounts',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/accounting/accounts'
            },
            {
                id   : 'settings.users',
                title: 'Users',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/setting/users'
            }
           
        ]
    }
];
