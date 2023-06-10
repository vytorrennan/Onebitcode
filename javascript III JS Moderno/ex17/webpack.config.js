const path = require("path")

module.exports = {
    entry: {
        build: "./src/build.js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/, 
                use: ["babel-loader"]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js"
    }
}