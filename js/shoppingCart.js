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
//setting items for shopping cart:

var chapters = ['inequation', 'wordProblems', 'induction', 'calculus', 'trig'];


if (chapterName === 'inequation'){
    localStorage.setItem(chapterName, true);
    localStorage.setItem(chapterName+'Price', 10);
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
    localStorage.setItem(chapterName+'Price', 10);
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

if (chapterName === 'induction'){
    localStorage.setItem(chapterName, true);
    localStorage.setItem(chapterName+'Price', 10);
    localStorage.setItem(chapterName+'Item', `<tr class="inductionRow">
                                                <th class="text-center" scope="row"></th>
                                                <td class="item">
                                                    <p><strong><span style="font-size: 17px;">אינדוקציה מתמטית</span></strong></p>
                                                    <ul>
                                                        <li>רקע</li>
                                                        <li>אינדוקציה של סדרות</li>
                                                        <li>אינדוקציה עם הוספת מספר איברים</li>
                                                        <li>אינדוקציה עם איבר ראשון משתנה</li>
                                                        <li>אינדוקציה של איברים זוגיים או אי זוגיים</li>
                                                        <li>אינדוקציה של התלכדות סדרות</li>
                                                        <li>אינדוקציה של אי שוויון</li>
                                                        <li>אינדוקציה של תכונות התחלקות</li>
                                                    </ul>
                                                    <button class="btn btn-link removeBtn" id="induction">הסר</button>
                                                </td>
                                                <td class="text-center inductionPrice"></td>               
                                            </tr>`);
}

if (chapterName === 'calculus'){
    localStorage.setItem(chapterName, true);
    localStorage.setItem(chapterName+'Price', 15);
    localStorage.setItem(chapterName+'Item', `<tr class="calculusRow">
                                                <th class="text-center" scope="row"></th>
                                                <td class="item">
                                                    <p><strong><span style="font-size: 17px;">חשבון דיפרנציאלי ואינטגרלי</span></strong></p>
                                                    <ul>
                                                        <ul>
                                                            <strong>חשבון דיפרנציאלי</strong>
                                                            <li>רקע</li>
                                                            <li>פונקציות-חזרה</li>
                                                            <li>על סימטריה ומתמטיקה</li>
                                                            <li>שיפוע של עקום</li>
                                                            <li>מקסימום ומינימום מקומים ומוחלט</li>
                                                            <li>חקירת פונקציה ושרטוט</li>
                                                            <li>רציפות של פונקציה</li>
                                                            <li>נגזרת שנייה</li>
                                                            <li>נקודות אי רציפות ואסימפטוטות</li>
                                                            <li>ניתוח אסימפטוטות אופקיות</li>
                                                            <li>חקירת פונקציה עם פרמטרים</li>
                                                            <li>מציאת משיקים לפונקציה</li>
                                                            <li>הנורמל</li>
                                                            <li>משיק לפונקציה דרך נקודה מחוץ לפונקציה</li>
                                                            <li>בעיות מקסימום ומינימום</li>
                                                            <li>נגזרת של פונקציה סתומה</li>
                                                        </ul>  
                                                        <br>
                                                        <ul>
                                                            <strong>חשבון אינטגרלי</strong>
                                                            <li>מציאת פונקציה קדימה</li>
                                                            <li>שימוש באינטגרל למציאת שטחים</li>
                                                            <li>נפח גוף סיבוב</li>
                                                        </ul>  
                                                    </ul>
                                                    <button class="btn btn-link removeBtn" id="calculus">הסר</button>
                                                </td>
                                                <td class="text-center calculusPrice"></td>               
                                            </tr>`);
}

if (chapterName === 'trig'){
    localStorage.setItem(chapterName, true);
    localStorage.setItem(chapterName+'Price', 15);
    localStorage.setItem(chapterName+'Item', `<tr class="trigRow">
                                                <th class="text-center" scope="row"></th>
                                                <td class="item">
                                                    <p><strong><span style="font-size: 17px;">טריגונומטריה</span></strong></p>
                                                    <ul>
                                                            <ul>
                                                                <li>רקע</li>
                                                                <li>הרדיאן</li>
                                                            </ul>  
                                                            <br>                                                    
                                                            <ul>
                                                                <strong> פונקציות טריגונומטריות</strong>
                                                                <li>הגדרות, זהויות ומשוואות</li>
                                                                <li>חקירת הפונקציה הטריגונומטרית</li>
                                                                <li>משיק ונורמל</li>
                                                                <li>מקסימום ומינימום מקומי ומוחלט</li>
                                                                <li>נגזרת של פונקציה סתומה</li>
                                                                <li>אינטגרל של פונקציה טריגונומטרית</li>
                                                            </ul>  
                                                            <br>
                                                            <ul>
                                                                <li>טריגונומטריה של מצולעים ושל גופים מרחביים</li>
                                                                <li>משפט הסינוסים</li>
                                                                <li>משפט הקוסינוסים</li>
                                                                <li>טריגונומטריה במרחב</li>
                                                                <li>בעיות ערך קיצון בטריגונומטריה</li>
                                                            </ul>  
                                                        
                                                    </ul>
                                                    <button class="btn btn-link removeBtn" id="trig">הסר</button>
                                                </td>
                                                <td class="text-center trigPrice"></td>               
                                            </tr>`);
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/


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
    $('tbody tr:nth-child('+i+') th').html(i);
}


//insert cart total price:
$('.itemTotal').append(totalPrice);








/*-------------------------------------------------------------------------------------------------------------------------------------------*/

/*testings:*/
// localStorage.setItem('numOfItems', y);
// y=localStorage.getItem('numOfItems');
console.log("Empty Cart = " + !cartNotEmpty);
console.log("items = " + y);
console.log("chapterName = " + chapterName);
console.log("totalPrice = " + totalPrice);



// localStorage.removeItem('cartNotEmpty');
// localStorage.removeItem('numOfItems');
// localStorage.removeItem('chapterName');
// localStorage.removeItem('wordProblems');
// localStorage.removeItem('inequation');
// localStorage.removeItem('wordProblemsPrice');
// localStorage.removeItem('inequationPrice');
// localStorage.removeItem('wordProblemsItem');
// localStorage.removeItem('inequationItem');
// localStorage.removeItem('trigPrice');
// localStorage.removeItem('trigItem');
// localStorage.removeItem('inductionPrice');
// localStorage.removeItem('inductionItem');
// localStorage.removeItem('calculusPrice');
// localStorage.removeItem('calculusItem');


