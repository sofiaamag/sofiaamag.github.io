$(document).ready(() => {
    $('.welcome').on('mouseover', () => {
        $('.welcome').css({
            borderColor: 'blue',
            fontWeight: 'bold'
        }  
        )
    }).on('mouseleave', () => {
        $('.welcome').css({ 
            fontWeight: 'normal'
        })

    })
})
