import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

const messages =
{
  "en":
  {
    "FNAME": { title: 'Invalid Name!', subTitle: 'Please enter valid first name!', empty: "Please enter your first name!" },
    "LNAME": { title: 'Invalid Name!', subTitle: 'Please enter valid last name!', empty: "Please enter your last name!" },
    "CONFP": { title: 'Invalid Password!', subTitle: 'Password & comfirm password should match!', empty: "Please retype password!" },
    "PASSW": { title: 'Invalid Password!', subTitle: 'Please enter a password that contains at least 4 characters!', empty: "Please enter password!" },
    "PHONE": { title: 'Invalid Phone!', subTitle: 'Please enter valid phone number!', empty: "Please enter your phone number!" },
    "UNAME": { title: 'Invalid Username!', subTitle: ' ', empty: "Please enter Username!" },
    "COUNTRY": { title: 'Invalid Country!', subTitle: '', empty: "Please select country!" },
    "OTP": { title: 'Invalid OTP!', subTitle: ' ', empty: "Please enter OTP!" },

    "EMAIL": { title: 'Invalid Email!', subTitle: 'Please enter a valid email address!', empty: "Please enter your email!" },
    "ABT": { title: 'Invalid About!', subTitle: ' ', empty: "Please enter about!" },
    "ADDRS": { title: 'Enter Address!', subTitle: '', empty: "Please enter address!" },
    "MSG": { title: 'Enter Message!', subTitle: ' ', empty: "Please enter message!" },
    "FEE": { title: 'Invalid Fee!', subTitle: ' ', empty: "Please enter fee!" },
    "CAPLICENCE": { title: 'Invalid Licence!', subTitle: ' ', empty: "Please enter licence!" },
    "SDATE": { title: 'Select Start Date!', subTitle: '', empty: "Please select start date!" },
    "EDATE": { title: 'Select End Date!', subTitle: '', empty: "Please select end date!" },
    "BOATDESC": { title: 'Invalid Description!', subTitle: ' ', empty: "Please enter boat description!" },
    "RENTALRATE": { title: 'Invalid Rental Rate!', subTitle: ' ', empty: "Please enter rental rate!" },
    "LOCATION": { title: 'Invalid Location!', subTitle: ' ', empty: "Please enter location!" },
    "MODEL": { title: 'Invalid Model!', subTitle: ' ', empty: "Please enter model!" },
    "YEAR": { title: 'Invalid Manufacture Year!', subTitle: ' ', empty: "Please manufacture year!" },
    "HIN": { title: 'Invalid HIN!', subTitle: ' ', empty: "Please enter HIN!" },
    "DAILY": { title: 'Invalid Daily Rate!', subTitle: ' ', empty: "Please enter daily rate!" },
    "HOURLY": { title: 'Invalid Hourly Rate!', subTitle: ' ', empty: "Please enter hourly rate!" },
    "MONTHLY": { title: 'Invalid Monthly Rate!', subTitle: ' ', empty: "Please enter monthly rate!" },
    "TOW": { title: 'Invalid Tow Vehicle Requirements!', subTitle: ' ', empty: "Please enter tow vehicle requirements!" },
    "BOATT": { title: 'Invalid Boat Type!', subTitle: ' ', empty: "Please select boat type!" },
    "ACTIT": { title: 'Invalid Activity Type!', subTitle: ' ', empty: "Please select activity type!" },
    "SURNAME": { title: 'Invalid Surname!', subTitle: '', empty: "Please enter your surname!" },
    "COMPANY": { title: 'Invalid Company!', subTitle: '', empty: "Please enter company name!" },
    "JOBTITLE": { title: 'Invalid Job Title!', subTitle: '', empty: "Please enter job title!" },
    "CITY": { title: 'Enter City!', subTitle: '', empty: "Please enter city!" },
    "MOBILE": { title: 'Invalid Mobile!', subTitle: 'Please enter valid mobile number!', empty: "Please enter your mobile number!" },
    "TELEPHONE": { title: 'Invalid Telephone!', subTitle: 'Please enter valid telephone number!', empty: "Please enter your telephone number!" },
    "PO": { title: 'Invalid Ports of Operation!', subTitle: ' ', empty: "Please enter prots of operation!" },
    "PINFO": { title: 'Invalid Personal Info!', subTitle: ' ', empty: "Please enter personal info/staff info!" },
    "FAX": { title: 'Invalid Fax!', subTitle: ' ', empty: "Please enter fax!" },
    "TERMS": { title: '', subTitle: ' ', empty: "Please accept the terms & conditions!" },
    "OVER18": { title: '', subTitle: ' ', empty: "The Micropub App is only available to users who are over 18 years old!" },
    "NPASS": { title: 'Invalid Password!', subTitle: 'Please enter a new password that contains a minimum of 8 characters including an uppercase letter, number and special character!', empty: "Please enter new password!" },
    "OPASS": { title: 'Invalid Password!', subTitle: '', empty: "Please enter old password!" },
    "EMPPASS": { title: 'Invalid Password!', subTitle: '', empty: "Please enter password!" },
    "POSTAL": { title: 'Invalid Ponstal Code!', subTitle: '', empty: "Please enter postal code!" },
    "PUBNAME": { title: 'Invalid Name!', subTitle: '', empty: "Please enter pub name!" },
    "ODATE": { title: 'Invalid Date!', subTitle: '', empty: "Please enter opening date!" },
    "ABOUTPUB": { title: 'Invalid Description!', subTitle: '', empty: "Please enter a short description about your Micropub!" },
    "TWT": { title: 'Invalid Twitter!', subTitle: '', empty: "Please enter twitter account!" },
    "DATE": { title: 'Invalid Date!', subTitle: '', empty: "Please enter date!" },
    "TIME": { title: 'Invalid  Time!', subTitle: '', empty: "Please enter time!" },
    "DESC": { title: 'Invalid Description!', subTitle: ' ', empty: "Please enter something about event!" },
    "TITLE": { title: 'Invalid Title!', subTitle: '', empty: "Please enter a title for your update!" },
    "ABV": { title: 'Invalid ABV!', subTitle: '', empty: "Please enter ABV!" },
    "PRICE": { title: 'Invalid Price!', subTitle: ' ', empty: "Please enter price!" },
    "CMT": { title: 'Invalid Comment!', subTitle: ' ', empty: "Please enter  comment!" },
    "TEXT": { title: 'Invalid Text!', subTitle: ' ', empty: "Please enter  Text!" },
    "BRE": { title: 'Invalid Text!', subTitle: ' ', empty: "Please enter  Brewery!" },
    "AVL": { title: 'Invalid Availability!', subTitle: ' ', empty: "Please select  Availability!" },
    "SIZE": { title: 'Invalid Area!', subTitle: ' ', empty: "Please enter area of your pub in square meter!" },
    "HEADLINE": { title: 'Invalid Headline!', subTitle: "Please enter headline that should't be more than 3 words!", empty: "Please enter your headline!" },
    "SUB": { title: 'Invalid Subject!', subTitle: ' ', empty: "Please select a subject!" },
    "ISSUE": { title: 'Invalid Issue!', subTitle: ' ', empty: "Please enter the issue!" },
    "BNAME": { title: 'Invalid Name!', subTitle: ' ', empty: "Please enter a beer name!" },
    "CNAME": { title: 'Invalid Name!', subTitle: ' ', empty: "Please enter a cider name!" },
    "MATCH": { title: 'Invalid Password!', subTitle: 'New password & confirm password should be matched', empty: "Please enter confirm password!" },
    "ADIMG": { title: 'Select Image!', subTitle: 'Please select atlease one image!', empty: "Please select atlease one image!" },
    "CATE": { title: 'Select Category!', subTitle: ' ', empty: "Please select a category!" },
    "LOC": { title: 'Select Location!', subTitle: 'Please select location to use filters!', empty: "" },
    "PRICT": { title: 'Select Type!', subTitle: '', empty: "Please select price type!" },
    "FRM": { title: 'Invalid price!', subTitle: "The minimum price can't be higher than maximum price!", empty: "" },
    "CURR": { title: 'Invalid Currency!', subTitle: '', empty: "Please select a currency!" },
    "PHONECODE": { title: 'Phone Code Required!', subTitle: 'Please Enter Valid Phone Number', empty: "Please Select your country code" },
    "NIKNAME": { title: 'Invalid Name!', subTitle: 'Please enter valid nickname!', empty: "Please enter your nickname!" },
    "GENDR": { title: 'Select Gender!', subTitle: '', empty: "Please select your gender!" },
    "DOBTH": { title: 'Select DOB!', subTitle: '', empty: "Please select your DOB!" },
    "STIME": { title: 'Select Start Time!', subTitle: '', empty: "Please select start time!" },
    "ETIME": { title: 'Select End Time!', subTitle: '', empty: "Please select end time!" },
    "CONDITION": { title: 'Enter Conditions!', subTitle: '', empty: "Please enter participating persons number!" },
    "IMAGES": { title: 'Select Image!', subTitle: '', empty: "Please select atlest one image!" },
    "IMAGE": { title: 'Select Image!', subTitle: 'Please Select Profile Image', empty: "Please select your Profile image!" },
    "FILLP": { title: 'Invalid Input!', subTitle: 'Please fill all field properly', empty: "Please enter your Address!" },
    "GDESC": { title: 'Invalid Description!', subTitle: 'Please fill all field properly', empty: "Please write description for your group!" },
    "TECHP": { title: 'Technical Problem!', subTitle: 'Technical Problem, Please check your network connection!', empty: "" },
    "AGE": { title: 'Select Age!', subTitle: 'Please select your Age!', empty: "Please select your Age!" }
  },
  "ch": {
    "PHONE": { title: '电话无效!', subTitle: '请输入有效的电话号码', empty: "请输入您的手机号码" },
    "PHONECODE": { title: '需要电话代码!', subTitle: 'Please Enter Valid Phone Number', empty: "请选择您的国家代码" },
    "PASSW": { title: '无效的密码!', subTitle: '密码无效', empty: "请输入密码" },
    "NIKNAME": { title: 'Invalid Name!', subTitle: 'Please enter valid nickname!', empty: "Please enter your nickname!" },
    "GENDR": { title: 'Select Gender!', subTitle: '', empty: "Please select your gender!" },
    "DOBTH": { title: 'Select DOB!', subTitle: '', empty: "Please select your DOB!" },
    "DATE": { title: 'Select Date!', subTitle: '', empty: "Please select date!" },
    "TITLE": { title: 'Enter Title!', subTitle: '', empty: "Please enter title!" },
    "STIME": { title: 'Select Start Time!', subTitle: '', empty: "Please select start time!" },
    "ETIME": { title: 'Select End Time!', subTitle: '', empty: "Please select end time!" },
    "COST": { title: 'Enter Cost!', subTitle: '', empty: "Please enter cost!" },
    "CONDITION": { title: 'Enter Conditions!', subTitle: '', empty: "Please enter participating persons number!" },
    "IMAGES": { title: 'Select Image!', subTitle: '', empty: "Please select atlest one image!" },
    "ADDRS": { title: 'Enter Address!', subTitle: ' ', empty: "Please enter your Address!" },
    "CMT": { title: 'Enter Comment!', subTitle: ' ', empty: "Please enter your comment!" },
    "MSG": { title: 'Enter Message!', subTitle: ' ', empty: "Please enter message!" },
  }
}

