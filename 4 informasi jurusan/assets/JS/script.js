// search input
document.getElementById("searchInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchAndRedirect();
    }
});

function searchAndRedirect() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();

    if (searchInput === "rpl") {
        window.location.href = "rpl.html";
    } else if (searchInput === "tkj") {
        window.location.href = "tkj.html";
    } else if (searchInput === "tl") {
        window.location.href = "tl.html";
    } else if (searchInput === "otkp") {
        window.location.href = "otkp.html";
    } else {
        alert("Jurusan tidak ditemukan!");
    }
}
