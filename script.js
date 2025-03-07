const Clients = document.getElementById("Clients");
const clientsDialog = document.getElementById("clientsDialog");
const closeClients = document.getElementById("closeClients");

Clients.addEventListener("click", () => { clientsDialog.showModal() });
closeClients.addEventListener("click", () => { closeClients.close() });