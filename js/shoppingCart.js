/*Variables that represent shopping items*/ 

var inequation = {
    item: `<p><strong><span style="font-size: 17px;">אי שוויון עם ערך מוחלט</span></strong></p>
            <ul>
                <li>חזרה ותזכורת</li>
                <li>אי שוויון עם ערך מוחלט</li>
                <li>אי שוויון עם רב איבר בערך מוחלט</li>
            </ul>
            <button class="btn btn-link removeBtn">הסר</button>`,
    price: 12,
    set: false
}

var wordProblems = {
    item: `<p><strong><span style="font-size: 17px;">בעיות מילוליות</span></strong></p>
            <ul>
                <li>רקע</li>
                <li>תרגול נעלמים ושליפת נתונים</li>
                <li>הצבת משוואות ופתרון בעיות מילוליות</li>
            </ul>
            <button class="btn btn-link removeBtn">הסר</button>`,
    price: 12,
    set: false
}


var itemTableData =`<tr>
                        <th class="text-center" scope="row">1</th>
                        <td class="item"></td>
                        <td class="text-center itemPrice"></td> 
                    </tr>`

var totalPrice = 0;



/*--------------------------------------------------------------------------------------------------------------*/



$('.items').hide();



$('.shoppingCartLink').click(function(e){

    localStorage.setItem('chapterName', $('.shoppingCartLink').attr('id'));

    localStorage.setItem('cartNotEmpty', true);

    var x = localStorage.getItem('numOfItems');     
    x++;
    localStorage.setItem('numOfItems', x);

});


var chapterName = localStorage.getItem('chapterName');
var cartNotEmpty = localStorage.getItem('cartNotEmpty');
var y = localStorage.getItem('numOfItems');


$('.'+chapterName).attr("disabled", 'disabled');


if (cartNotEmpty){

    $('.items').show();
    $('.itemRows').prepend(itemTableData);

    if (chapterName === 'inequation'){
        localStorage.setItem('inequation',(chapterName == 'inequation'));
    }
    if (localStorage.getItem('inequation')){
        $('.item').prepend(inequation.item);
        $('.itemPrice').prepend(inequation.price + '  ש"ח');
        totalPrice = totalPrice + inequation.price;
    }

    if (chapterName === 'wordProblems'){
        localStorage.setItem('wordProblems',(chapterName == 'wordProblems'));
    }
    if (localStorage.getItem('wordProblems')){
        $('.item').prepend(wordProblems.item);
        $('.itemPrice').prepend(wordProblems.price + '  ש"ח');
        totalPrice = totalPrice + wordProblems.price;
    }

}


$('.itemTotal').append(totalPrice );

$('.itemsNum').html(y);




/*-----------------------------------------------------------------------------*/

/*testings:*/

console.log("Empty Cart = " + !cartNotEmpty);
console.log("items = " + y);
console.log("chapter = " + chapterName);
console.log("inequation = " + inequation.set);
console.log("wordProblems = " + wordProblems.set);


// localStorage.removeItem('cartNotEmpty');
// localStorage.removeItem('numOfItems');
// localStorage.removeItem('chapterName');
// localStorage.removeItem('wordProblems');
// localStorage.removeItem('inequation');
