LESS-Mix ![derpecated](https://img.shields.io/badge/status-deprecated-red.svg?style=flat-square)
===========

> :warning: **less-mix** is currently deprecated package. There are many better tools. Try [Autoprefixer](https://github.com/postcss/autoprefixer) for example.

In English
----------
__LESS-Mix__ - is a functional, powerful, convenient and easy at the same time library LESS-mixins. Despite its small size, the library has all the necessary functions. Library is cross-browser, so you can safely, quickly and effectively work.

### How to Install ###
1. Download file "lessmix.less".
2. Place the it in the folder with your project.
3. Include the library in your LESS-file at the beginning of the document, the command: `@import "lessmix.less"`;

### How to use ###
The library includes 27 mixins divided into 8 sections:

* __Size and Position__
    * `.size(@width, @height)` - a quick way to set the size of the element. `@width` - width of the element. `@height` - the height of the element.
    * `.square(@size)` - specifies the size the square element. `@size` - the size of the element.
    * `.center` - alignment block in the center.
* __Gradient Tools__
    * `#gradient>.vertical(@startColor, @stopColor)` - vertical gradient. `@startColor` - color of the gradient origin, `@stopColor` - the color of the gradient stop. The colors are approved from the top down. The background color for browsers that do not supported gradients calculated automatically.
    * `#gradient>.horizontal(@startColor, @stopColor)` - horizontal gradient. `@startColor` - color of the gradient origin, `@stopColor` - the color of the gradient stop. The colors are approved from left to right. The background color for browsers that do not supported gradients calculated automatically.
    * `#gradient>.directional(@startColor, @stopColor, @deg)` - gradient with arbitrary slope. `@startColor` - color of the gradient origin, `@stopColor` - the color of the gradient stop, `@deg` - angle (default: _45deg_). The background color for browsers that do not supported gradients calculated automatically.
    * `#gradient>.radial(@innerColor, @outerColor)` - radial gradient. `@innerColor` - the color inside, `@outerColor` - the exterior color of the gradient. The background color for browsers that do not supported gradients calculated automatically.
* __Border Radius Tools__
    * `.rounded(@radius)` - set rounded corners. `@radius` - the value of the radius.
    * `.border-radius(@topRight, @bottomRight, @bottomLeft, @topLeft)` - set rounded corners for each corner individually.     Values are set in clockwise from the upper right corner. The default value - 0.
* __Shadow Tools__
    * `.box-shadow(@shadow)` - sets the shade. `@shadow` - line parameters for example `inset 0 1px 2px # 666`. To specify multiple values shadows, use the escape character `~`, for example `~" inset 0 1px 2px # 666 ", 2px 1px 2px # 000" `.
    * `.outer-shadow(@x, @y, @blur, @alpha)` - adds to the block shade. `@x` and `@y` indentation axes, `@blur` - force blur, `@alpha` - transparency of blur (default: _ 0 1px 2px 0.1_).
    * `.inner-shadow(@x, @y, @blur, @alpha)` - adds an inner shadow. `@x` and `@y` indentation axes, `@blur` - force blur, `@alpha` - force shadow (default: _ 0 1px 2px 0.4_).
* __Transition Tools__
    * `.transition(@transition)` - sets animation parameters. To specify multiple values, use the escape character `~` as a property `.box-shadow()`.
    * `.transition-all(@duration, @delay)` - sets the animation of all the properties. `@duration` - animation time in seconds (default: _0.2s_), `@delay` - type of animation (default: _ease_).
    * `.transition-duration(@transition-duration)` - sets animation time in seconds.
    * `.transition-delay(@transition-delay)` - sets the type of animation.
* __Transform Tools__
    * `.transform(@transform)` - sets the value of the transformation. Accepts any value, but it is advisable to use the escape character `~` as in `.box-shadow()`.
    * `.rotate(@deg)` - rotates the element indicating the number of degrees in the `@deg`.
    * `.scale(@ratio)` - increases the element of proportion.
    * `.translate(@x; @y)` - takes the element using the coordinates of `@x` and `@y`.
* __More Tools__
    * `.background-clip(@argument)` - defines how the background color or background image should be displayed under the borders. (default: _padding-box_).
    * `.box-sizing(@sizing)` - used to change the algorithm for calculating the width and height of the element. (default: _border-box_)
    * `.user-select(@select)` - allows you to disable text selection. For example, the menu items. (default: _none_)
    * `.opacity(@opacity)` - adds transparency to the element. 0 - fully transparent, 1 - opaque. (default: _0.5_)
    * `.inline-block()` - cross-browser analog `display: inline-block;`
* __Develop and Testing Tools__
    * `.hide` - hides the block. ( _display_ : _none_)
    * `.hide-text` - allows you to hide all the text in the block.
    * `.test-border` - a quick way to block a black border of 1 pixel.
    * `.reset-filter` - property allows you to disable the IE-filters.

### Project ###

The project created an enthusiast for all web designers, designed to simplify the work with the frequently used properties and make the code more readable and convenient.
The project __LESS-Mix__ - is an open-source code,and is based on the draft of the dynamic stylistic markup language [LESS](http://lesscss.org/) from [Alexis Sellier](http://cloudhead.io/). I will be grateful for the positive feedback well as for criticizing.
Waiting for your feedbacks on the: [email@denysdovhan.com](mailto:email@denysdovhan.com)

На Русском
-----------
__LESS-Mix__ - это функциональная, мощная, удобная и одновременно легкая (всего __7,7 кб__) библиотека LESS-примешаний. Несмотря на свой маленький размер, библиотека обладает всем необходимым функционалом. Библиотека кроссбраузерная, поэтому вы можете спокойно, быстро и эффективно работать.

### Как установить ###
1. Скачать файл "lessmix.less".
2. Поместите его в папке с вашим проектом.
3. Включить библиотеку в ваш LESS-файл, в начале документа, командой: `@import "lessmix.less";`

### Как использовать ###
Библиотека включает 27 примешаний разбитых на 8 секций:

* __Size and Position__
    * `.size(@width, @height)` - быстрый способ задать размер элемента. `@width` - ширина элемента. `@height` - высота элемента.
    * `.square(@size)` - задает размер квадратного элемента. `@size` - размер элемента.
    * `.center` - выравнивание блока по центру.
* __Gradient Tools__
    * `#gradient>.vertical(@startColor, @stopColor)` - вертикальный градиент. `@startColor` - цвет начала градиента, `@stopColor` - цвет остановки градиента. Цвета применяються сверху вниз. Фоновый цвет для браузеров которые не поддержывают градиенты исчисляется автоматически.
    * `#gradient>.horizontal(@startColor, @stopColor)` - горизонтальный градиент. `@startColor` - цвет начала градиента, `@stopColor` - цвет остановки градиента. Цвета применяються слева направо. Фоновый цвет для браузеров которые не поддержывают градиенты исчисляется автоматически.
    * `#gradient>.directional(@startColor, @stopColor, @deg)`- градиент с произвольным углом наклона. `@startColor` - цвет начала градиента, `@stopColor` - цвет остановки градиента, `@deg` - угол наклона (по-умолчанию: _45deg_). Фоновый цвет для браузеров которые не поддержывают градиенты исчисляется автоматически.
    * `#gradient>.radial(@innerColor, @outerColor)` - радиальный градиент. `@innerColor` - внутрений цвет, `@outerColor` - внешний цвет градиента. Фоновый цвет для браузеров которые не поддержывают градиенты исчисляется автоматически.
* __Border Radius Tools__
    * `.rounded(@radius)` - устанавливает скругленные углы. `@radius` - значение радиуса.
    * `.border-radius(@topRight, @bottomRight, @bottomLeft, @topLeft)` - устанавливает скругленые углы для каждого угла индивидуально. Значения задаются за часовой стрелкой начиная от верхнего правого угла. Значение по-умолчанию - 0.
* __Shadow Tools__
    * `.box-shadow(@shadow)` - устанавливает тень. `@shadow` - строка параметров, например `inset 0 1px 2px #666`. Чтобы задать несколько значений теней (мультитень) используйте символ екранирования `~`, например `~"inset 0 1px 2px #666", 2px 1px 2px #000"`.
    * `.outer-shadow(@x, @y, @blur, @alpha)` - добавляет к блоку тень. `@x` и `@y` отступы осей, `@blur` - сила размытия, `@alpha` - прозрачнось размытия (по-умолчанию: _0 1px 2px 0.1_).
    * `.inner-shadow(@x, @y, @blur, @alpha)` - добавляет внутренею тень. `@x` и `@y` отступы осей, `@blur` - сила размытия, `@alpha` - сила тени (по-умолчанию: _0 1px 2px 0.4_).
* __Transition Tools__
    * `.transition(@transition)` - устанавливает параметры анимации. Чтобы задать несколько значений используйте символ экранирования `~` как у свойства `.box-shadow()`.
    * `.transition-all(@duration, @delay)` - устанавливает анимацию всех свойств. `@duration` - время анимации в секундах (по-умолчанию: _0.2s_), @`delay` - тип анимацыи (по-умолчанию: _ease_).
    * `.transition-duration(@transition-duration)` - устанавливает времья анимации в секундах.
    * `.transition-delay(@transition-delay)` - устанавливает тип анимации.
* __Transform Tools__
    * `.transform(@transform)` - задает значения трансформации. Принимает любые значения, но желательно использовать символ экранирования `~`, как у `.box-shadow()`.
    * `.rotate(@deg)` - вращает элемент на указаное количество градусов `@deg`.
    * `.scale(@ratio)` - увеличивает элемент за пропорциями.
    * `.translate(@x; @y)` - переводит элемент используя заданые координаты `@x` и `@y`.
* __More Tools__
    * `.background-clip(@argument)` - определяет, как цвет фона или фоновая картинка должна выводиться под границами. (по-умолчанию: _padding-box_)
    * `.box-sizing(@sizing)` - применяется для изменения алгоритма расчета ширины и высоты элемента. (по-умолчанию: _border-box_)
    * `.user-select(@select)` - позволяет отключить выделение текста. Например, в пунктах меню. (по-умолчанию: _none_).
    * `.opacity(@opacity)` - добавляет прозрачность к элементу. 0 - полностью прозрачный, 1 - непрозрачный. (по-умолчанию: _0.5_).
    * `.inline-block()` - кросбрауезерный аналог `display: inline-block;`
* __Develop and Testing Tools__
    * `.hide()` - прячет блок. ( _display_ : _none_).
    * `.hide-text()` - позволяет спрятать весь текст в блоке.
    * `.test-border()` - быстрый способ дать блоку чёрную рамку в 1 пиксель.
    * `.reset-filter()` - свойство позволяет отключить IE-фильтры.
