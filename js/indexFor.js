/*function validation (form) {
    let result = true;
    if (document.forms.name.value === '') {
        result = false
    }
    return result;
};*/

/*document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('pr')
    if(validation(this) == true){
        alert('вот ваше готовое резюме');
    };
}); */




function showResume(event) {

    event.preventDefault(

    )
    const form = document.getElementById("resume-form");
    const view = document.getElementById("resume-view");
    const name = form.name.value;
    const nameInside = document.getElementById("name-inside");
    const dateInside = document.getElementById("date-inside");
    const cityInside = document.getElementById("city-inside");
    const numberInside = document.querySelector("#number-inside");
    const emailInside = document.getElementById("email-inside");

    const addingInterests = document.querySelectorAll(".adding-interests");
    const interestsTextarea = document.getElementsByClassName("interest-textarea");
    const secondMainSectionInterestsAdded = document.getElementsByClassName("second-main-section-interests-added")[0];

// фио и лич данные

    if (name.length === 0) {
        alert('заполните поле');
        return;
    };

    nameInside.innerHTML = form.name.value;
   // view.innerHTML = 'ФИО' + form.name.value;
    dateInside.innerHTML = form.date.value;
    cityInside.innerHTML = form.city.value;
    numberInside.innerHTML = form.number.value;
    emailInside.innerHTML = form.email.value;
    
//интересы
    let kInterests = 1;

    if (interestsTextarea.length !== 1 ) {
        addingInterests.forEach(addingInterest => {
            if (addingInterest.value !== '') {
                const newAddingInterest = document.createElement("p");
                newAddingInterest.innerHTML = addingInterest.value;
                secondMainSectionInterestsAdded.appendChild(newAddingInterest);
            } else {
                kInterests = kInterests+1;
            }
        } );
    } else {
        const secondMainSection = document.getElementsByClassName("second-main-section")[0];
        secondMainSection.remove();
        kInterests = 0
    }

    if (kInterests === interestsTextarea.length) {
        const secondMainSection = document.getElementsByClassName("second-main-section")[0];
        secondMainSection.remove();
    }

// языки

    let kLanguages = 1;
    const thirdMainSectionLanguagesForAdded = document.getElementsByClassName("third-main-section-languages-for-added")[0];
    const addingLanguages = document.getElementsByName("nameLanguages");
    const addingLevel = document.getElementsByName("nameLevel");
    const textareasForLanguages = document.getElementsByClassName("textareas-for-languages");

    if (textareasForLanguages.length !== 1 ) {
        let kLevel = 0;
        addingLanguages.forEach(addingLanguage => {
            if ((addingLanguage.value !== '') && (addingLevel[kLevel].value !== '')) {
                const newAddingLanguage = document.createElement("div");
                newAddingLanguage.className = 'third-main-section-languages-added d-flex'
                newAddingLanguage.innerHTML = `<p class="language-type">${addingLanguage.value}</p><p class="language-level">${addingLevel[kLevel].value}</p>`;
                thirdMainSectionLanguagesForAdded.appendChild(newAddingLanguage);
                kLevel = kLevel + 1;
            } else {
                kLanguages = kLanguages+1;
            }
        } );
    } else {
        const thirdMainSection = document.getElementsByClassName("third-main-section")[0];
        thirdMainSection.remove();
        kLanguages = 0;
    }

    if (kLanguages === textareasForLanguages.length) {
        const thirdMainSection = document.getElementsByClassName("third-main-section")[0];
        thirdMainSection.remove();
    }

// фио 

    document.getElementById("h1").innerHTML = name;
    if (document.getElementById("id-textarea-about-me").value.length !== 0) {
        document.getElementById("txt-about-me").innerHTML = document.getElementById("id-textarea-about-me").value;
    } else {
        const secondMainInfo = document.querySelector(".second-main-info-about-me");
        secondMainInfo.remove();
    };
//опыт работы 

    function formatDate(dateString) {
        var date = new Date(dateString.split(","));
        var options = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString("ru-RU", options);
      }

    function parseEnd(event) {
        if (event.value === '') {
            return 'наст. время';
        } else {
            return formatDate(event.value);
        };
    };

    let kExperience = 1;
    const secondMainInfoExperienceJob = document.getElementsByClassName("second-main-info-Experience-job")[0];
    const addingJobTitles = document.getElementsByName("nameJobTitle");
    const addingStartsOfWorking = document.getElementsByName("nameStartOfWorking");
    const addingEndsOfWorking = document.getElementsByName("nameEndOfWorking");
    const addingPlacesOfWork = document.getElementsByName("namePlaceOfWork");
    const addingOccupation = document.getElementsByName("nameOccupation");

    const textareasForExperience = document.getElementsByClassName("textareas-for-experience");

    let addingStartsOfWorkingX = addingStartsOfWorking
    addingStartsOfWorkingX.forEach(addingStartOfWorking => {
        addingStartOfWorking = new Date (addingStartOfWorking)

    });


    if (textareasForExperience.length !== 1 ) {
        let kJob = 0;
        addingJobTitles.forEach(addingJobTitle => {
            if (addingJobTitle.value !== '') {
                const newAddingJobTitle = document.createElement("div");
                newAddingJobTitle.className = 'second-main-info-job-added';
                if (addingStartsOfWorking[kJob].value === '') {
                    newAddingJobTitle.innerHTML = ` <div class="statement-mark-job d-flex">
                <p class="statement-mark-job-name">${addingJobTitle.value}</p><p class="statement-mark-job-date">${parseEnd(addingEndsOfWorking[kJob])}</p>
            </div>
            <p class="place-of-work">${addingPlacesOfWork[kJob].value}</p>
            <p class="talk-about-work">${addingOccupation[kJob].value}</p>`;
                    secondMainInfoExperienceJob.appendChild(newAddingJobTitle)

                } else {
                    newAddingJobTitle.innerHTML = ` <div class="statement-mark-job d-flex">
                <p class="statement-mark-job-name">${addingJobTitle.value}</p><p class="statement-mark-job-date">${formatDate(addingStartsOfWorking[kJob].value)} — ${parseEnd(addingEndsOfWorking[kJob])}</p>
            </div>
            <p class="place-of-work">${addingPlacesOfWork[kJob].value}</p>
            <p class="talk-about-work">${addingOccupation[kJob].value}</p>`;
                    secondMainInfoExperienceJob.prepend(newAddingJobTitle)

                     
                }
                kJob = kJob + 1;
            } else {
                kExperience = kExperience+1;
            }
        } );
    } else {
        const secondMainInfoExperience = document.getElementsByClassName("second-main-info-Experience")[0];
        secondMainInfoExperience.remove();
        kExperience = 0
    }

    if (kExperience === textareasForExperience.length) {
        const secondMainInfoExperience = document.getElementsByClassName("second-main-info-Experience")[0];
        secondMainInfoExperience.remove();
    } 

//образование
    
    let kEducation = 1;
    const secondMainInfoEducationHigher = document.getElementsByClassName("second-main-info-education-higher")[0];
    const addingHighEducations = document.getElementsByName("nameHighEducation");
    const addingStartsOfStyding = document.getElementsByName("nameStartOfStyding");
    const addingEndsOfStyding = document.getElementsByName("nameEndOfStyding");
    const addingPlacesOfStyding = document.getElementsByName("namePlaceOfStyding");
    const addingAdditionalInformation = document.getElementsByName("nameAdditionalInformation");

    const textareasForEducation = document.getElementsByClassName("textareas-for-education");

   /* let addingStartsOfWorkingX = addingStartsOfWorking
    addingStartsOfWorkingX.forEach(addingStartOfWorking => {
        addingStartOfWorking = new Date (addingStartOfWorking)

    });
*/

    if (textareasForEducation.length !== 1 ) {
        let kStudy = 0;
        addingHighEducations.forEach(addingHighEducation => {
            if (addingHighEducation.value !== '') {
                const newAddingHighEducation = document.createElement("div");
                newAddingHighEducation.className = 'second-main-info-education-added';
                if (addingStartsOfStyding[kStudy].value === '') {
                    newAddingHighEducation.innerHTML = `<div class="statement-mark-education d-flex">
                    <p class="statement-mark-education-name">${addingHighEducation.value}</p><p class="statement-mark-education-date">${parseEnd(addingEndsOfStyding[kStudy])}</p>
                </div>
                <p class="place-of-styding">${addingPlacesOfStyding[kStudy].value}</p>
                <p class="talk-about-styding">${addingAdditionalInformation[kStudy].value}</p>`;
                    secondMainInfoEducationHigher.appendChild(newAddingHighEducation);
                } else {
                    newAddingHighEducation.innerHTML = `<div class="statement-mark-education d-flex">
                    <p class="statement-mark-education-name">${addingHighEducation.value}</p><p class="statement-mark-education-date">${formatDate(addingStartsOfStyding[kStudy].value)} — ${parseEnd(addingEndsOfStyding[kStudy])}</p>
                </div>
                <p class="place-of-styding">${addingPlacesOfStyding[kStudy].value}</p>
                <p class="talk-about-styding">${addingAdditionalInformation[kStudy].value}</p>`;
                    secondMainInfoEducationHigher.prepend(newAddingHighEducation);
                }
                kStudy = kStudy + 1;
            } else {
                kEducation = kEducation+1;
            }
        } );
    } else {
        const secondMainInfoEducation = document.getElementsByClassName("second-main-info-education")[0];
        secondMainInfoEducation.remove();
        kEducation = 0
    }

    if (kEducation === textareasForEducation.length) {
        const secondMainInfoEducation = document.getElementsByClassName("second-main-info-education")[0];
        secondMainInfoEducation.remove();
    } 
        
// курсы

    let kCourses = 1;
    const secondMainInfoCoursesTypes = document.getElementsByClassName("second-main-info-courses-types")[0];
    const addingCourses = document.getElementsByName("nameOfCourse");
    const addingStartsOfCourse = document.getElementsByName("nameStartOfCourse");
    const addingEndsOfCourse = document.getElementsByName("nameEndOfCourse");
    const addingCompanies = document.getElementsByName("nameOfCompany");

    const textareasForCourses = document.getElementsByClassName("textareas-for-courses");

    /* let addingStartsOfWorkingX = addingStartsOfWorking
    addingStartsOfWorkingX.forEach(addingStartOfWorking => {
        addingStartOfWorking = new Date (addingStartOfWorking)

    });
    */

    if (textareasForCourses.length !== 1 ) {
        let kComp = 0;
        addingCourses.forEach(addingCourse => {
            if (addingCourse.value !== '') {
                const newAddingCourse = document.createElement("div");
                newAddingCourse.className = 'second-main-info-courses-added';
                if (addingStartsOfCourse[kComp].value === '') {
                    newAddingCourse.innerHTML = `<div class="statement-mark-corses d-flex">
                    <p class="statement-mark-courses-name">${addingCourse.value}</p><p class="statement-mark-courses-date">${parseEnd(addingEndsOfCourse[kComp])}</p>
                </div>
                <p class="place-of-courses">${addingCompanies[kComp].value}</p>`
                    secondMainInfoCoursesTypes.appendChild(newAddingCourse);
                } else {
                    newAddingCourse.innerHTML = `<div class="statement-mark-corses d-flex">
                    <p class="statement-mark-courses-name">${addingCourse.value}</p><p class="statement-mark-courses-date">${formatDate(addingStartsOfCourse[kComp].value)} — ${parseEnd(addingEndsOfCourse[kComp])}</p>
                </div>
                <p class="place-of-courses">${addingCompanies[kComp].value}</p>`;
                    secondMainInfoCoursesTypes.prepend(newAddingCourse);
                }
                kComp = kComp + 1;
            } else {
                kCourses = kCourses+1;
            }
        } );
    } else {
        const secondMainInfoCourses = document.getElementsByClassName("second-main-info-courses")[0];
        secondMainInfoCourses.remove();
        kCourses = 0
    }

    if (kCourses === textareasForCourses.length) {
        const secondMainInfoCourses = document.getElementsByClassName("second-main-info-courses")[0];
        secondMainInfoCourses.remove();
    } 




    form.style.display = 'none';
    view.style.display = 'block'; 

    function returnForm(event) { 
        event.preventDefault
        form.style.display = 'block';
        view.style.display = 'none';
    }
    
    const buttonForReturn = document.getElementById("for-return");
    buttonForReturn.addEventListener("click", returnForm);
}



