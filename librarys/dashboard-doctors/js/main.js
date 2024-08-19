window.addEventListener('load', () => {
    const isDarkModeEnabled = localStorage.getItem(isDarkModeEnabledKey) === 'true';
    updateDarkModeStyles(isDarkModeEnabled);
});
/* section my account mquery */
const myAccountOverlap2Mquery = document.querySelector('.my-account-overlap-2-mquery');
/* section my account mquery end */

/* dark-mode */
const isDarkModeEnabledKey = 'isDarkModeEnabled';
//icon-changes

//header
const group27 = document.querySelector('.group-27');
const group272 = document.querySelector('.group-27-2');
const vectorSvg6 = document.querySelector('.vector-6');
const vectorSvg62 = document.querySelector('.vector-6-2');
const vectorSvg7 = document.querySelector('.vector-7');
const vectorSvg72 = document.querySelector('.vector-7-2');
const vectorSvg8 = document.querySelector('.vector-8');
const vectorSvg82 = document.querySelector('.vector-8-2');
const logoSvg = document.querySelector('.logo-svg');
const logoSvg2 = document.querySelector('.logo-svg-2');
const vectorSvg9 = document.querySelector('.vector-9');
const vectorSvg92 = document.querySelector('.vector-9-2');
const svgBtnPatientsHeader = document.querySelector('.svg-btn-patients-header');
const svgBtnPatientsHeader2 = document.querySelector('.svg-btn-patients-header-2');
const svgAccountGear = document.querySelector('.group-31');
const svgAccountGear2 = document.querySelector('.group-31-2');
const PatientsDataVectorMqueryPath = document.querySelectorAll('.patients-data-vector-mquery path');

//patients
const iconDarkModeOff = document.querySelectorAll('.icon-dark-mode-off');
const iconDarkModeOffFlex = document.querySelectorAll('.icon-dark-mode-off-flex');
const iconDarkModeOn = document.querySelectorAll('.icon-dark-mode-on');
const iconDarkModeOnFlex = document.querySelectorAll('.icon-dark-mode-on-flex');

/* dark-mode end*/

/* section scan */
const scanGroup6 = document.querySelector('.scan-group-6');
const scanSectionComposite = document.querySelector('.scan-section-composite');
const wideSmilePhotoRequirementBox = document.querySelector('.wide-smile-photo-requirement-box');
const scanDivWrapper = document.querySelector('.scan-div-wrapper');
const scanOverlap = document.querySelector('.scan-overlap');
const scanDiv = document.querySelector('.scan-div');
const scanGroup10 = document.querySelector('.scan-group-10');
const scanGroup8 = document.querySelector('.scan-group-8');
/* section scan end */

/* section register preference */
const textAnswerList = document.querySelector('.text-answer-list');
const textAnswerList2 = document.querySelector('.text-answer-list2');
const textAnswerList3 = document.querySelector('.text-answer-list3');
const textAnswerList4 = document.querySelector('.text-answer-list4');
const textAnswerList5 = document.querySelector('.text-answer-list5');
const registerPreferencesVector1 = document.querySelector('.register-preferences-vector1');
const registerPreferencesVector2 = document.querySelector('.register-preferences-vector2');
const registerPreferencesVector3 = document.querySelector('.register-preferences-vector3');
const registerPreferencesVector4 = document.querySelector('.register-preferences-vector4');
const registerPreferencesVector5 = document.querySelector('.register-preferences-vector5');
/* section register preference End */

/* doctor preference */
const modalDoctorsPreferences = document.querySelector('.modal-doctors-preferences');

const casesByDoctorsVector1 = document.querySelector('.cases-by-doctors-vector1');
const casesByDoctorsVector2 = document.querySelector('.cases-by-doctors-vector2');
const casesByDoctorsVector3 = document.querySelector('.cases-by-doctors-vector3');
const casesByDoctorsVector4 = document.querySelector('.cases-by-doctors-vector4');
const casesByDoctorsVector5 = document.querySelector('.cases-by-doctors-vector5');
/* doctor preference End */

/* undefinde modal */
const modalUndefinded = document.querySelector('.modal-undefinded');
/* undefinde modal End */

/* doctors modal */
const modalDoctors = document.querySelector('.modal-doctors');
/* doctors modal End */

