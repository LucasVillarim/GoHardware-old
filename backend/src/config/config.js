const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
        return{
            bd_string: 'mongodb+srv://usuario_admin:v1ll4134679@clusterapi-blc69.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: '134679',
            jwt_expires_in: '7d'
        }

        case 'hml':
        return {
            bd_string: 'mongodb+srv://usuario_admin:v1ll4134679@clusterapi-blc69.mongodb.net/test?retryWrites=true&w=majority'

        }

        case 'prod':
        return {
            bd_string: 'mongodb+srv://usuario_admin:v1ll4134679@clusterapi-blc69.mongodb.net/test?retryWrites=true&w=majority'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();