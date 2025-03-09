
document.getElementById('Clients').addEventListener
    ('click', function () {
        document.getElementById('clientsPopup').showModal();
        document.body.classList.add('no-scroll');
    })

document.getElementById('closeClients').addEventListener
    ('click', function (event) {
        event.stopPropagation();
        document.getElementById('clientsPopup').close();
        document.body.classList.remove('no-scroll');
    })


