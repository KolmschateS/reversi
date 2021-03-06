const {src, dest} = require('gulp');
const order = require('gulp-order');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const fn = function(filesJs, filesJsOrder, serverPath)
{  
    return function()
    {
        return src(filesJs)
                .pipe(order(filesJsOrder, {base: './'}))
                .pipe(concat('app.js'))
                .pipe(babel({
                    presets: ['@babel/preset-env']
                }))
                .pipe(dest('./dist/js'))
                .pipe(dest(`${serverPath}/js`));
    }
    
};

exports.js = fn;