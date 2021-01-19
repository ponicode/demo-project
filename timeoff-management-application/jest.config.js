const {defaults} = require("jest-config");
module.exports = {
                    "collectCoverageFrom": [
                                            "**/*.{js,jsx}",
                                            "!**/__tests__/**/*.[jt]s?(x)",
                                            "!*test*",
                                            "!*config*",
                                            "!*spec*",
                                            "!*node_modules*",
                                            "!**/vendor/**",
                                            ],
                    "coverageDirectory": "ponicode_metrics/coverage",
                    "moduleFileExtensions": [...defaults.moduleFileExtensions, "ts", "tsx"],
                    "testRegex": ["ponicode.test.js", "ponicode_eval/*"]
                };
