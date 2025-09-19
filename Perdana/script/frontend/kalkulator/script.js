let display = document.getElementById('display');

const satu = document.getElementById('satu');
const dua = document.getElementById('dua');
const tiga = document.getElementById('tiga');
const empat = document.getElementById('empat');
const lima = document.getElementById('lima');
const enam = document.getElementById('enam');
const tujuh = document.getElementById('tujuh');
const delapan = document.getElementById('delapan');
const sembilan = document.getElementById('sembilan');
const nol = document.getElementById('nol');
const kurangBtn = document.getElementById('kurang');
const kaliBtn = document.getElementById('kali');
const bagiBtn = document.getElementById('bagi');
const titikBtn = document.getElementById('titik');

const hasilBtn = document.getElementById('hasil');
const tambahBtn = document.getElementById('tambah');
const clearBtn = document.getElementById('clear');

if (!display)
    display.value = '0';

// angka

satu.addEventListener('click', function() {
    display.value += '1';
});

dua.addEventListener('click', function() {
    display.value += '2';
});

tiga.addEventListener('click', function() {
    display.value += '3';
});

empat.addEventListener('click', function() {
    display.value += '4';
});

lima.addEventListener('click', function() {
    display.value += '5';
});

enam.addEventListener('click', function() {
    display.value += '6';
});

tujuh.addEventListener('click', function() {
    display.value += '7';
});

delapan.addEventListener('click', function() {
    display.value += '8';
});

sembilan.addEventListener('click', function() {
    display.value += '9';
});

nol.addEventListener('click', function() {
    display.value += '0';
});

// simbol

tambahBtn.addEventListener('click', function() {
    display.value = '+';
});

kurangBtn.addEventListener('click' , function() {
    display.value = '-'
});

bagiBtn.addEventListener('click' , function() {
    display.value = '/'
});

kaliBtn.addEventListener('click' , function() {
    display.value = 'x'
});

titikBtn.addEventListener('click' , function() {
    display.value = '.'
});

// tombol fungsi

clearBtn.addEventListener('click' , function() {
    display.value = '0'
});