/* section patients */
const squareModeViewColumns = document.querySelector('.square-mode-view-columns');
const patientsOverlapGroup = document.querySelector('.patients .overlap-group-patient');
const patientsSquareGroup = document.querySelector('.patients-square-group');
const squareModeTitle = document.querySelectorAll('.square-mode-title');
/* section patients End */

/* section select company payment */
const selectCompanyPaymentModal = document.querySelector('.select-company-payment-modal');
const selectCompanyPaymentModalInvisalignVision = document.querySelector('.select-company-payment-modal-invisalign-vision');
/* section select company payment End */

/* section client chat */
const clientChatOverlap = document.querySelector('.client-chat-overlap');
const clientChatOverlap2 = document.querySelector('.client-chat-overlap2');
const modalClientChat = document.querySelector('.modal-client-chat');
const clientChatOpenImg = document.querySelector('.client-chat-open-img');
const spanClientChatOpenImgEditToolsSvg1 = document.querySelector('.span-client-chat-open-img-edit-tools-svg1'); 
const clientChatOpenImgEditToolsSvg1 = document.querySelector('.client-chat-open-img-edit-tools-svg1 path');
const clientChatOpenImgContentEditImg = document.querySelector('.client-chat-open-img-content-edit-img');
const clientChatGroup23 = document.querySelector('.client-chat-group-2-3');
const clientChatGroup33 = document.querySelector('.client-chat-group-33');
/* section client chat End */



/* section scan */

function inputIndividualImage() {
    if (window.matchMedia("(min-width: 480px)").matches) {
        scanGroup6.style.display = "block";
        scanSectionComposite.style.display = "none";
        wideSmilePhotoRequirementBox.style.display = "none";
    } else {
        scanGroup6.style.display = "block";
        scanSectionComposite.style.display = "none";
        scanDivWrapper.style.display = "block";
        scanOverlap.style.height = "543px";
        scanDiv.style.height = "820px";
    }
}

function inputComposite() {
    if (window.matchMedia("(min-width: 480px)").matches) {
        scanGroup6.style.display = "none";
        scanSectionComposite.style.display = "flex";
        wideSmilePhotoRequirementBox.style.display = "block";
    } else {
        scanGroup6.style.display = "none";
        scanSectionComposite.style.display = "flex";
        scanDivWrapper.style.display = "none";
        scanOverlap.style.height = "978px";
        scanDiv.style.height = "1260px";
    }
}

/* section scan end */

/* section register preference */

function btnQuestion() {
    if (textAnswerList.style.display === "block") {
        textAnswerList.style.display = "none";
        registerPreferencesVector1.style.transform = "rotate(0deg)";

    } else {
        textAnswerList.style.display = "block";
        registerPreferencesVector1.style.transform = "rotate(180deg)";

        textAnswerList2.style.display = "none";
        textAnswerList3.style.display = "none";
        textAnswerList4.style.display = "none";
        textAnswerList5.style.display = "none";

        registerPreferencesVector2.style.transform = "rotate(0deg)";
        registerPreferencesVector3.style.transform = "rotate(0deg)";
        registerPreferencesVector4.style.transform = "rotate(0deg)";
        registerPreferencesVector5.style.transform = "rotate(0deg)";
    }
}

function btnQuestion2() {
    if (textAnswerList2.style.display === "block") {
        textAnswerList2.style.display = "none";
        registerPreferencesVector2.style.transform = "rotate(0deg)";

    } else {
        textAnswerList2.style.display = "block";
        registerPreferencesVector2.style.transform = "rotate(180deg)";

        textAnswerList.style.display = "none";
        textAnswerList3.style.display = "none";
        textAnswerList4.style.display = "none";
        textAnswerList5.style.display = "none";

        registerPreferencesVector1.style.transform = "rotate(0deg)";
        registerPreferencesVector3.style.transform = "rotate(0deg)";
        registerPreferencesVector4.style.transform = "rotate(0deg)";
        registerPreferencesVector5.style.transform = "rotate(0deg)";
    }
}

