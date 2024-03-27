Luigi.setConfig({
    navigation: {
        nodes: [{
            pathSegment: 'home',
            label: 'Home',
            viewUrl: '/logo.png',
            children: [
                 {
                 pathSegment: 'order',
                 label: 'Order',
                 viewUrl: '/microfrontends/orders/index.html',
                 loadingIndicator: {
                   enabled: false
                 }
             },
                {
                pathSegment: 'mf1',
                label: 'Micro-Frontend 1',
                viewUrl: '/microfrontends/mf1/mf1.html',
                loadingIndicator: {
                  enabled: false
                }
            }]
        }]
    },
    routing: {
        useHashRouting: true
    }
});
