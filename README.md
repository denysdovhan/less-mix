LESS-Mix
===========

In English
----------
__LESS-Mix__ - is a functional, powerful, convenient and easy at the same time (_only __7.7kb___) library LESS-mixins. Despite its small size, the library has all the necessary functions. Library is cross-browser, so you can safely, quickly and effectively work.

### How to Install ###
1. Download file "lessmix.less".
2. Place the it in the folder with your project.
3. Include the library in your LESS-file at the beginning of the document, the command: `@ import" elements.less "`;
 
### How to use ###
The library includes 27 mixins divided into 8 sections:

* #### Size and Position ####
    * `.size(@width, @height)` - a quick way to set the size of the element. `@width` - width of the element. `@height` - the height of the element.
    * `.square(@size)` - specifies the size the square element. `@size` - the size of the element.
    * `.center` - alignment block in the center.
* #### Gradient Tools ####
    * `.v-gradient(@startColor, @stopColor` - vertical gradient. `@ startColor` - color of the gradient origin, `@ stopColor` - the color of the gradient stop. The colors are approved from the top down. The background color for browsers that do not supported gradients calculated automatically.
    * `.h-gradient(@startColor, @stopColor)` - horizontal gradient. `@startColor` - color of the gradient origin, `@stopColor` - the color of the gradient stop. The colors are approved from left to right. The background color for browsers that do not supported gradients calculated automatically.
    * `.d-gradient(@startColor, @stopColor, @deg)` - gradient with arbitrary slope. `@startColor` - color of the gradient origin, `@stopColor` - the color of the gradient stop, `@deg` - angle (_default: __ 45deg___). The background color for browsers that do not supported gradients calculated automatically.
    * `.r-gradient(@innerColor, @outerColor)` - radial gradient. `@innerColor` - the color inside, `@outerColor` - the exterior color of the gradient. The background color for browsers that do not supported gradients calculated automatically.
* #### Border Radius Tools ####
    * `.rounded(@radius)` - set rounded corners. `@radius` - the value of the radius.
    * `.border-radius(@topRight, @bottomRight, @bottomLeft, @topLeft)` - set rounded corners for each corner individually.     Values are set in clockwise from the upper right corner. The default value - 0.
* #### Shadow Tools ####
    * `.box-shadow(@shadow)` - sets the shade. `@shadow` - line parameters narimer `inset 0 1px 2px # 666`. To specify multiple values shadows, use the escape character `~`, for example `~" inset 0 1px 2px # 666 ", 2px 1px 2px # 000" `.
    * `.outer-shadow(@x, @y, @blur, @alpha)` - adds to the block shade. `@x` and `@y` indentation axes, `@blur` - force blur, `@alpha` - transparency of blur (_default: __ 0 1px 2px 0.1___).
    * `.inner-shadow(@x, @y, @blur, @alpha)` - adds an inner shadow. `@x` and `@y` indentation axes, `@blur` - force blur, `@alpha` - force shadow (_default: __ 0 1px 2px 0.4___).
* #### Transition Tools ####
    * `.transition(@transition)` - sets animation parameters. To specify multiple values, use the escape character `~` as a property `.box-shadow()`.
    * `.transition-all(@duration, @delay)` - sets the animation of all the properties. `@duration` - animation time in seconds (_default: __0.2s__ _), `@delay` - type of animation (_default: __ ease___).
    * `.transition-duration(@transition-duration)` - sets animation time in seconds.
    * `.transition-delay(@transition-delay)` - sets the type of animation.
* #### Transform Tools ####
    * `.transform(@transform)` - sets the value of the transformation. Accepts any value, but it is advisable to use the escape character `~` as in `.box-shadow()`.
    * `.rotate(@deg)` - rotates the element indicating the number of degrees in the `@deg`.
    * `.scale(@ratio)` - increases the element of proportion.
    * `.translate(@x; @y)` - takes the element using the coordinates of `@x` and `@y`.
* #### More Tools ####
    * `.background-clip(@argument)` - defines how the background color or background image should be displayed under the borders. (_default: __padding-box___).
    * `.box-sizing(@sizing)` - used to change the algorithm for calculating the width and height of the element. (_default: __border-box___)
    * `.user-select(@select)` - allows you to disable text selection. For example, the menu items. (_default: __none___)
    * `.opacity(@opacity)` - adds transparency to the element. 0 - fully transparent, 1 - opaque. (_default: __0.5___)
