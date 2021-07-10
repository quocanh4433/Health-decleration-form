export class Info {
    ho = "";
    ten = "";
    email= "";
    soDienThoai = "";
    ngay = "";
    thang = "";
    nam = "";
    diaChi = "";
    thongTinDiChuyen = "";
    loaiNhiem = "";

    arrInfo = []
    constructor () {

    }

    themInfo = (info) => {
        this.arrInfo.push(info)
        console.log('Arr Info', this.arrInfo);
    }

    taoBangInfo = () => {
        let tableInfo = this.arrInfo.map((info, index) => {
            return `
            <tr class="border-dark"><td class="font-weight-bold w-25">HỌ VÀ TÊN:</td><td>${info.ho} ${info.ten}</td></tr>
            <tr class="border-dark"><td class="font-weight-bold w-25">EMAIL:</td><td>${info.email}</td></tr>
            <tr class="border-dark"><td class="font-weight-bold w-25">SỐ ĐIỆN THOẠI:</td><td>${info.soDienThoai}</td></tr>
            <tr class="border-dark"><td class="font-weight-bold w-25">NGÀY, THÁNG, NĂM SINH:</td><td id="brirthDay">${info.ngay}/${info.thang}/${info.nam}</td></tr>
            <tr class="border-dark"><td class="font-weight-bold w-25">ĐỊA CHỈ:</td><td>${info.diaChi}</td></tr>
            <tr class="border-dark"><td class="font-weight-bold w-25">THÔNG TIN DI CHUYỂN:</td><td>${info.thongTinDiChuyen}</td></tr>
            <tr class="border-dark"><td class="font-weight-bold w-25">LOẠI LÂY NHIỄM:</td><td>${info.loaiNhiem}</td></tr>
            `
        });
        return tableInfo;
    }

    renderInfo = (idTable) => {
        let content = ""
        let htmlTable = this.taoBangInfo();

        htmlTable.forEach((htmlTable, index) => {
            content += htmlTable
        })
        document.getElementById(idTable).innerHTML = content
    }
}