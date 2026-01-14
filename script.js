const params = new URLSearchParams(window.location.search);
const phone = params.get("phone");

const product = document.getElementById("product");

if (phone === "a55") {
    product.innerHTML = `
        <h1>Samsung Galaxy A55 5G(Awesome Navy)</h1>
        <p>8GB RAM | 256GB Storage</p>
        <p>50MP Main Camera(OIS) | sAMOLED Display</p>
        <p>Super HDR Video| Nightography | IP67 | Corning Gorilla Glass Victus+</p>
        <h2>₹25,999</h2>
        <p>Inclusive of all taxes
EMI starts at ₹1,248. No Cost EMI available </p>
    `;
}
else if (phone === "m06") {
    product.innerHTML = `
        <h1>Samsung Galaxy M06 5G(Sage Green)</h1>
        <p>6GB RAM | 128GB Storage</p>
        <p>MediaTek Dimensity 6300 | AnTuTu Score 422K+ </p>
        <p>12 5G Bands| 25W Fast Charging | 4 Gen of OS Upgrades</p>
        <h2>₹12,499</h2>
        <p>Inclusive of all taxes
EMI starts at ₹436. No Cost EMI available</p>
    `;
}
else if (phone === "a35") {
    product.innerHTML = `
        <h1>Samsung Galaxy A35 5G(Awesome Lilac)</h1>
        <p>8GB RAM | 256GB Storage</p>
        <p>Premium Glass Back | 50 MP Main Camera (OIS) | Nightography</p>
        <p>sAMOLED with Vision Booster</p>
        <h2>₹33,999</h2>
        <p>Inclusive of all taxes
EMI starts at ₹1,008. No Cost EMI available</p>
    `;
}
else if (phone === "m36") {
    product.innerHTML = `
        <h1>Samsung Galaxy M36 5G((Velvet Black)</h1>
        <p>8GB RAM | 256GB Storage</p>
        <p>Circle to Search| Google Gemini| Corning Gorilla Glass Victus+| 7.7mm Slim</p>
        <p>AI Enhanced 50 MP OIS Triple Camera| Unmatched Nightography</p>
        <h2>₹21,999</h2>
        <p>Inclusive of all taxes
EMI starts at ₹912. No Cost EMI available</p>
    `;
}
else if (phone === "s25") {
    product.innerHTML = `
            <h2>Samsung Galaxy S25 Ultra((Titanium Whitesilver)</h2>
            <p>12GB RAM | 512GB Storage</p>
            <p>200MP Camera | S Pen Included |  Long Battery Life</p>
            <h3>Price: ₹1,41,999</h3>
            <p>Inclusive of all taxes
EMI starts at ₹6,818. No Cost EMI available</p>
        `;
    } 
    else if (phone === "s22") {
    product.innerHTML = `
            <h2>Samsung Galaxy S22 Ultra(Phantom Black)</h2>
            <p>12GB RAM | 512GB Storage</p>
            <p>Premium Camera | Flagship Phone</p>
            <h3>Price: ₹89,999</h3>
            <p>Inclusive of all taxes
EMI starts at ₹4,321. No Cost EMI available</p>
        `;
    }
    function searchPhones() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const phones = document.getElementsByClassName("phone-item");

    for (let i = 0; i < phones.length; i++) {
        const phoneName = phones[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        if (phoneName.includes(input)) {
            phones[i].style.display = "flex";
        } else {
            phones[i].style.display = "none";
        }
    }
}