* #### Develop and Testing Tools ####
    * `.hide` - hides the block. (___display: none___)
    * `.hide-text` - allows you to hide all the text in the block.
    * `.test-border` - a quick way to block a black border of 1 pixel. (___border: 1px solid # 000___)
    * `.reset-filter` - property allows you to disable the IE-filters.
    


На Русском
-----------
__LESS-Mix__ - это функциональная, мощная, удобная и одновременно легкая (_всего 7,7 кб_) библиотека LESS-примешаний. Несмотря на свой маленький размер, библиотека обладает всем необходимым функционалом. Библиотека кроссбраузерная, поэтому вы можете спокойно, быстро и эффективно работать.

### Как установить ###
1. Скачать файл "lessmix.less".
2. Поместите его в папке с вашим проектом.
3. Включить библиотеку в ваш LESS-файл, в начале документа, командой: `@import "elements.less";`

### Как использовать ###
Библиотека включает 27 примешаний разбитых на 8 секций:

* #### Size and Position ####
    * `.size(@width, @height)` - быстрый способ задать размер элемента. `@width` - ширина элемента. `@height` - высота элемента.
    * `.square(@size)` - задает размер квадратного элемента. `@size` - размер элемента.
    * `.center` - выравнивание блока по центру.
* #### Gradient Tools ####
    * `.v-gradient(@startColor, @stopColor` - вертикальный градиент. `@startColor` - цвет начала градиента, `@stopColor` - цвет остановки градиента. Цвета применяються сверху вниз. Фоновый цвет для браузеров которые не поддержывают градиенты исчисляется автоматически.
    * `.h-gradient(@startColor, @stopColor)` - горизонтальный градиент. `@startColor` - цвет начала градиента, `@stopColor` - цвет остановки градиента. Цвета применяються слева направо. Фоновый цвет для браузеров которые не поддержывают градиенты исчисляется автоматически.
    * `.d-gradient(@startColor, @stopColor, @deg)`- градиент с произвольным углом наклона. `@startColor` - цвет начала градиента, `@stopColor` - цвет остановки градиента, `@deg` - угол наклона (_по-умолчанию: __45deg___). Фоновый цвет для браузеров которые не поддержывают градиенты исчисляется автоматически.
    * `.r-gradient(@innerColor, @outerColor)` - радиальный градиент. `@innerColor` - внутрений цвет, `@outerColor` - внешний цвет градиента. Фоновый цвет для браузеров которые не поддержывают градиенты исчисляется автоматически.
* #### Border Radius Tools ####
    * `.rounded(@radius)` - устанавливает скругленные углы. `@radius` - значение радиуса.
    * `.border-radius(@topRight, @bottomRight, @bottomLeft, @topLeft)` - устанавливает скругленые углы для каждого угла индивидуально. Значения задаются за часовой стрелкой начиная от верхнего правого угла. Значение по-умолчанию - 0.
* #### Shadow Tools ####
    * `.box-shadow(@shadow)` - устанавливает тень. `@shadow` - строка параметров, наример `inset 0 1px 2px #666`. Чтобы задать несколько значений теней (мультитень) используйте символ екранирования `~`, например `~"inset 0 1px 2px #666", 2px 1px 2px #000"`.
    * `.outer-shadow(@x, @y, @blur, @alpha)` - добавляет к блоку тень. `@x` и `@y` отступы осей, `@blur` - сила размытия, `@alpha` - прозрачнось размытия (_по-умолчанию: __0 1px 2px 0.1___). 
    * `.inner-shadow(@x, @y, @blur, @alpha)` - добавляет внутренею тень. `@x` и `@y` отступы осей, `@blur` - сила размытия, `@alpha` - сила тени (_по-умолчанию: __0 1px 2px 0.4___).
* #### Transition Tools ####
    * `.transition(@transition)` - устанавливает параметры анимации. Чтобы задать несколько значений используйте символ экранирования `~` как у свойства `.box-shadow()`.
    * `.transition-all(@duration, @delay)` - устанавливает анимацию всех свойств. `@duration` - время анимации в секундах (_по-умолчанию: __0.2s__ _), @`delay` - тип анимацыи (_по-умолчанию: __ease___).
    * `.transition-duration(@transition-duration)` - устанавливает времья анимации в секундах.
    * `.transition-delay(@transition-delay)` - устанавливает тип анимации. 
* #### Transform Tools ####
    * `.transform(@transform)` - задает значения трансформации. Принимает любые значения, но желательно использовать символ экранирования `~`, как у `.box-shadow()`.
    * `.rotate(@deg)` - вращает элемент на указаное количество градусов `@deg`.
    * `.scale(@ratio)` - увеличивает элемент за пропорциями.
    * `.translate(@x; @y)` - переводит элемент используя заданые координаты `@x` и `@y`.
* #### More Tools ####
    * `.background-clip(@argument)` - определяет, как цвет фона или фоновая картинка должна выводиться под границами. (_по-умолчанию: __padding-box___)
    * `.box-sizing(@sizing)` - применяется для изменения алгоритма расчета ширины и высоты элемента. (_по-умолчанию: __border-box___)
    * `.user-select(@select)` - позволяет отключить выделение текста. Например, в пунктах меню. (_по-умолчанию: __none___).
    * `.opacity(@opacity)` - добавляет прозрачность к элементу. 0 - полностью прозрачный, 1 - непрозрачный. (_по-умолчанию: __0.5___).
* #### Develop and Testing Tools ####
    * `.hide` - прячет блок. (___display: none___)
    * `.hide-text` - позволяет спрятать весь текст в блоке.
    * `.test-border` - быстрый способ дать блоку чёрную рамку в 1 пиксель. (___border: 1px solid #000___)
    * `.reset-filter` - свойство позволяет отключить IE-фильтры.