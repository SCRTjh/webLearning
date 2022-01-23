
window.onload = function () {
    let join_form = document.querySelectorAll('#join-form');
    let qrcode = document.querySelector('#qr');
    let psigh = document.querySelector('#psign');

    console.log(join_form);
    console.log(qrcode);

    qrcode.addEventListener("click", function () {
        for (let i = 0; i < join_form.length; i++) {
            join_form[i].style.display = 'none';
        }
        join_form[1].style.display = 'block';
    })

    psigh.addEventListener('click', function () {
        for (let i = 0; i < join_form.length; i++) {
            join_form[i].style.display = 'none';
        }
        join_form[0].style.display = 'block';
    })

}
