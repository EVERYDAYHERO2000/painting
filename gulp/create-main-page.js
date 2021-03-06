const fs = require('fs-extra');
const _ = require('lodash');

const page = function(){

    

    let page = '',
        screens = '';


    _.forEach(global.PAINTING, function(e,i){


        let type = (e.size == 'm' || e.size == 'l') ? 1 : 2,
            frame = (e.size == 'm' || e.size == 'l') ? `knoppaeng-frame_${e.frame}.png` : `edsbruk-frame_${e.frame}.png`,
            date = 2020,
            status = (e.status && e.status == 'sold') ? '' : '<a class="btn btn_get" href="#">3 500 руб.</a>',
            props = (function(){

                let p = {
                    canvas : '',
                    frame : ''
                }    

                if (e.size == 's'){
                    p.canvas = (e.dir == 'hor') ? '15 × 10' : '10 × 15';
                    p.frame = (e.dir == 'hor') ? '25 × 20' : '20 × 25';
                    p.name = 'IKEA EDSBRUK'
                }

                if (e.size == 'm'){
                    p.canvas = (e.dir == 'hor') ? '18 × 13' : '13 × 18';
                    p.frame = (e.dir == 'hor') ? '32 × 23' : '23 × 32';
                    p.name = 'IKEA KNOPPÄNG'
                }

                if (e.size == 'l'){
                    p.canvas = (e.dir == 'hor') ? '18 × 13' : '13 × 18';
                    p.frame = (e.dir == 'hor') ? '32 × 23' : '23 × 32';   
                    p.name = 'IKEA KNOPPÄNG'
                }

                return p;

            })();

        screens += `
        
        <section id="pic_${i}" class="screen"> 
            <div class="container container_${e.dir} container_size-${e.size}">
                <div class="container__description">
                    <div class="description__title">${(e.name) ? `${e.name}, ` : ''} ${date}</div>
                    <div>Холст на оргалите, масло</div>
                    <div>Размер: ${props.canvas} см</div>
                    <div>Рама: ${props.name} ${props.frame} см</div>
                    <div class="btn-group">${status} <a class="btn bth_link btn_copy" href="#pic_${i}">Скопировать ссылку<input class="link" /></a></div>
                </div>
                <div class="container__inner">
                    <figure class="container__hover">
                        <img src="./assets/${frame}" class="frame frame_${type} frame_shadow" loading="lazy" />
                        <img src="./assets/pic/${e.src}_prv.png" data-src="./assets/pic/${e.src}.png" class="painting painting_prv" alt="${(e.name) ? `${e.name}, ` : ''} ${date}" loading="lazy" />
                        <img src="./assets/${frame}" class="frame frame_${type}" />
                    </figure>    
                </div>
            </div>
        </section>
        
        `
    });

    page = `
        <!DOCTYPE html>
        <html lang="ru">
            <head>
                <title>Лавка 10 × 15</title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                <script src="./assets/jquery.js"></script>
                <script src="./assets/lazyload.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Podkova&display=swap" rel="stylesheet">
                <link href="./bin/main.css" type="text/css" rel="stylesheet" />
                <link rel="shortcut icon" href="//myio.one/favicon.png" type="image/png">
                <!-- Yandex.Metrika counter -->
                <script type="text/javascript" >
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(60688471, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                });
                </script>
                <noscript><div><img src="https://mc.yandex.ru/watch/60688471" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                <!-- /Yandex.Metrika counter -->
            </head>
            <body>
                <main class="page"> 
                
                   ${screens} 
                </main>
                <div class="window">
                    <div class="window__inner">
                        <div>Привет! Меня зовут Илья, свяжитесь со мной в Телеграме или WhatsApp</div>
                        <div class="btn-group">
                            <a class="btn" target="_blank" href="https://teleg.run/EVERYDAYHER0">Telegram</a>
                            <a class="btn" target="_blank" href="https://api.whatsapp.com/send?phone=79268487840">WhatsApp</a>
                            </div>
                    </div>
                </div>
                <script src="./bin/main.js"></script>
            </body>
        </html>        
    `;

    page = page.replace(/\s+/g, ' ')
            .replace(/\s\,\s/g, ', ')
            .trim();        
  
    fs.writeFile(DEV_PATH + '/index.html', page, function(err) {
        if (err) {
        console.log('createPage -->', err); 
        } else {
        console.log('createPage --> update');
        }
    });

}

module.exports = page;