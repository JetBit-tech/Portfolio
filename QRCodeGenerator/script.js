function generateQR() {
    const text = document.getElementById("text").value.trim();
    const qr = document.getElementById("qr");

    if (text === "") {
        alert("Please enter some text.");
        return;
    }

    qr.innerHTML = `
        <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(text)}"
            alt="QR Code">
    `;
}