

function calculateShippingRate(weight, distance) {
    const baseRate = 5.0; // Biaya dasar
    const weightRate = 0.5 * weight; // Tarif per kg
    const distanceRate = 0.2 * distance; // Tarif per km
    return baseRate + weightRate + distanceRate;
}

// Jalankan program jika di-eksekusi langsung
if (typeof require !== "undefined" && require.main === module) {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Masukkan berat paket (kg): ", function (weight) {
        rl.question("Masukkan jarak pengiriman (km): ", function (distance) {
            const cost = calculateShippingRate(parseFloat(weight), parseFloat(distance));
            console.log(`Biaya Pengiriman: $${cost.toFixed(2)}`);
            rl.close();
        });
    });
}

module.exports = { calculateShippingRate };
