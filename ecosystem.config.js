module.exports = {
    apps: [{
        name: 'Ebay Ads',
        script: 'npm start',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env_production: {
            PORT: 8080,
        },
        error_file: './err.log',
        out_file: './out.log',
    }],
};
