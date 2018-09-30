import $ from 'jquery'
import renderData from './scripts/renderData'
import style from './stylesheets/style.scss';


$(document).ready( () => {
    
    const URL = `https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD`

    fetch( URL )
        .then( res => res.json() )
        .then( data => {
            totalPrice(data.ask)
            // first rendering
            renderData(data.changes.price, `$`)

            // swith from price to precent and back
            $(`#switch`).click( function() {
                $(this).toggleClass('active')
                {
                    $(`#switch`).hasClass(`active`) ?
                        renderData(data.changes.percent, `%`):
                        renderData(data.changes.price, `$`) 
                }
            })
        })

        const totalPrice = (price) => {
            $(`.cards__item_data--price span`).text(`$${price}`)
        }
        
    //    setTimeout( () => {
    //     $(`.li span`).each( function() {
    //         console.log( $(this).text() )
    //     } )
    //    },1000 )
})



