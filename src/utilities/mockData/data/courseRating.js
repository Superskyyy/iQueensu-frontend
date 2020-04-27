const newRate = (subject, number, term, prof, rate, text, date) => {
    return {
        subject,
        number,
        term,
        prof,
        rate,
        text,
        date,
    };
};
export default [
    newRate(
        "CISC",
        "199",
        "2019 Fall",
        "Ting Hu",
        5.0,
        "Good prof good course Good prof good course Good prof good course",
        new Date(2019, 1, 17)
    ),
    newRate(
        "CISC",
        "199",
        "2019 Fall",
        "Hu Ting",
        3.0,
        "Good prof good course Good prof good course",
        new Date(2019, 1, 17)
    ),
    newRate(
        "CISC",
        "199",
        "2019 Fall",
        "Ting Hu",
        5.0,
        "I hate this course because I didn’t study hard",
        new Date(2019, 1, 17)
    ),
];