const buttonForSubmit = document.querySelector('.forSubmit');

buttonForSubmit.addEventListener("click", showResume)

/*const buttonForAddingInterests = document.querySelector('.for-adding-interests');
const theSecondSection = document.querySelector('.second-main-section');
const containerForInterests = document.querySelector('.container-for-interests');
buttonForAddingInterests.addEventListener("click", function(event) {
    const newElement = `<textarea style="flex-wrap: wrap;" name="nameInterests" rows="1" style="width: 50px;"></textarea> 
`;

    containerForInterests.insertAdjacentHTML(
    'afterend',
    newElement
    ); 
    
    
   

    event.preventDefault();

});



const buttonForRemovingInterests = document.querySelector('.for-removing-interests-main');
buttonForRemovingInterests.addEventListener('click', function(event) {
    
}); 




/* const deleteInterest = newElement.querySelector('.for-removing-interests');
console.log(deleteInterest)
deleteInterest.addEventListener("click", function (event) {
    theSecondSection.removeChild(newElement);
});
*/


/* buttonForAddingInterests.addEventListener("click", addInterests);
function addInterests(event) {
    const newInterestsInput = document.createElement('div');
    newInterestsInput.classList.add('second-main-section');
    newInterestsInput.innerHTML = `<textarea style="flex-wrap: wrap;" name="nameInterests" rows="1" style="width: 50px;"></textarea> 
    <button value="delete" class="for-removing-interests">delete</button>`;
    theSecondSection.appendChild(newInterestsInput);

    event.preventDefault
    
}
 form.addEventListener('submit', function(event) {
    event.preventDefault
 })
 */ 
 
