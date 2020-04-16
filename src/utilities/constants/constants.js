import { isDev } from "../testFor";

// TYPEs
export const CONTAINER_TYPES = {
    GRADE_DISTRIBUTION: 'gradeDistribution',
    COURSE_CATALOG: 'courseCatalog',
    DEGREE_PLANNING: 'degreePlanning',
    SECRET_LIBRARY: 'secretLibrary',
    DEFAULT: 'default',
};

export const MESSAGE_KEYS = {
    TITLE: 'title',
    DESCRIPTION: 'description',
};

// URLs
export const URL_PATHS = {
    // Qhousing related
    QHOUSING_PATH: '/qhousing',

    // Qcumber related
    QCUMBER_PATH: '/qcumber',
    DATABASE_SEARCH_PATH: '/database/search',
    DATABASE_PATH: '/database',
    DATABASE_COURSE_PATH: '/database/course',

    //login
    LOGIN_PATH: '/login',
    SIGNUP_PATH: '/signup',
    FORGET_PATH: '/forget',

    //testing page
    TESTING_ONLY: '/testPage'
}

// Filters related
export const FILTERS_COMMON = {
    DISPLAY_NAME: 'display_name',
    FIELD: 'field',
    CHOICES: 'choices',
    CHECKBOX: 'checkbox',
    RANGE_SLIDER: 'range_slider'
}

// SearchResult Page
export const SEARCH_RESULTS_COMMON = {
    // ...XXX_COMMON,
    URL: 'url',
    ID: 'id',
    SUBJECT_CODE: 'subject_code',
    NUMBER: 'number',
    SHORT_DESCRIPTION: 'short_description',
}
