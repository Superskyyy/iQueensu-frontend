import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { URL_PATHS } from '../../../utilities/constants/constants';
import { fetchCourseLoad } from '../coursePage/CourseLoad/fetchCourseLoad';

const express = require('express');

const api = express();
api.listen(3000, () => {
    console.log.apply(req);
    resizeBy.send(fetchCourseLoad);
})