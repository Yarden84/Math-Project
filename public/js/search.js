var inequationChapters = ['אי שוויון עם ערך מוחלט', 'אי שוויון עם ערך מוחלט - חזרה ותזכורת', 'אי שוויון עם ערך מוחלט', 'אי שיוויון עם רב איבר בערך מוחלט'];
var wordProblemsChapters = ['בעיות מילוליות', 'בעיות מילוליות - רקע', 'תרגול נעלמים ושליפת נתונים', 'הצבת משוואות ופתרון בעיות מילוליות'];
var inductionChapters = ['אינדוקציה מתמטית', 'אינדוקציה מתמטית - רקע', 'אינדוקציה של סדרות', 'אינדוקציה עם הוספת מספר איברים', 'אינדוקציה עם איבר ראשון משתנה',
 'אינדוקציה של איברים זוגיים או אי זוגיים', 'אינדוקציה של התלכדות סדרות', 'אינדוקציה של אי שוויון', 'אינדוקציה של תכונות התחלקות'];
var calculusChapters = ['חשבון דיפרנציאלי ואינטגרלי', 'חשבון דיפרנציאלי', 'חשבון דיפרנציאלי - רקע', 'פונקציות-חזרה', 'על סימטריה ומתמטיקה', 'שיפוע של עקום', 
'מקסימום ומינימום מקומי ומוחלט', 'חקירת פונקציה ושרטוט', 'רציפות של פונקציה', 'נגזרת שנייה', 'נקודות אי רציפות ואסימפטוטות', 
'ניתוח אסימפטוטות אופקיות', 'חקירת פונקציה עם פרמטרים', 'מציאת משיקים לפונקציה', 'הנורמל', 'משיק לפונקציה דרך נקודה מחוץ לפונקציה', 
'בעיות מקסימום ומינימום', 'נגזרת של פונקציה סתומה', 'חשבון אינטגרלי', 'מציאת פונקציה קדימה', 'שימוש באינטגרל למציאת שטחים', 'נפח גוף סיבוב', 
'תרגול כללי'];
var trigChapters = ['טריגונומטריה', 'טריגונומטריה - רקע', 'הרדיאן', 'פונקציות טריגונומטריות', 'הגדרות, זהויות ומשוואות', 'חקירת הפונקציה הטריגונומטרית',
 'משיק ונורמל', 'מקסימום ומינימום מקומי מוחלט', 'נגזרת של פונקציה סתומה', 'אינטגרל של פונקציה טריגונומטרית',
  'טריגונומטריה של מצולעים ושל גופים מרחביים', 'משפט הסינוסים', 'משפט הקוסינוסים', 'טריגונומטריה במרחב', 'בעיות ערך קיצון בטריגונומטריה'];

var allChapters = [inequationChapters, wordProblemsChapters, inductionChapters, calculusChapters, trigChapters];

var chapterLink = ['inequation.html', 'wordProblems.html', 'induction.html', 'calculus.html', 'trig.html'];


$('#searchResult').hide();

$('#searchLine').val('');


$('body').click(function(e){
    if (e.target.id != "searchResult"){
        $('#searchResult').hide();
    }
});



$('#searchLine').keyup(function(){

    $('#searchResult').empty();

    $('#searchResult').show();


    localStorage.setItem('search', $('#searchLine').val());

    var indexStr = localStorage.getItem('search');

    var textFound = false;

    if (indexStr == ''){
        $('#searchResult').hide();
    }

    for(j=0; j<allChapters.length; j++){
        for (i=0; i<allChapters[j].length; i++){
            textFound = allChapters[j][i].includes(indexStr); 
            if (textFound){
                var title = document.title;
                if (title == "להבין מתמטיקה - עמוד ראשי"){
                    $('#searchResult').append('<div class="link"><a href="view/'+chapterLink[j]+'#arr'+i+'" class="searchLink" id="'+j+'-'+i+'">'+allChapters[j][i]+'</a></div>');
                }
                else{
                    $('#searchResult').append('<div class="link"><a href="'+chapterLink[j]+'#arr'+i+'" class="searchLink" id="'+j+'-'+i+'">'+allChapters[j][i]+'</a></div>');
                }
            }
        }
    }


    $('.searchLink').click(function(e){
        var chapter = e.target.id;
        var j = chapter.substring(0,1);
        var i = chapter.substring(2);
        localStorage.setItem('j', j);
        localStorage.setItem('i', i);
        // alert('j= '+j+' i = '+i);
        if(j==1 || j==2 || j==4){
            if (i==1 || i==2){
                if (i==1){
                    localStorage.setItem('indexBtn1', true);
                }
                if (i==2){
                    localStorage.setItem('indexBtn2', true);
                }
            }
        }
        else{
            if (j==0){
                if (i==1){
                    localStorage.setItem('indexBtn1', true); 
                }
            }
            else{
                if (i==2 || i==3){
                    if (i==2){
                        localStorage.setItem('indexBtn1', true);
                    }
                    if (i==3){
                        localStorage.setItem('indexBtn2', true);
                    }
                }
            }
        }
    });
    
});







/*----------------------------------------------------------------------------------------------------------------*/
// localStorage resets:

// localStorage.removeItem('searchCalculus');
// localStorage.removeItem('search');
// localStorage.removeItem('calculusChapters');

// localStorage.removeItem('j');
// localStorage.removeItem('i');
// localStorage.removeItem('test');
// localStorage.removeItem('link');
