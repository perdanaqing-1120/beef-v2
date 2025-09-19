const fs = require('fs');
const text = require('stream/consumers');
const http = require('http');
const os = require('os');
const rupiah = require('rupiah-format');
const host = '127.0.0.1';
const port = 3002;
const namaFile = 'sisaUang.txt';
let code = 200;

const sisaRAM = os.freemem();
const jumlahCPU = os.cpus();

function checkCPU() {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
        myCPU.push(cpu.model);
    });
    return myCPU[0];
}

const server = http.createServer(function (req, res) {

    let jawab = 1;

    let uang = 1000000;
    let jajan = 50000;
    let sisa = uang - jajan;

    sisa = rupiah.convert(sisa);
    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    
    fs.appendFile( namaFile, sisa, () =>{
            console.log('Data di Save');
        });
        
    const nama = "Perdana";
    const html = `
    <head>
        <title>Response dari server</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
                background-color: #233d4d;
                color: #fe7f2d;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                text-align: center;
                border: 2px outset #fe7f2d;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                background-color: #1b262c;
                box-sizing: border-box;
                }
            .text {
                text-transform: uppercase;
            }
            button {
                padding: 10px 20px;
                background-color: #fe7f2d;
                color: #1b262c;
                border: 2px outset #fe7f2d;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
                box-sizing: border-box;
                font-weight: bold;
            }
            button:hover {
                background-color: #1b262c;
                color: #fe7f2d;
                border: 2px outset #fe7f2d;
            }
            button:active {
                transform: scale(0.98);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div>
                <h1 class = "text">ini adalah respons dari server dengan node js status ${code}</h1>
                <h1>halo nama saya ${nama}</h1>
                </div>
                
                <div>
                <p>uang saya ${uang} dan saya memakai sebanyak ${jajan} lalu sisa uang saya adalah ${sisa}</p>
                <p>baru saja menambahkan file baru bernama ${namaFile} <br>
                    cek di file ${namaFile}
                    </p>

                    <button onclick="location.href='/delete'">hapus ${namaFile}</button>

                    <h5> sisa RAM di komputer saya ${sisaRAM} byte <br>
                    merek CPU yang saya pakai adalah ${checkCPU()}
                    </h5>

                    <button onclick="hapusCPU()">hapus CPU</button>
            </div>
        
        </div>
        <script>
            function hapusCPU() {
                window.location.replace("/delete");
            }
        </script>
    </body>
    `

    if (req.url === '/delete') {
        fs.unlink(namaFile, (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error deleting file');
                return;
            }
            res.statusCode = 200;
            res.end('File deleted successfully');
        });
        return;
    }

    if (jawab == 0 ) {
        code = 404;
    } else if (jawab == 1) {
        code = 200;
    }


    res.statusCode = code;
    res.write(html);
    res.end();
    
});

server.listen(port, host, '', function() {
    console.log(`server menyala di http://${host}:${port}/`);
});
