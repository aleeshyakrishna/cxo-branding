module.exports = {
    // other webpack configuration...

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Add more rules as needed
        ],
    },
};