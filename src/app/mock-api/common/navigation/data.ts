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
                id   : 'accounting.documents',
                title: 'Documents',
                type : 'basic',
                icon : 'heroicons_outline:document-report',
                link : '/accounting/documents'
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
                id   : 'accounting.documents',
                title: 'Documents',
                type : 'basic',
                icon : 'heroicons_outline:document-report',
                link : '/accounting/documents'
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
                id   : 'accounting.documents',
                title: 'Documents',
                type : 'basic',
                icon : 'heroicons_outline:document-report',
                link : '/accounting/documents'
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
                id   : 'accounting.documents',
                title: 'Documents',
                type : 'basic',
                icon : 'heroicons_outline:document-report',
                link : '/accounting/documents'
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
