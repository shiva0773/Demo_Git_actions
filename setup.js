const { test, expect } = require('@playwright/test');
const xlsx = require('xlsx');
const login = require('./Pageobjectmodel/openSpan/Login');
const data = require('./Data/Openspan.json');
const order = require('./Pageobjectmodel/openSpan/placeOrder');
const billing = require('./Pageobjectmodel/openSpan/addAdress');
const payment = require('./Pageobjectmodel/openSpan/Payment');
const logout = require('./Pageobjectmodel/openSpan/Logout');
require('dotenv').config();

module.exports = {
    test,
    expect,
    xlsx,
    login,
    data,
    order,
    billing,
    payment,
    logout
};