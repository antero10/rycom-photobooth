export default {
  logo: './img/White_Rycom_Logo.png',
  urlApi: 'https://rycom-api.herokuapp.com/email',
  linkBm3group: 'http://bm3sk.bm3group.com',
  emailSendGrid: 'test@test.com',
  bg: './img/Screen.png',
  home : {
    bgCam: './img/Watermark.png',
    buttons:
    [
      {name: 'Retake', url: './img/Retake_Photo_Button.png', label: ''},
      {name: 'Take', url: './img/Take_Photo.png', label: ''},
      {name: 'send', url: '', label: 'Send'},
      {name: 'Main', url: './img/Main_Menu_Button.png', label: ''},
    ],
  },
  message : {
    buttons: [
      {name: 'Main', url: './img/Main_Menu_Button.png'},
    ],
    text1: 'YOU PICTURE HAS BEEN SENT TO YOUR EMAIL!',
    text2: 'THANK YOU FOR VISITING RYCOM´S SMART STATION',
  },
  contact : {
    checkText: 'I agree to receive email messages from RYCOM Corporation',
    checkConsent: 'Consent*',
    text: 'Fill out the form below and take a picture with me.',
    robot: './img/Big_Robot.png',
    buttons: [
      {name: 'Next', url: '', label: 'Next'},
      {name: 'Main', url: './img/Main_Menu_Button.png', label: ''},
    ],
    fullName: 'Full Name',
    company: 'Company',
    title: 'Title',
    email: 'E-mail',
  },
  routes: {
    message: '/message',
    home: '/camera',
    contact: '/',
  }
}
