document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const webhookUrl = 'https://hook.eu2.make.com/vs1aclwvua13mc4dag5liyx565d5cld6';

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            const modal = document.getElementById('Submit message');
            modal.classList.add('is-active');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
