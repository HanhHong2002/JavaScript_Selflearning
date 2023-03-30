// Neu khong co dau ; code van chay binh thuong nhung khong viet duoc 2 cau lenh tren 1 dong
// Khai bao bien
var fullName  = 'Ngo Thi Hong Hanh';
var age = 21;
var weight = 38;
// goi ham thong bao
alert(fullName);
alert(age);
/*
 Ham built -in
 1. Alert 
 2. Console
 3. Confirm
 4. Prompt
 5. set timeout

 */
console.loc('Hihi');
console.log(fullName);
console.warn('M xong roi');
console.error('Loi roi ma oi');
//
confirm('How old are you?');
prompt('What is your age?');
//Cho 1 doan code chay sau 1 khoang thoi gian
setTimeout(function() {
    alert('Please wait 2 seconds');
}, 2)
//Chay lien tuc 1 doan code sau 1 khoang tgian
setInterval(function() {
    console.log('HAH')
})
/*
Toan tu trong js
1.  Toan tu so hoc
2. Toan tu gan
3. Toan tu so sanh
4. Toan tu logic
 */
