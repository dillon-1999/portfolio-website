let STATE = 'home';

const HOME_BUTTON = document.getElementById('home-button');
const WORK_BUTTON = document.getElementById('work-button');
const SCHOOL_BUTTON = document.getElementById('school-button');
const PAPERS_BUTTON = document.getElementById('papers-button');
const CONTACT_BUTTON = document.getElementById('contact-button');

const CONTENT_CONTAINER = document.getElementById('content-box');

const HOME_CONTENT = document.getElementById('home-content');
const WORK_CONTENT = document.getElementById('work-content');
const SCHOOL_CONTENT = document.getElementById('school-content');
const PAPERS_CONTENT = document.getElementById('papers-content');
const CONTACT_CONTENT = document.getElementById('contact-content');

const STATE_CONTENT = {
    'home': HOME_CONTENT,
    'work': WORK_CONTENT,
    'school': SCHOOL_CONTENT,
    'papers': PAPERS_CONTENT,
    'contact': CONTACT_CONTENT
}

const STATE_BUTTON = {
    'home': HOME_BUTTON,
    'work': WORK_BUTTON,
    'school': SCHOOL_BUTTON,
    'papers': PAPERS_BUTTON,
    'contact': CONTACT_BUTTON
}

function removeAndAdd(target, state){
    target.classList.remove('content-hidden');
    target.classList.add('content-shown');
    STATE_CONTENT[state].classList.remove('content-shown');
    STATE_CONTENT[state].classList.add('content-hidden');
}

function makeClicked(target, state){
    target.classList.add('clicked');
    STATE_BUTTON[state].classList.remove('clicked');
}

HOME_BUTTON.addEventListener('click', e => {
    if(STATE !== 'home'){
        removeAndAdd(HOME_CONTENT, STATE);
        makeClicked(HOME_BUTTON, STATE)
        STATE = 'home';
    }
    CONTENT_CONTAINER.scrollIntoView({behavior: 'smooth'});
});

WORK_BUTTON.addEventListener('click', e => {
    if(STATE !== 'work'){
        removeAndAdd(WORK_CONTENT, STATE);
        makeClicked(WORK_BUTTON, STATE)
        STATE = 'work';
    }
    CONTENT_CONTAINER.scrollIntoView({behavior: 'smooth'});
});

SCHOOL_BUTTON.addEventListener('click', e => {
    if(STATE !== 'school'){
        removeAndAdd(SCHOOL_CONTENT, STATE);
        makeClicked(SCHOOL_BUTTON, STATE)
        STATE = 'school';
    }
    CONTENT_CONTAINER.scrollIntoView({behavior: 'smooth'});
});

PAPERS_BUTTON.addEventListener('click', e => {
    if(STATE !== 'papers'){
        removeAndAdd(PAPERS_CONTENT, STATE);
        makeClicked(PAPERS_BUTTON, STATE)
        STATE = 'papers';
    }
    CONTENT_CONTAINER.scrollIntoView({behavior: 'smooth'});
});

CONTACT_BUTTON.addEventListener('click', e => {
    if(STATE !== 'contact'){
        removeAndAdd(CONTACT_CONTENT, STATE);
        makeClicked(CONTACT_BUTTON, STATE)
        STATE = 'contact';
    }
    CONTENT_CONTAINER.scrollIntoView({behavior: 'smooth'});
});