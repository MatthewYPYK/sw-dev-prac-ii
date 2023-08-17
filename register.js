function checkEmpty(input) {
  return (input ?? '') == '';
}

function inputValidation() {
  let inputs = {};
  let keys = ['companyName', 'contactName', 'contactNumber', 'boothSize', 'chairCount'];
  for (let k of keys) {
    inputs[k] = document.getElementById(k).value.trim();
  }

  if (checkEmpty(inputs.companyName) || checkEmpty(inputs.contactName) || checkEmpty(inputs.contactNumber)) {
    let text = 'กรุณากรอก' +
      (checkEmpty(inputs.companyName) ? 'ชื่อบริษัท, ' : '') +
      (checkEmpty(inputs.contactName) ? 'ชื่อผู้ติดต่อ, ' : '') +
      (checkEmpty(inputs.contactNumber) ? 'เบอร์ผู้ติดต่อ, ' : '');
    
    alert(text.substring(0, text.length-2));
    return;
  }

  if (checkEmpty(inputs.boothSize)) {
    alert('กรุณาเลือกขนาดของบูธ');
    return;
  }

  if (checkEmpty(inputs.chairCount) || (1 >= parseInt(inputs.chairCount)) || (parseInt(inputs.chairCount) >= 10)) {
    alert('กรุณาเลือกจำนวนเก้าอี้ระหว่าง 1 ถึง 10 ตัว');
    return;
  }

}