Luigi.setConfig({
    navigation: {
        nodes: [{
            pathSegment: 'home',
            label: 'Home',
            children: [
                {
                    pathSegment: 'item1App',
                    label: 'Item 1 App',
                    viewUrl: 'microfrontends/item1App.html',
                    loadingIndicator: {
                        enabled: false
                    }
                },
                {
                    pathSegment: 'item2App',
                    label: 'Item 2 App',
                    viewUrl: 'microfrontends/item2App.html',
                    loadingIndicator: {
                        enabled: false
                    }
                }
            ]
        }]
    },
    routing: {
        useHashRouting: true
    }
}); 