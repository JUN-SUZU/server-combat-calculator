let n = 0;
const serverAdd = () => {
    const form = document.createElement("div");
    form.id = `serverForm${n}`;
    form.innerHTML = `
        <div id="serverForm">
            <h3>Server ${n + 1}</h3>
            <label for="serverName">Server Name</label>
            <input type="text" id="serverName" placeholder="Server Name">
            <label for="cpu">CPU(PassmarkScore)</label>
            <input type="number" id="cpu" placeholder="CPU(PassmarkScore)">
            <label for="ram">RAM(MB)</label>
            <input type="number" id="ram" placeholder="RAM(MB)">
            <label for="hdd">HDD(GB)</label>
            <input type="number" id="hdd" placeholder="HDD(GB)">
            <label for="ssd">SSD(GB)</label>
            <input type="number" id="ssd" placeholder="SSD(GB)">
            <label for="network">Network(Mbps)</label>
            <input type="number" id="network" placeholder="Network(Mbps)">
            <button onclick="deleteServer(${n})">Delete</button>
            </div>`
    const serverList = document.getElementById("serverList");
    serverList.appendChild(form);
    n++;
}

const deleteServer = (n) => {
    const serverForm = document.getElementById(`serverForm${n}`);
    serverForm.remove();
}

const calc = () => {
    const serverList = document.getElementById("serverList");
    const serverForms = serverList.children;
    const serverData = [];
    for (let i = 0; i < serverForms.length; i++) {
        const serverForm = serverForms[i];
        const serverName = serverForm.querySelector("#serverName").value;
        const cpu = parseInt(serverForm.querySelector("#cpu").value);
        const ram = parseInt(serverForm.querySelector("#ram").value);
        const hdd = parseInt(serverForm.querySelector("#hdd").value);
        const ssd = parseInt(serverForm.querySelector("#ssd").value);
        const network = parseInt(serverForm.querySelector("#network").value);
        serverData.push({ serverName, cpu, ram, hdd, ssd, network });
    }
    console.log(serverData);
    // Send serverData to server
    let score = 0;
    serverData.forEach(server => {
        score += server.cpu < 2000 ? 0 : server.cpu;
        score += server.ram < 1024 ? 0 : server.ram / 4;
        score += server.hdd < 64 ? 0 : server.hdd;
        score += server.ssd < 64 ? 0 : server.ssd * 2;
        score += server.network < 5 ? 0 : server.network;
    });
    console.log(score);
    const result = document.getElementById("result");
    result.innerHTML = `Total Score: ${score}`;
}
