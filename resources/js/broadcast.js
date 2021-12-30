import Echo from 'laravel-echo'
window.Pusher = require('pusher-js');

export default {
    name : 'PageIndex',
    mounted () {
        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: 'ASDASD2121',
            wsHost: window.location.hostname,
            wsPort: 6001,
            disableStats: true
        });

        window.Echo.channel('home').listen('NewMessage', (e) => {
            console.log(e);
        });
    }
}