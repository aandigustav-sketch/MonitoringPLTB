// ===============================
// FIREBASE
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// ===============================
// KONFIGURASI FIREBASE
// ===============================

const firebaseConfig = {

    apiKey: "AIzaSyC_bWJSCckJUMpgu97gSN5o2_YZWeEfvxw",
    authDomain: "monitoringta-6d039.firebaseapp.com",
    databaseURL: "https://monitoringta-6d039-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "monitoringta-6d039",
    storageBucket: "monitoringta-6d039.firebasestorage.app",
    messagingSenderId: "228555197025",
    appId: "1:228555197025:web:b353b9f191ec5d48f43820"

};

// ===============================
// INISIALISASI FIREBASE
// ===============================

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

// ===============================
// MEMBACA DATA SENSOR
// ===============================

const sensorRef = ref(db, "Monitoring/Sensor");

onValue(sensorRef, (snapshot) => {

    const data = snapshot.val();

    if (data) {

        document.getElementById("teganganGenerator").innerHTML =
            data.Tegangan_Generator + " VAC";

        document.getElementById("teganganBaterai").innerHTML =
            data.Tegangan_Baterai + " VDC";

        document.getElementById("arusGenerator").innerHTML =
            data.Arus_Generator + " A";

        document.getElementById("arusBeban").innerHTML =
            data.Arus_Beban + " A";

        document.getElementById("rpm").innerHTML =
            data.RPM + " rpm";

        document.getElementById("angin").innerHTML =
            data.Kecepatan_Angin + " m/s";

    }

});

// ===============================
// JAM DIGITAL
// ===============================

function updateJam() {

    const sekarang = new Date();

    const jam =
        String(sekarang.getHours()).padStart(2, "0");

    const menit =
        String(sekarang.getMinutes()).padStart(2, "0");

    const detik =
        String(sekarang.getSeconds()).padStart(2, "0");

    document.getElementById("jam").innerHTML =
        jam + ":" + menit + ":" + detik;

}

setInterval(updateJam, 1000);

updateJam();

// ===============================
// TANGGAL
// ===============================

function updateTanggal() {

    const sekarang = new Date();

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const teksTanggal =
        hari[sekarang.getDay()] + ", " +
        sekarang.getDate() + " " +
        bulan[sekarang.getMonth()] + " " +
        sekarang.getFullYear();

    document.getElementById("tanggal").innerHTML =
        teksTanggal;

}

updateTanggal();