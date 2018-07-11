/*Variables:*/ 

var totalPrice = 0;
var chapterName = localStorage.getItem('chapterName');
var cartNotEmpty = localStorage.getItem('cartNotEmpty');
var y = localStorage.getItem('numOfItems');

/*--------------------------------------------------------------------------------------------------------------*/


/*Clicking 'add to cart' cause the following:
    1. Finding the specific chapter that was clicked.
    2. Marking the shopping cart as 'not empty' (so that the orange square with the number of items will be shown).
    3. Counting the number of items (later use in orange square and in numbering the items at the shopping cart table).
*/
$('.shoppingCartLink').click(function(){
    localStorage.setItem('chapterName', $('.shoppingCartLink').attr('id'));

    localStorage.setItem('cartNotEmpty', true);

    var x = localStorage.getItem('numOfItems');     
    x++;
    localStorage.setItem('numOfItems', x);
});


//Number of items on the little orange square:
$('.itemsNum').html(y);



$('.items').hide();
//Show number of items next to cart:
if (cartNotEmpty){  
    $('.items').show();
}



/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//reducing code returns:
var chapters = ['inequation', 'wordProblems'];
if (chapterName === 'inequation'){
    localStorage.setItem(chapterName, true);
    localStorage.setItem(chapterName+'Price', 12);
    localStorage.setItem(chapterName+'Item', `<tr class="inequationRow">
                                                <th class="text-center" scope="row"></th>
                                                <td class="item">
                                                    <p><strong><span style="font-size: 17px;">אי שוויון עם ערך מוחלט</span></strong></p>
                                                    <ul>
                                                        <li>חזרה ותזכורת</li>
                                                        <li>אי שוויון עם ערך מוחלט</li>
                                                        <li>אי שוויון עם רב איבר בערך מוחלט</li>
                                                    </ul>
                                                    <button class="btn btn-link removeBtn" id="inequation">הסר</button>
                                                </td>
                                                <td class="text-center inequationPrice"></td>               
                                            </tr>`);
}

if (chapterName === 'wordProblems'){
    localStorage.setItem(chapterName, true);
    localStorage.setItem(chapterName+'Price', 12);
    localStorage.setItem(chapterName+'Item', `<tr class="wordProblemsRow">
                                                <th class="text-center" scope="row"></th>
                                                <td class="item">
                                                    <p><strong><span style="font-size: 17px;">בעיות מילוליות</span></strong></p>
                                                    <ul>
                                                        <li>רקע</li>
                                                        <li>תרגול נעלמים ושליפת נתונים</li>
                                                        <li>הצבת משוואות ופתרון בעיות מילוליות</li>
                                                    </ul>
                                                    <button class="btn btn-link removeBtn" id="wordProblems">הסר</button>
                                                </td>
                                                <td class="text-center wordProblemsPrice"></td>               
                                            </tr>`);
}




for (i=0; i<=chapters.length; i++){

    if (chapterName === chapters[i]){
        localStorage.setItem(chapters[i], true);
    }

    if (localStorage.getItem(chapters[i])){
        var price = Number(localStorage.getItem(chapters[i]+'Price'));
        var item = localStorage.getItem(chapters[i]+'Item');
        $('.'+chapters[i]).attr("disabled", 'disabled');
        $('.itemRows').prepend(item);
        $('.'+chapters[i]+'Price').prepend(price + '  ש"ח');
        totalPrice = totalPrice + price;
    
    
    }

}



$('.removeBtn').click(function(){

    var chapter = this.id;
    var price = Number(localStorage.getItem(chapter+'Price'));

    totalPrice = totalPrice - price;
    $('.itemTotal').html(totalPrice);
    console.log("totalPrice = " + totalPrice);
   

    $('.'+chapter+'Row').hide();

    localStorage.removeItem('chapterName');
    localStorage.removeItem(chapter);
    y--;
    localStorage.setItem('numOfItems', y);
    $('.itemsNum').html(y);    
    
});



/*-------------------------------------------------------------------------------------------------------------------------------------------*/

//numbering the shopping cart items:
for (i=1; i<=y; i++){
    $('tbody tr:nth-child('+i+') th').append(i);
}


//insert cart total price:
$('.itemTotal').append(totalPrice);






/*-------------------------------------------------------------------------------------------------------------------------------------------*/

/*testings:*/

console.log("Empty Cart = " + !cartNotEmpty);
console.log("items = " + y);
console.log("chapterName = " + chapterName);



// localStorage.removeItem('cartNotEmpty');
// localStorage.removeItem('numOfItems');
// localStorage.removeItem('chapterName');
// localStorage.removeItem('wordProblems');
// localStorage.removeItem('inequation');
// localStorage.removeItem('wordProblemsPrice');
// localStorage.removeItem('inequationPrice');
// localStorage.removeItem('wordProblemsItem');
// localStorage.removeItem('inequationItem');



