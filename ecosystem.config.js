module.exports = {
    apps: [{
        name: 'CONTRIB',
        script: 'app.js',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env_DEV: {
            PLACE: 'DEV'
        },
        env_PROD: {
            PLACE: 'PROD'
        },
        env_STAGE: {
            PLACE: 'STAGE'
        }
    }],

    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
}
