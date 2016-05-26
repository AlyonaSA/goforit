## Предназначение ##

Подключен минимльный набор Grunt тасков, который должен использоваться, а именно:

* компиляция CSS, используем [grunt-sass](https://github.com/sindresorhus/grunt-sass);
* пост обработка CSS - [grunt-postcss](https://github.com/nDmitry/grunt-postcss);
* минификация изображений - [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin);
* создание спрайтов - [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith);
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) для автоматического отслеживания измененных изображений и css файлов;

(В дальнейшем будет дополнение)

## Зависимость ##
* Node.js (https://nodejs.org/en/)
* Grunt Cli (http://gruntjs.com/getting-started)

## Использование ##
Совет по использованию, создать локально клон данного проекта, перед использованием делать пулл из мастера, для поддержания актуальности, и уже из этой директории копировать структуру в нужные проекты.  
После подключения структуры к проекту в файле **package.json** Указать имя проекта.  
и запустить команду **npm install** для установки всех необходимых грант тасков.