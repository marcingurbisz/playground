Luigi.setConfig({
    navigation: {
        nodes: [{
            pathSegment: 'home',
            label: 'Home',
            children: [{
                pathSegment: 'microfrontend1',
                label: 'Micro-Frontend 1',
                viewUrl: 'https://gist.github.com'
            }, {
                pathSegment: 'microfrontend2',
                label: 'Micro-Frontend 2',
                viewUrl: 'https://www.google.com/maps/embed?pb='
            }]
        }]
    },
    routing: {
        useHashRouting: true
    }
});