const ok = {
  "en": "OK",
  "ch": "好"
}
const m = {
  fnameEmpty: { title: 'Mendetory field!', subTitle: 'Your Email is invalid please enter valid email' },
  lnameInvalid: { title: 'Password Reset Sent!', subTitle: 'A password reset email has been sent to: ' },
  lnameEmpty: { title: 'Password Reset Sent!', subTitle: 'A password reset email has been sent to: ' },

  profileUpdated: { title: 'Profile Updated!', subTitle: 'Your profile has been successfully updated!' },
  emailVerified: { title: 'Email Confirmed!', subTitle: 'Congratulations! Your email has been confirmed!' },
  emailVerificationSent: { title: 'Email Confirmation Sent!', subTitle: 'An email confirmation has been sent to: ' },
  accountDeleted: { title: 'Account Deleted!', subTitle: 'Your account has been successfully deleted.' },
  passwordChanged: { title: 'Password Changed!', subTitle: 'Your password has been successfully changed.' },
  invalidCredential: { title: 'Invalid Credential!', subTitle: 'An error occured logging in with this credential.' },
  operationNotAllowed: { title: 'Login Failed!', subTitle: 'Logging in with this provider is not allowed! Please contact support.' },
  userDisabled: { title: 'Account Disabled!', subTitle: 'Sorry! But this account has been suspended! Please contact support.' },
  userNotFound: { title: 'Account Not Found!', subTitle: 'Sorry, but an account with this credential could not be found.' },
  wrongPassword: { title: 'Incorrect Password!', subTitle: 'Sorry, but the password you have entered is incorrect.' },
  invalidEmail: { title: 'Invalid Email!', subTitle: 'Sorry, but you have entered an invalid email address.' },
  emailAlreadyInUse: { title: 'Email Not Available!', subTitle: 'Sorry, but this email is already in use.' },
  weakPassword: { title: 'Weak Password!', subTitle: 'Sorry, but you have entered a weak password.' },
  requiresRecentLogin: { title: 'Credential Expired!', subTitle: 'Sorry, but this credential has expired! Please login again.' },
  userMismatch: { title: 'User Mismatch!', subTitle: 'Sorry, but this credential is for another user!' },
  providerAlreadyLinked: { title: 'Already Linked!', subTitle: 'Sorry, but your account is already linked to this credential.' },
  credentialAlreadyInUse: { title: 'Credential Not Available!', subTitle: 'Sorry, but this credential is already used by another user.' },
  changeName: { title: 'Change Name Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your name.' },
  changeEmail: { title: 'Change Email Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your email address.' },
  changePhoto: { title: 'Change Photo Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your photo.' },
  passwordsDoNotMatch: { title: 'Change Password Failed!', subTitle: 'Sorry, but the passwords you entered do not match.' },
  updateProfile: { title: 'Update Profile Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your profile.' },
  usernameExists: { title: 'Username Already Exists!', subTitle: 'Sorry, but this username is already taken by another user.' },
  imageUpload: { title: 'Image Upload Failed!', subTitle: 'Sorry but we\'ve encountered an error uploading selected image.' }
};

const singleMessage = {
  "en": {
    "ACCOUNTCREATED": "Congratulation! Your account has been created successfully. Now you can access your account."
  },
  "ch": {
    "ACCOUNTCREATED": "恭喜！您的帐户已成功创建。现在您可以访问您的帐户了。"
  }

}
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertPresented: any;

  constructor(private alert: AlertController) {
    this.alertPresented = false

  }

  confirmationAlert(title: string,message:string){
  return new Promise(async (resolve)=> {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  })
}

show(title: string, message: string) {
  return new Promise(async(resolve)=> {
    let lang = this.getLang();
    let msessage = singleMessage[lang][message];
    if (!msessage) {
      msessage = message;
    }
let vm = this
if(!vm.alertPresented){
  vm.alertPresented = true;
  const alert = await this.alert.create({
    header: title,
    message: msessage,
    buttons: [{
      text: 'OK',
      handler:() => {
        vm.alertPresented = false
      }
    }]
  });
  await alert.present();
}

  })

}
getLang() {
  let m = localStorage.getItem("lang");
  if (m) {
    return m;
  }
  else {
    return "en";
  }
}

}
