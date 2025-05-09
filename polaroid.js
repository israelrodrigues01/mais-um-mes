$(document).ready(function () {
    let html = '';
    arrayImages.forEach(image => {
        if (image.image) {
            html += `
                <li class="item">
                    <div>
                        <div class="polaroid">
                            <img src="${image.image}">
                            <div class="caption">${image.description}</div>
                        </div>
                    </div>
                </li>
            `;
        } else if (image.video) {
            html += `
                <li class="item">
                    <div>
                        <div class="polaroid">
                            <video controls preload="metadata">
                                <source src="${image.video}" type="video/mp4">
                                Seu navegador não suporta vídeos.
                            </video>
                            <div class="caption">${image.description}</div>
                        </div>
                    </div>
                </li>
            `;
        }
    });

    $('#photos').append(html);
});