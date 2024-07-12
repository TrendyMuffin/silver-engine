            document.getElementById('orderForm').addEventListener('submit', function (event) {
                event.preventDefault();

                const formData = new FormData(this);
                const data = {};
                formData.forEach((value, key) => {
                    data[key] = value;
                });

                const webhookUrl = 'https://hook.eu2.make.com/vx7vtirrifw841m8eqxbxx1wyu7bj16c';

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
                        openModal(document.getElementById('Submit message'));
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            });
        });
