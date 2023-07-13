let Group = {
    0: [
        {STT: 1, Name: 'A Koi + Sáng'},
        {STT: 2, Name: 'A Thanh + Toản'},
        {STT: 3, Name: 'Đức Anh t3'},
        {STT: 4, Name: 'A Zik + Học'},
        {STT: 5, Name: 'A Đức + A Trường'},
        {STT: 6, Name: 'Sinh + Thành'},
        // {STT: 7, Name: 'a7'}
    ],

    1: [
        {STT: 1, Name: 'A Thuận + Việt'},
        {STT: 2, Name: 'A Đạt 93 + Hoàng'},
        {STT: 3, Name: 'Long'},
        {STT: 4, Name: 'A Bình + Hoàng (bạn Toản)'},
        {STT: 5, Name: 'Tuấn + A Duy'},
        {STT: 6, Name: 'Vũ + Đạt'},
        // {STT: 7, Name: 'b7'}
    ]
}
    
const Team1 = [];
const Team2 = [];

function team(index) {
    let item1 = Group[0][index] ?? null ;
    let item2 = Group[1][index] ?? null;
    let random = Math.floor(Math.random()*2)
    
    if (random === 0) {
        Team1.push(item1)
        Team2.push(item2)
    }

    if (random === 1) {
        Team1.push(item2)
        Team2.push(item1)
    }
}

const maxLength = Group[0].length > Group[1].length ? Group[0].length : Group[1].length;

const test = document.getElementById("tbodyTb");
const statusLabel = document.getElementById("status");
const tbl = document.getElementById("chiateam");
const btnStart = document.getElementById("btnStart");
const statusCongrast = document.getElementById("status_congrast");

const init = async () => {
    btnStart.style.display = "none"
    statusLabel.style.display = "block"
    await sleep(3000);
    statusLabel.style.display = "none"
    tbl.style.display = "inline-block"
    main();
}

const sleep = (milliseconds) => {
    return new Promise((r)=> setTimeout(() => {
        return r();
    }, milliseconds))
}

const main = async () => {
    for(let i = 0; i < maxLength ; i++){
        // await sleep();
        setTimeout(()=> genTBody(i), i * 1000);
    }
}

const genTBody = (index) => {
    team(index);
    let tbBody = '';
    for (let i = 0 ; i < Team1.length; i++){
        tbBody = tbBody + `
        <tr>
            <td>${Team1[i]['Name']}</td>
            <td>${Team2[i]['Name']}</td>
        </tr>`;
    }
    test.innerHTML = tbBody;
    if(index >= maxLength - 1)  statusCongrast.style.display = "inline-block";
}










