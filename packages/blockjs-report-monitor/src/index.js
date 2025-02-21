/**
 * monitor上报
 */

const sendReport = function sendReport(url) {
    let img = new Image();
    img.src = url;
    img.onload = img.onerror = function (){
        img = this.onload = this.onerror = null;
    };
    // img = null;
};

const sendAll = function sendAll() {
    let msg = [];
    for (let i in buffer) {
        msg.push(buffer[i] + '-' + INDEX_TABLE[i][0] + '-' + INDEX_TABLE[i][1] + '_' + buffer[i]);
    }
    if (msg.length > 0) {
        sendReport('//xxx.com/report?' + msg.join('|_|') + '&r=' + Math.random());

        buffer = {};
    }
};

let buffer = {};
let INDEX_TABLE = {};
/*let INDEX_TABLE = {
 '1': [0, 506699],
 '2': [0, 506710],
 '3': [0, 506711],
 '4': [0, 506712]
 };*/
let timer = null;

export function setTable(_INDEX_TABLE) {
    INDEX_TABLE = _INDEX_TABLE
}

export function monitorReport(key, value) {
    if (INDEX_TABLE[key]) {
        buffer[key] = (buffer[key] || 0) + (value || 1);
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(sendAll, 1000);
    }
}