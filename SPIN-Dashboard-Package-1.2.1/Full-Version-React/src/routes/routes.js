export default [
    {
        path: '/start/monitor',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Monitor').default);
            }, 'start-monitor');
        }
    },
    {
        path: '/start/exchange-and-trading',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./ExchangeAndTrading').default);
            }, 'start-exchange-trading');
        }
    },
    {
        path: '/start/e-commerce',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./ECommerce').default);
            }, 'start-e-commerce');
        }
    },
    {
        path: '/start/performance',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Performance').default);
            }, 'start-performance');
        }
    },
    {
        path: '/start/financial',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Financial').default);
            }, 'start-financial');
        }
    },
    {
        path: '/start/system',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./System').default);
            }, 'start-system');
        }
    },
    {
        path: '/start/team-activity',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./TeamActivity').default);
            }, 'start-team-activity');
        }
    },
    {
        path: '/start/stock',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Stock').default);
            }, 'start-stock');
        }
    },
    {
        path: '/start/analytics',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Analytics').default);
            }, 'start-analytics');
        }
    },
    {
        path: '/start/projects',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Projects').default);
            }, 'start-projects');
        }
    },
    // Widgets
    {
        path: '/widgets/data-widgets',
        component: require('./Widgets/DataWidgets').default
    },
    {
        path: '/widgets/graphs-widgets',
        component: require('./Widgets/GraphsWidgets').default
    },

    // Layouts
    {
        path: '/layouts/:layoutType',
        component: require('./Layouts').default
    },

    // Sidebars
    {
        path: 'sidebars/:sidebarKey',
        component: require('./Sidebars').default
    },

    // Skins
    {
        path: 'skins/:sidebarSkin/:navbarSkin/:skinColor',
        component: require('./Skins').default
    },

    // Interface
    {
        path: '/interface/colors',
        component: require('./Interface/Colors').default
    },
    {
        path: '/interface/typography',
        component: require('./Interface/Typography').default
    },
    {
        path: '/interface/buttons',
        component: require('./Interface/Buttons').default
    },
    {
        path: '/interface/paginations-and-pager',
        component: require('./Interface/PaginationsAndPager').default
    },
    {
        path: '/interface/images-and-thumbs',
        component: require('./Interface/ImagesAndThumbs').default
    },
    {
        path: '/interface/avatars',
        component: require('./Interface/Avatars').default
    },
    {
        path: '/interface/navbars',
        component: require('./Interface/Navbars').default
    },
    {
        path: '/interface/alerts',
        component: require('./Interface/Alerts').default
    },
    {
        path: '/interface/modals',
        component: require('./Interface/Modals').default
    },
    {
        path: '/interface/progress-bars',
        component: require('./Interface/ProgressBars').default
    },
    {
        path: '/interface/badges-and-labels',
        component: require('./Interface/BadgesAndLabels').default
    },
    {
        path: '/interface/breadcrumbs',
        component: require('./Interface/Breadcrumbs').default
    },
    {
        path: '/interface/tabs-and-pills',
        component: require('./Interface/TabsAndPills').default
    },
    {
        path: '/interface/tooltips-and-popovers',
        component: require('./Interface/TooltipsAndPopovers').default
    },
    {
        path: '/interface/list-groups',
        component: require('./Interface/ListGroups').default
    },

    //  Graphs
    {
        path: '/graphs/sparklines',
        component: require('./Graphs/Sparklines').default
    },
    {
        path: '/graphs/highcharts',
        component: require('./Graphs/Highcharts').default
    },
    {
        path: '/graphs/highstock(/:chartId)',
        component: require('./Graphs/Highstock').default
    },
    {
        path: '/graphs/chartist',
        component: require('./Graphs/Chartist').default
    },

    // Tables
    {
        path: '/tables/pricing-tables',
        component: require('./Tables/PricingTables').default
    },
    {
        path: '/tables/tables',
        component: require('./Tables/Tables').default
    },

    // Forms
    {
        path: '/forms/forms',
        component: require('./Forms/Forms').default
    },
    {
        path: '/forms/forms-layouts',
        component: require('./Forms/FormsLayouts').default
    },

    //  Grids
    {
        path: '/grids',
        component: require('./Grids').default
    },

    // Pages
    {
        path: '/pages/timeline',
        component: require('./Pages/Timeline').default
    },
    {
        path: '/pages/not-found',
        component: require('./Pages/NotFound').default
    },
    {
        path: '/pages/register',
        component: require('./Pages/Register').default
    },
    {
        path: '/pages/login',
        component: require('./Pages/Login').default
    },
    {
        path: '/pages/forgot-password',
        component: require('./Pages/ForgotPassword').default
    },
    {
        path: '/pages/lock-screen',
        component: require('./Pages/LockScreen').default
    },
    {
        path: '/pages/invoice',
        component: require('./Pages/Invoice').default
    },

    //      Apps
    {
        path: '/apps/tasks/:listStyle',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Tasks').default);
            }, 'apps-tasks');
        }
    },
    {
        path: '/apps/task-details',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/TaskDetails').default);
            }, 'apps-task-details');
        }
    },
    {
        path: '/apps/projects/:listStyle',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Projects').default);
            }, 'apps-projects');
        }
    },
    {
        path: '/apps/inbox',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Inbox').default);
            }, 'apps-inbox');
        }
    },
    {
        path: '/apps/new-email',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/NewEmail').default);
            }, 'apps-new-email');
        }
    },
    {
        path: '/apps/email-details',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/EmailDetails').default);
            }, 'apps-email-details');
        }
    },
    {
        path: '/apps/search/search-results',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Search/SearchDefault').default);
            }, 'apps-search-default');
        }
    },
    {
        path: '/apps/search/image-results',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Search/SearchImage').default);
            }, 'apps-search-image');
        }
    },
    {
        path: '/apps/search/video-results',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Search/SearchVideo').default);
            }, 'apps-search-video');
        }
    },
    {
        path: '/apps/search/user-results',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Search/SearchUser').default);
            }, 'apps-search-user');
        }
    },
    {
        path: '/apps/clients',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Clients').default);
            }, 'apps-clients');
        }
    },
    {
        path: '/apps/files-manager/:type',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/FilesManager').default);
            }, 'apps-file-manager');
        }
    },
    {
        path: '/apps/chat',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Chat').default);
            }, 'apps-chat');
        }
    },
    {
        path: '/apps/faq',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Faq').default);
            }, 'apps-faq');
        }
    },
    {
        path: '/apps/users/:listStyle',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/Users').default);
            }, 'apps-users');
        }
    },
    {
        path: '/apps/user-profile/edit/:section',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/ProfileEdit').default);
            }, 'apps-profile-edit');
        }
    },
    {
        path: '/apps/profile-details',
        /*  Async WebPack code split  */
        getComponent: (nextState, cb) => {
            require.ensure([], require => {
                cb(null, require('./Apps/ProfileDetails').default);
            }, 'apps-profile-details');
        }
    },
    // Icons
    {
        path: '/icon-set/font-awesome',
        component: require('./Icons/FontAwesome').default
    },
    {
        path: '/icon-set/glyphicons',
        component: require('./Icons/GlyphIcons').default
    },

    // Panels
    {
        path: '/panels',
        component: require('./Panels').default
    },

    {
        path: '*',
        component: require('./Pages/NotFound').default
    }
];
