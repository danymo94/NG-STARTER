export const adminRoutes = [
  {
    title: 'Admin Pages',
    links: [
      { name: 'Dashboard', routerLink: '/admin/', iconClass: 'pi pi-home' },
      {
        name: 'Profile',
        routerLink: '/admin/profile',
        iconClass: 'pi pi-user',
      },
      {
        name: 'Affiliates',
        routerLink: '/admin/affiliates',
        iconClass: 'pi pi-users',
      },
      {
        name: 'Laundries',
        routerLink: '/admin/laundries',
        iconClass: 'pi pi-users',
      },
      {
        name: 'Subscription',
        routerLink: '/admin/subscription',
        iconClass: 'pi pi-users',
      },
      {
        name: 'Coupons',
        routerLink: '/admin/coupons',
        iconClass: 'pi pi-users',
      },
      {
        name: 'Invoices',
        routerLink: '/admin/invoices',
        iconClass: 'pi pi-users',
      },
    ],
  },
  {
    title: 'User Pages',
    links: [
      { name: 'Profile', routerLink: '/profile', iconClass: 'pi pi-user' },
      { name: 'Help', routerLink: '/help', iconClass: 'pi pi-question-circle' },
    ],
  },
];

export const partnerRoutes = [
  {
    title: 'Affiliate Pages',
    links: [
      { name: 'Dashboard', routerLink: '/affiliate/', iconClass: 'pi pi-home' },
      {
        name: 'Profile',
        routerLink: '/affiliate/profile',
        iconClass: 'pi pi-user',
      },
      {
        name: 'Laundries',
        routerLink: '/admin/laundries',
        iconClass: 'pi pi-users',
      },
    ],
  },
  {
    title: 'LaundryModel Management',
    links: [
      {
        name: 'Orders',
        routerLink: '/affiliate/orders',
        iconClass: 'pi pi-user',
      },
      {
        name: 'Categories',
        routerLink: '/affiliate/categories',
        iconClass: 'pi pi-question-circle',
      },
      {
        name: 'Services',
        routerLink: '/affiliate/product-attributes',
        iconClass: 'pi pi-question-circle',
      },
      {
        name: 'Product',
        routerLink: '/affiliate/products',
        iconClass: 'pi pi-question-circle',
      },
      {
        name: 'Time Slots',
        routerLink: '/affiliate/profile',
        iconClass: 'pi pi-question-circle',
      },
    ],
  },
];
