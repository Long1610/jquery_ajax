$(document).ready(function () {
    var nguoiDungService = new NguoiDungService();

    layDanhSachNguoiDung();

    $("#btnThemNguoiDung").click(function () {
        $(".modal-title").html("Thêm người dùng");
        var footer = "<button id='btnThem' class='btn btn-success'>Thêm</button><button id='btnDong' class='btn btn-danger' data-dismiss='modal'>Đóng</button>";
        $(".modal-footer").html(footer);
    });

    $("body").delegate("#btnThem", "click", function(){
        console.log(12321);
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var loaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, loaiNguoiDung);
        nguoiDungService.themNguoiDung(nguoiDung);
    });
    $("body").delegate("#btnXoa", "click", function(){
       var taiKhoan = $(this).data('taikhoan');
       nguoiDungService.xoaNguoiDung(taiKhoan);
    });
    $("body").delegate("#btnSua", "click", function(){
        $(".modal-title").html("Sửa người dùng");
        var footer = "<button id='btnLuu' class='btn btn-success'>Lưu</button><button id='btnDong' class='btn btn-danger' data-dismiss='modal'>Đóng</button>";
        $(".modal-footer").html(footer);
        var taiKhoan = $(this).data('taikhoan');
        var thongtin= nguoiDungService.layThongTinNguoiDung(taiKhoan);
        thongtin.map(function(item){
            $("#TaiKhoan").val(item.TaiKhoan);
            $("#HoTen").val(item.HoTen);
            $("#MatKhau").val(item.MatKhau);
            $("#Email").val(item.Email);
            $("#SoDienThoai").val(item.SoDienThoai);
            $("#loaiNguoiDung").val(item.MaLoaiNguoiDung);
        })
     });
     $("body").delegate("#btnLuu","click",function () {
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var loaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, loaiNguoiDung);
        nguoiDungService.suaNguoiDung(nguoiDung);
    });
    function layDanhSachNguoiDung(){
        nguoiDungService.layDanhSachNguoiDung();
    }
})

