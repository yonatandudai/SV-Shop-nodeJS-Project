**פרוייקט node+js**

קיבלתם משימה ליצור אתר קניות, המאפשר ללקוח להתחבר באמצעות מייל וסיסמא, לבחור מרשימת המוצרים את המוצרים שהוא מעוניין לרכוש, ולהציג את סיכום הקניה שהוא בחר בעמוד התשלום.

עליכם ליצור מראש מאגר מידע בשם svshop שמכיל 3 collection-ים:

1.  רשימת משתמשים. – כל המשתמשים שנרשמים למערכת.
2.  רשימת מוצרים (מוכנים מראש).
3.  הזמנות בהמתנה.

עמוד ראשי (ערוץ '/'):![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8RAwAIwgLhJ3phgQAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8pAwAIyALkwQv77QAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//82AwAItALazBebVQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8eAwAIugLdpL9UBwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8FAwAIzgLnVJKFDQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8ZAwAIygLlHeu6RwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//85AwAIzALmT9Ku0wAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8VAwAI0gLpwchu0AAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//81AwAI1ALqk/F6RAAAAABJRU5ErkJggg==)

Sv-shop

רק לקוחות רשומים יוכלו להתחבר למערכת, במידה ולקוח לא רשום, המשתמש ישאר באותו עמוד, או שתקפוץ לו הודעת שגיאה (לבחירתכם).

עמוד הרשמה (/signup):![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//86AwAIrALWEDRPwgAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8JAwAIxgLjmkx62AAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8hAwAIwALg+5ogKwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8+AwAIvALe9oZAkwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8OAwAItgLbIxiUmAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8fAwAI+gL9STzyuwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8PAwAI9gL7zpsyJAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8XAwAI8gL5c60pfQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8HAwAI7gL35vfCoAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8/AwAI/AL+GwXmLwAAAABJRU5ErkJggg==)

אם מייל המשתמש תפוס, תוצג alert בדפדפן של הלקוח והמשתמש לא ירשם במערכת, במידה והמייל פנוי,

וכל השדות מולאו, הפרטים ירשמו בתוך הdb והמשתמש יועבר לעמוד ההתחברות. שם יוכל להכניס את הפרטים ולהתחבר למערכת, ולאחר מכן הוא יועבר לעמוד בחירת המוצרים.

עמוד בחירת המוצרים (:(‘/products’![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8jAwAI4ALwSf9nhgAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8DAwAI3gLvJb+bdQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//87AwAI7AL2/bfpfgAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8bAwAI6gL1r4796gAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8rAwAI6AL0c268QAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8LAwAI5gLzKCk9dQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//89AwAI3ALuqWChggAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8dAwAI2gLt+1m1FgAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8tAwAI2ALsJ7n0vAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8NAwAI1gLrfP51iQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8mAwAIsALYQs7OawAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8GAwAIrgLXC3RkHAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8aAwAIqgLVQg1bVgAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8xAwAIxALidUN1FQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8BAwAIvgLf3C5x0AAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8uAwAIuALceF8VrQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8WAwAIsgLZni6PwQAAAABJRU5ErkJggg==)

בעמוד בחירת המוצרים, יופיעו כל המוצרים השמורים במאגר המידע, **כל אחד בדיב נפרד**, עם המחיר ושם המוצר, לחיצה על המוצר תוסיף את המוצר למערך המוצרים שנבחרו.

בראש העמוד יש כפתור select עם שני אפשרויות מיון: לפי שם או לפי מחיר, בחירה של אחת האפשרויות ולחיצה על כפתור "מיון" תמיין מחדש את המוצרים לפי הסדר שנבחר.

**בונוס: אפשר להוסיף אינפוט של טקסט, ומציאת מוצרים לפי התווים של השמות שלהם: לדוגמא: כתיבת ‘ba’, תציג את כל המוצרים שקיימת בהם המחרוזת ‘ba’.**

לחיצה על כפתור קניה, תעביר את המשתמש לעמוד הרכישה (‘/buy’):

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8vAwAI+AL8ldyzEQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//83AwAI9AL6IZQ96QAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8nAwAI8AL4r01o1wAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8zAwAI5ALyxyYyuAAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8TAwAI4gLxlR8mLAAAAABJRU5ErkJggg==)

בעמוד הרכישה יופיעו כמות המוצרים שנבחרו, והמחיר הכולל של כל ההזמנה.

לחיצה על אישור הרכישה תשמור את רשימת המוצרים שנבחרו בcollection נפרד בdb יחד עם שם המשתמש שהזמין את המוצרים.

לאחר מכן היא תנתק את הלקוח מהמערכת.

**קיים ערוץ נוסף (‘/all’):**

**שמציג רשימה של כל ההזמנות שנרשמו במערכת, גישה לערוץ הזה אפשרית רק במידה ומוסיפים בurl**

**Query: admin=true. (שימוש בmiddleware).**

**בכל נסיון אחר של התחברות לעמוד, תוחזר כותרת error וסטאטוס 400.**