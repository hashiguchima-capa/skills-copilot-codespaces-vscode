// Create web server using express
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: '