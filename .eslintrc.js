module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
            "eslint:recommended", "plugin:mdx/recommended", "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
        "settings": {
        "react": {
                "version": "detect"
        }
    }
}