function btnQuestion3() {
    if (textAnswerList3.style.display === "block") {
        textAnswerList3.style.display = "none";
        registerPreferencesVector3.style.transform = "rotate(0deg)";

    } else {
        textAnswerList3.style.display = "block";
        registerPreferencesVector3.style.transform = "rotate(180deg)";

        textAnswerList.style.display = "none";
        textAnswerList2.style.display = "none";
        textAnswerList4.style.display = "none";
        textAnswerList5.style.display = "none";

        registerPreferencesVector1.style.transform = "rotate(0deg)";
        registerPreferencesVector2.style.transform = "rotate(0deg)";
        registerPreferencesVector4.style.transform = "rotate(0deg)";
        registerPreferencesVector5.style.transform = "rotate(0deg)";
    }
}

function btnQuestion4() {
    if (textAnswerList4.style.display === "block") {
        textAnswerList4.style.display = "none";
        registerPreferencesVector4.style.transform = "rotate(0deg)";

    } else {
        textAnswerList4.style.display = "block";
        registerPreferencesVector4.style.transform = "rotate(180deg)";

        textAnswerList.style.display = "none";
        textAnswerList3.style.display = "none";
        textAnswerList2.style.display = "none";
        textAnswerList5.style.display = "none";

        registerPreferencesVector1.style.transform = "rotate(0deg)";
        registerPreferencesVector3.style.transform = "rotate(0deg)";
        registerPreferencesVector2.style.transform = "rotate(0deg)";
        registerPreferencesVector5.style.transform = "rotate(0deg)";
    }
}

function btnQuestion5() {
    if (textAnswerList5.style.display === "block") {
        textAnswerList5.style.display = "none";
        registerPreferencesVector5.style.transform = "rotate(0deg)";

    } else {
        textAnswerList5.style.display = "block";
        registerPreferencesVector5.style.transform = "rotate(180deg)";

        textAnswerList.style.display = "none";
        textAnswerList3.style.display = "none";
        textAnswerList2.style.display = "none";
        textAnswerList4.style.display = "none";

        registerPreferencesVector1.style.transform = "rotate(0deg)";
        registerPreferencesVector3.style.transform = "rotate(0deg)";
        registerPreferencesVector2.style.transform = "rotate(0deg)";
        registerPreferencesVector4.style.transform = "rotate(0deg)";
    }
}

/* section register preference End */

/* doctor preference */
function doctorsPreferencesOpenModal() {
    modalDoctorsPreferences.style.display = 'flex';
}

function doctorsPreferencesCloseModal() {
    modalDoctorsPreferences.style.display = 'none';
}


function btnQuestionDoctorsPreferences() {
    if (textAnswerList.style.display === "block") {
        textAnswerList.style.display = "none";
        casesByDoctorsVector1.style.transform = "rotate(0deg)";

    } else {
        textAnswerList.style.display = "block";
        casesByDoctorsVector1.style.transform = "rotate(180deg)";

        textAnswerList2.style.display = "none";
        textAnswerList3.style.display = "none";
        textAnswerList4.style.display = "none";
        textAnswerList5.style.display = "none";

        casesByDoctorsVector2.style.transform = "rotate(0deg)";
        casesByDoctorsVector3.style.transform = "rotate(0deg)";
        casesByDoctorsVector4.style.transform = "rotate(0deg)";
        casesByDoctorsVector5.style.transform = "rotate(0deg)";
    }
}

function btnQuestionDoctorsPreferences2() {
    if (textAnswerList2.style.display === "block") {
        textAnswerList2.style.display = "none";
        casesByDoctorsVector2.style.transform = "rotate(0deg)";

    } else {
        textAnswerList2.style.display = "block";
        casesByDoctorsVector2.style.transform = "rotate(180deg)";

        textAnswerList.style.display = "none";
        textAnswerList3.style.display = "none";
        textAnswerList4.style.display = "none";
        textAnswerList5.style.display = "none";

        casesByDoctorsVector1.style.transform = "rotate(0deg)";
        casesByDoctorsVector3.style.transform = "rotate(0deg)";
        casesByDoctorsVector4.style.transform = "rotate(0deg)";
        casesByDoctorsVector5.style.transform = "rotate(0deg)";
    }
}

