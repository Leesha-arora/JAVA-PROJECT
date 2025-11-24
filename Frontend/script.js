let candidates = {
    1: "Candidate A",
    2: "Candidate B",
    3: "Candidate C"
};

let votes = {
    1: 0,
    2: 0,
    3: 0
};

window.onload = () => {
    let list = document.getElementById("candidateList");
    for (let id in candidates) {
        let li = document.createElement("li");
        li.textContent = id + ". " + candidates[id];
        list.appendChild(li);
    }
};

function vote() {
    let id = document.getElementById("candidateId").value;

    if (votes[id] !== undefined) {
        votes[id]++;
        alert("Vote recorded successfully!");
    } else {
        alert("Invalid Candidate ID!");
    }
}

function showResults() {
    let list = document.getElementById("resultsList");
    list.innerHTML = "";
    for (let id in votes) {
        let li = document.createElement("li");
        li.textContent = candidates[id] + ": " + votes[id] + " votes";
        list.appendChild(li);
    }
}