const buttonForAddingInterests = document.querySelector('.for-adding-interests');
const buttonForRemovingInterests = document.querySelector('.for-removing-interests');
const secondMainDiv = document.getElementById("second-main-div");

function addInterest(event) {
    event.preventDefault();
    const newInterest = document.createElement("div");
    newInterest.className = "interest-textarea";
    newInterest.innerHTML = `<textarea style="flex-wrap: wrap;" test-id="interest" class="adding-interests" name="nameInterests" rows="1" style="width: 50px;"></textarea>`;
    secondMainDiv.appendChild(newInterest);
};
function removeInterest(event) {
    event.preventDefault();
    const interestsTextarea = document.getElementsByClassName("interest-textarea");
    if (interestsTextarea.length > 1) {
        secondMainDiv.removeChild(interestsTextarea[interestsTextarea.length - 1]);
    };
};

buttonForAddingInterests.addEventListener("click", addInterest);
buttonForRemovingInterests.addEventListener("click", removeInterest);


const buttonForAddingLanguages = document.querySelector('.for-adding-languages');
const buttonForRemovingLanguages = document.querySelector('.for-removing-languages');
const containerForLanguages = document.getElementById("container-for-languages");

function addLanguage(event) {
    event.preventDefault();
    const newLanguage = document.createElement("div");
    newLanguage.className = "textareas-for-languages";
    newLanguage.innerHTML = `<textarea test-id="language-name" style="flex-wrap: wrap;" name="nameLanguages" rows="1" style="width: 50px;"></textarea> <input test-id="language-level" name="nameLevel" type="text" placeholder="уровень" style="width: 35px">`;
    containerForLanguages.appendChild(newLanguage);
}
function removeLanguage(event) {
    event.preventDefault();
    const textareasForLanguages = document.getElementsByClassName("textareas-for-languages");
    if (textareasForLanguages.length > 1) {
        containerForLanguages.removeChild(textareasForLanguages[textareasForLanguages.length - 1]);
    };
};