function btnQuestionDoctorsPreferences3() {
    if (textAnswerList3.style.display === "block") {
        textAnswerList3.style.display = "none";
        casesByDoctorsVector3.style.transform = "rotate(0deg)";

    } else {
        textAnswerList3.style.display = "block";
        casesByDoctorsVector3.style.transform = "rotate(180deg)";

        textAnswerList.style.display = "none";
        textAnswerList2.style.display = "none";
        textAnswerList4.style.display = "none";
        textAnswerList5.style.display = "none";

        casesByDoctorsVector1.style.transform = "rotate(0deg)";
        casesByDoctorsVector2.style.transform = "rotate(0deg)";
        casesByDoctorsVector4.style.transform = "rotate(0deg)";
        casesByDoctorsVector5.style.transform = "rotate(0deg)";
    }
}

function btnQuestionDoctorsPreferences4() {
    if (textAnswerList4.style.display === "block") {
        textAnswerList4.style.display = "none";
        casesByDoctorsVector4.style.transform = "rotate(0deg)";

    } else {
        textAnswerList4.style.display = "block";
        casesByDoctorsVector4.style.transform = "rotate(180deg)";

        textAnswerList.style.display = "none";
        textAnswerList3.style.display = "none";
        textAnswerList2.style.display = "none";
        textAnswerList5.style.display = "none";

        casesByDoctorsVector1.style.transform = "rotate(0deg)";
        casesByDoctorsVector3.style.transform = "rotate(0deg)";
        casesByDoctorsVector2.style.transform = "rotate(0deg)";
        casesByDoctorsVector5.style.transform = "rotate(0deg)";
    }
}

function btnQuestionDoctorsPreferences5() {
    if (textAnswerList5.style.display === "block") {
        textAnswerList5.style.display = "none";
        casesByDoctorsVector5.style.transform = "rotate(0deg)";

    } else {
        textAnswerList5.style.display = "block";
        casesByDoctorsVector5.style.transform = "rotate(180deg)";

        textAnswerList.style.display = "none";
        textAnswerList3.style.display = "none";
        textAnswerList2.style.display = "none";
        textAnswerList4.style.display = "none";

        casesByDoctorsVector1.style.transform = "rotate(0deg)";
        casesByDoctorsVector3.style.transform = "rotate(0deg)";
        casesByDoctorsVector2.style.transform = "rotate(0deg)";
        casesByDoctorsVector4.style.transform = "rotate(0deg)";
    }
}

/* doctors preference End */

/* undefinde modal */
function undefinedModalPatient() {
    if(modalUndefinded.style.display === 'flex') {
        modalUndefinded.style.display = 'none';
    } else {
        modalUndefinded.style.display = 'flex';
    }
}
/* undefinde modal End */

/* doctors modal */
function ModalDoctor() {
    if(modalDoctors.style.display === 'flex') {
        modalDoctors.style.display = 'none';
    } else {
        modalDoctors.style.display = 'flex';
    }
}
/* doctors modal End */

/* section patients */

function menuViewPatients() {
    if (squareModeViewColumns.style.display === "block") {
        squareModeViewColumns.style.display = "none";
    } else {
        squareModeViewColumns.style.display = "block";
    }
}

function changeSquareMode() {
    patientsSquareGroup.style.display = "block";

    patientsOverlapGroup.style.display = "none";
    squareModeTitle.forEach(e => {e.style.display = "none"});

    menuViewPatients();
}

function changeViewColumns() {
    patientsSquareGroup.style.display = "none";

    patientsOverlapGroup.style.display = "block";
    squareModeTitle.forEach(e => {e.style.display = "block"});

    menuViewPatients();
}

/* section patients End */

/* section select company payment */

function paymentModal() {
    selectCompanyPaymentModal.style.display = "block";
}

function paymentModaInvisalignPlan() {
    selectCompanyPaymentModalInvisalignVision.style.display = "flex";
}

function paymentModalClose() {
    selectCompanyPaymentModal.style.display = "none";
}

function paymentModalCloseInvisalignPlan() {
    selectCompanyPaymentModalInvisalignVision.style.display = "none";
}
/* section select company payment End */

/* section client chat */
function clientChatContainerBox() {
    clientChatOverlap.style.display = "none";
    clientChatOverlap2.style.display = "block";
}

function backToChat() {
    clientChatOverlap.style.display = "block";
    clientChatOverlap2.style.display = "none";
}

function activeCaseChatClient() {
    modalClientChat.style.display = "flex";
}

function activeCaseChatClientClose() {
    modalClientChat.style.display = "none";
}

