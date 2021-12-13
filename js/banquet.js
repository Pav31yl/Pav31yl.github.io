function mebel() {
    // document.querySelector('.content').innerHTML = ''
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLDOM");
    }

    xmlhttp.open("GET", '../xml/banquet.xml', false); //ссылка на файл
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    let item = xmlDoc.getElementsByTagName("item");
    console.log(item);
    for (i = 0; i < item.length; i++) {
        // тут создаётся тебе нужный див(стили настроишь сам)
        //
        let newElement = document.createElement("div")
        newElement.innerHTML = `<div class="item-temp">
        <img src="../furniture/${item[i].getElementsByTagName('image')[0].innerHTML}" width="200px"; height="200px">
        <div  style="display: flex; flex-direction: row; justify-content: space-around; align-items: center;">
            <div style="display: flex; flex-direction: column; justify-content: space-around; align-items: center; width:130px;">
                
                <div style="margin-bottom: 20px;">${item[i].getElementsByTagName('name')[0].innerHTML}</div>
                <div style="font-size: 20px;">${item[i].getElementsByTagName('price')[0].innerHTML}</div>
            </div>
            <div  style="display: flex; flex-direction: column; justify-content: space-around; align-items: center;">
                <a href="../pages/products/${item[i].getElementsByTagName('image')[0].innerHTML}.html">
                <img src="..//img/i.svg"  style="padding-top: 10%; padding-bottom:15%;">
                </a>
            </div>
    </div>`
        document.querySelector('.content').appendChild(newElement);
    }

}
