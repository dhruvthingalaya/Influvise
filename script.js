
document.getElementById('Clients').addEventListener
    ('click', function () {
        document.getElementById('clientsPopup').showModal();
        document.body.classList.add('no-scroll');
    })

// document.getElementById('closeClients').addEventListener
//     ('click', function () {
//         document.getElementById('clientsPopup').closest();
//         document.body.classList.remove('no-scroll');
//     })

function closeClients() {
    document.getElementById('clientsPopup').close();
    document.body.classList.remove('no-scroll');
}