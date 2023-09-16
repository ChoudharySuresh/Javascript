const insert = document.querySelector(".main-content");

window.addEventListener("keydown" , function(e){
    insert.innerHTML=`
        <table>
            <tr>
                <td>Key</td>
                <td>KeyCode</td>
                <td>code</td>
            </tr>
            <tr>
                <td>${e.key === " " ? "space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `

})