buttonForAddingLanguages.addEventListener("click", addLanguage);
buttonForRemovingLanguages.addEventListener("click", removeLanguage);

const buttonForAddingExperience = document.querySelector('.for-adding-experience');
const buttonForRemovingExperience = document.querySelector('.for-removing-experience');
const containerForExperience = document.getElementById("container-for-experience");

function addExperience(event) {
    event.preventDefault();
    const newExperience = document.createElement("div");
    newExperience.className = "textareas-for-experience";
    newExperience.innerHTML = `<textarea test-id="job-title" style="flex-wrap: wrap;" name="nameJobTitle" placeholder="Должность" rows="1" style="width: 50px;"></textarea> 
    <input type="date" test-id="job-date-start" name="nameStartOfWorking">
    <input type="date" test-id="job-date-end" name="nameEndOfWorking">
    <textarea name="namePlaceOfWork" test-id="job-place" placeholder="место работы" cols="15" rows="5"></textarea>
    <textarea name="nameOccupation" test-id="job-description" placeholder="чем занимались будучи на этой должности" cols="20" rows="7"></textarea>`;
    containerForExperience.appendChild(newExperience);
}
function removeExperience(event) {
    event.preventDefault();
    const textareasForExperience = document.getElementsByClassName("textareas-for-experience");
    if (textareasForExperience.length > 1) {
        containerForExperience.removeChild(textareasForExperience[textareasForExperience.length - 1]);
    };
};

