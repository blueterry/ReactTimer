//webpack ./public/app.js ./public/bundle.js

var webpack = require('webpack');

module.exports ={
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':        'jquery',
            'jQuery':   'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias:{
            //Greeter: 'public/components/Greeter.jsx',
            Main:           'app/components/Main.jsx',
            Nav:            'app/components/Nav.jsx',
            Timer:          'app/components/Timer.jsx',      
            Counter:        'app/components/Counter.jsx',      
            appStyles:      'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]        
    }
};