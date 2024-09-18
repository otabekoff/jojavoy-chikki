function socialScoreShare() {
    let left = (screen.width / 2) - (250 / 2);
    let top = (screen.height / 2) - (450 / 2);

    caption = 'Jo\'javoy Chikki';
    title = chicken.score + ' ball!!!';
    description = 'Men ' + chicken.score + ' ballga Jo\'javoy Chikki o\'yinida erishdim. Siz rekordni yangilay olasizmi? #jojavoychikkioyini';

    window = window.open('https://www.facebook.com/dialog/share?app_id=998325273610775&href=https://otabekoff.github.io/chikki/&picture=https://daltonmenezes.github.io/pepper-the-chicken/src/sprites/pepper-fb.png&title=' + title + '&caption=' + caption + '&description=' + description + '&hashtag=#pepperthechickengame', '_blank', 'width=250, height=250, top=' + top + ', left=' + left);
}
