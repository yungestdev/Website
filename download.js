<script>
function download(FileName, text) {
    var element = document.createElement('a');
    element.style.display = 'none';
    element.setAttribute('href', 'data:text/plain;charset=utf-8' + encodeURIComponent(text))
        ;
    element.setAttribute('download', FileName);
    document.body.appendChild(element);

    element.click()

    document.body.removeChild(element);
}


document.getElementById("download-btn").addEventListener("click", function() {

    var text =document.getElementById("textval").value;
    var FileName = document.getElementById("FileName").value;

    download(FileName, text);
}, false)
</script>