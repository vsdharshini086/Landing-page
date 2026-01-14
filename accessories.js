const params = new URLSearchParams(window.location.search);
const item = params.get("item");

const product = document.getElementById("product");

if (item === "charger") {
    product.innerHTML = `
        <h1>Samsung 25W Fast Charger</h1>
        <p>Super Fast Charging</p>
        <p>USB Type-C | Original Samsung Accessory</p>
        <h2>₹1,299</h2>
        <p>Fast Delivery Available </p>
    `;
}
else if (item === "watch") {
    product.innerHTML = `
        <h1>Samsung Smart Watch</h1>
        <p>1.4″ AMOLED Display | Heart Rate & Fitness Tracking</p>
        <p>Bluetooth Calling | Sleep Monitoring | Water Resistance</p>
        <h2>₹12,999</h2>
        <p>Fast Delivery Available (2 days)</p>
    `;
}
else if (item === "airpods") {
    product.innerHTML = `
        <h1>Samsung AirPods (Wireless Earbuds)</h1>
        <p>Active Noise Cancellation | Touch Controls</p>
        <p>Long Battery Life | Premium Sound Quality</p>
        <h2>₹3,999</h2>
        <p>Fast Delivery Available (1 day)</p>
    `;
}
else if (item === "wired") {
    product.innerHTML = `
        <h1>Samsung Wired Earphones</h1>
        <p>High Quality Sound | Built-in Mic</p>
        <p>Comfortable Design | Durable Cable</p>
        <h2>₹999</h2>
        <p>Fast Delivery Available (2–3 days)</p>
    `;
}

else if (item === "cable") {
    product.innerHTML = `
        <h1>Samsung USB Type-C Cable</h1>
        <p>Fast Charging & Data Transfer</p>
        <p>Durable & Original Samsung</p>
        <h2>₹499</h2>
        <p>Fast Delivery Available</p>
    `;
}
