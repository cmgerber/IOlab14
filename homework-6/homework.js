document.data.setMapping('syllabus', 'http://milowski.com/syllabus/');
var homeworks = document.getElementsByType("syllabus:Homework");
var presentation = document.getElementsByType("syllabus:Presentation");

for (i = 0; i < homeworks.length; i++) {
    var title = (document.data.getValues(homeworks[i].data.id, 'syllabus:title'));
    var due = (document.data.getValues(homeworks[i].data.id, "syllabus:due"));
    var subject = homeworks[i].data.subject;
    console.log('Subject: ' + subject, 'Title: ' + title[0], 'Due date: ' +due[0]);
}

for (i = 0; i < presentation.length; i++) {
    var title = (document.data.getValues(presentation[i].data.id, 'syllabus:title'));
    var due = (document.data.getValues(presentation[i].data.id, "syllabus:due"));
    var subject = presentation[i].data.subject;
    console.log('Subject: ' + subject, 'Title: ' + title[0], 'Due date: ' +due[0]);
}

