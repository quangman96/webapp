module.exports = {
  apps: {
    name: 'angular-ssr',
    script: 'dist/webapp/server/server.mjs',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '300M',
    env: {
      PORT: 4000,
      NODE_ENV: 'production'
    }
  }
}