function activeModalClientChat() {
    clientChatOpenImg.style.display = "block";
}

function clientChatOpenImgClose() {
    clientChatOpenImg.style.display = "none";
}

function editToolsSvg1() {
    if(spanClientChatOpenImgEditToolsSvg1.style.backgroundColor === "transparent") {
        spanClientChatOpenImgEditToolsSvg1.style.backgroundColor = "#FFF";
        clientChatOpenImgEditToolsSvg1.style.fill = "#000";
        clientChatOpenImgContentEditImg.style.display = "block";
    } else {
        spanClientChatOpenImgEditToolsSvg1.style.backgroundColor = "transparent";
        clientChatOpenImgEditToolsSvg1.style.fill = "#FFF";
        clientChatOpenImgContentEditImg.style.display = "none";
    }
}   

function uploadEditImg() {
    clientChatGroup23.style.display = "flex";
}

function showProfileClienChatMquery() {
    clientChatGroup33.style.display = "block";
}

function closeProfileClienChatMquery() {
    clientChatGroup33.style.display = "none";
}
/* section client chat end */

/* section my account mquery */
function closeGuideContainer() {
    myAccountOverlap2Mquery.style.display = "none";
}

function openGuideContainer() {
    myAccountOverlap2Mquery.style.display = "block";
}
/* section my account mquery end */

/* dark theme */

const darkTheme = document.querySelector('.dark-theme');

function buttomTheme() {
    const isDarkModeEnabled = localStorage.getItem(isDarkModeEnabledKey) === 'true';
    const newDarkModeState = !isDarkModeEnabled;
    
    updateDarkModeStyles(newDarkModeState);

    localStorage.setItem(isDarkModeEnabledKey, newDarkModeState ? 'true' : 'false');
}

function updateDarkModeStyles(isDarkModeEnabled) {
    if (isDarkModeEnabled) {

        document.body.classList.toggle('dark-theme');
        //header
        group27.style.display = "none";
        group272.style.display = "block";
        vectorSvg6.style.display = "none";
        vectorSvg62.style.display = "block";
        vectorSvg7.style.display = "none";
        vectorSvg72.style.display = "block";
        vectorSvg8.style.display = "none";
        vectorSvg82.style.display = "block";
        logoSvg.style.display = "none";
        logoSvg2.style.display = "block";
        vectorSvg9.style.display = "none";
        vectorSvg92.style.display = "block";
        svgBtnPatientsHeader.style.display = "none";
        svgBtnPatientsHeader2.style.display = "block";
        svgAccountGear.style.display = "none";
        svgAccountGear2.style.display = "block";
        
        //patients
        iconDarkModeOff.forEach(e => {e.style.display = "none"});
        iconDarkModeOffFlex.forEach(e => {e.style.display = "none"});

        iconDarkModeOn.forEach(e => {e.style.display = "block"});
        iconDarkModeOnFlex.forEach(e => {e.style.display = "flex"});

        PatientsDataVectorMqueryPath.forEach(e => {e.style.stroke = "#FFF"});
    } else {
        document.body.classList.remove('dark-theme');
        
        //header
        svgAccountGear2.style.display = "none";
        svgAccountGear.style.display = "block";
        svgBtnPatientsHeader2.style.display = "none";
        svgBtnPatientsHeader.style.display = "block";
        vectorSvg9.style.display = "block";
        vectorSvg92.style.display = "none";
        logoSvg2.style.display = "none";
        logoSvg.style.display = "block";
        vectorSvg82.style.display = "none";
        vectorSvg8.style.display = "block";
        vectorSvg72.style.display = "none";
        vectorSvg7.style.display = "block";
        vectorSvg62.style.display = "none";
        vectorSvg6.style.display = "block";
        group27.style.display = "flex";
        group272.style.display = "none";

        //patients
        
        iconDarkModeOff.forEach(e => {e.style.display = "block"});
        iconDarkModeOffFlex.forEach(e => {e.style.display = "flex"});

        iconDarkModeOn.forEach(e => {e.style.display = "none"});
        iconDarkModeOnFlex.forEach(e => {e.style.display = "none"});

        PatientsDataVectorMqueryPath.forEach(e => {e.style.stroke = "#152D5A"});
    }
}