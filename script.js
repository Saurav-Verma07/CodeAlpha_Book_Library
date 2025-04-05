document.getElementById("search").addEventListener("keyup", function() {
    let input = this.value.toLowerCase();
    let rows = document.querySelectorAll("#book-list tr");
    rows.forEach(row => {
        let title = row.cells[0].textContent.toLowerCase();
        if (title.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});