buttonForAddingExperience.addEventListener("click", addExperience);
buttonForRemovingExperience.addEventListener("click", removeExperience);

const buttonForAddingEducation = document.querySelector('.for-adding-education');
const buttonForRemovingEducation = document.querySelector('.for-removing-education');
const containerForEducation = document.getElementById("container-for-education");

function addEducation(event) {
    event.preventDefault();
    const newEducation = document.createElement("div");
    newEducation.className = "textareas-for-education";
    newEducation.innerHTML = `<textarea test-id="education-title" style="flex-wrap: wrap;" name="nameHighEducation" placeholder="вид высшего образования" rows="1" style="width: 50px;"></textarea> 
    <input type="date" test-id="education-date-start" name="nameStartOfStyding">
    <input type="date" test-id="education-date-end" name="nameEndOfStyding">
    <textarea test-id="education-place" name="namePlaceOfStyding" placeholder="место учебы" cols="15" rows="5"></textarea>
    <textarea test-id="education-description" name="nameAdditionalInformation" placeholder="дополнительная информация" cols="20" rows="7"></textarea>`;
    containerForEducation.appendChild(newEducation);
}
function removeEducation(event) {
    event.preventDefault();
    const textareasForEducation = document.getElementsByClassName("textareas-for-education");
    if (textareasForEducation.length > 1) {
        containerForEducation.removeChild(textareasForEducation[textareasForEducation.length - 1]);
    };
};

buttonForAddingEducation.addEventListener("click", addEducation);
buttonForRemovingEducation.addEventListener("click", removeEducation);

const buttonForAddingCourses = document.querySelector('.for-adding-courses');
const buttonForRemovingCourses = document.querySelector('.for-removing-courses');
const containerForCourses = document.getElementById("container-for-courses");

function addCourses(event) {
    event.preventDefault();
    const newCourses = document.createElement("div");
    newCourses.className = "textareas-for-courses";
    newCourses.innerHTML = `<textarea test-id="course-title" style="flex-wrap: wrap;" name="nameOfCourse" placeholder="название курса" rows="1" style="width: 50px;"></textarea> 
    <input type="date" test-id="course-date-start" name="nameStartOfCourse">
    <input type="date" test-id="course-date-end" name="nameEndOfCourse">
    <textarea test-id="course-place" name="nameOfCompany" placeholder="название организации" cols="15" rows="5"></textarea>`;
    containerForCourses.appendChild(newCourses);
}
function removeCourses(event) {
    event.preventDefault();
    const textareasForCourses = document.getElementsByClassName("textareas-for-courses");
    if (textareasForCourses.length > 1) {
        containerForCourses.removeChild(textareasForCourses[textareasForCourses.length - 1]);
    };
};

buttonForAddingCourses.addEventListener("click", addCourses);
buttonForRemovingCourses.addEventListener("click", removeCourses);