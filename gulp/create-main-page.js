const fs = require('fs-extra');
const _ = require('lodash');

const page = function(){

    

    let page = '',
        screens = '';


    _.forEach(global.PAINTING, function(e,i){


        let type = (e.size == 'm' || e.size == 'l') ? 1 : 2,
            frame = (e.size == 'm' || e.size == 'l') ? `knoppaeng-frame_${e.frame}.png` : `edsbruk-frame_${e.frame}.png`,
            status = (e.status && e.status == 'sold') ? '<div>Продано</div>' : '',
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
        
        <div class="screen"> 
            <div class="container container_${e.dir} container_size-${e.size}">
                <div class="container__description">
                    ${status}
                    <div class="description__title">${(e.name) ? `${e.name}, ` : ''} 2020</div>
                    <div>Холст на оргалите, масло</div>
                    <div>Размер: ${props.canvas} см</div>
                    <div>Рама: ${props.name} ${props.frame} см</div>
                </div>
                <div class="container__inner">
                    <div class="container__hover">
                        <img src="./assets/${frame}" class="frame frame_${type} frame_shadow" />
                        <img src="./assets/pic/${e.src}" class="painting" />
                        <img src="./assets/${frame}" class="frame frame_${type}" />
                    </div>    
                </div>
            </div>
        </div>
        
        `
    });

    page = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                <script src="./assets/jquery.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Podkova&display=swap" rel="stylesheet">
                <link href="./bin/main.css" type="text/css" rel="stylesheet" />
            </head>
            <body>
                <div class="page"> 
                
                   ${screens} 
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