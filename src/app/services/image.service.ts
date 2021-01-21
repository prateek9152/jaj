import { Injectable } from '@angular/core';
import {Camera,CameraOptions} from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';  
import { PhotoService } from './photo.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import {File} from '@ionic-native/file/ngx';
import {Storage} from '@ionic/storage';

const PHOTO_STORAGE:string = "photos";

@Injectable({
 
  providedIn: 'root'
})
export class ImageService {
  public photos: Photo[] = [];

  constructor(public http:HttpClient,
    public camera:Camera,
    public alertCtrl:AlertController, public photoService:PhotoService,private storage:Storage, private file:File,private webview:WebView) { }
  
    getimageByCamera(){
    return new Promise((resolve,reject)=> {
      if(Camera['installed']()){
        this.camera.getPicture({
          quality:100,
          destinationType:this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          encodingType: this.camera.EncodingType.JPEG,
          targetHeight: 600,
          targetWidth: 600,
          saveToPhotoAlbum:false,
          correctOrientation:true
        }).then((data) => {
          resolve('data:image/jpeg;base64,' +data);
        }, (err) => {
            reject('Unable to take Photo:' +err);
        })
      }
      else{
        var self = this;
        var file = document.createElement("INPUT");
        file.setAttribute("type","file");
        file.style.height = "0px";
        file.style.visibility = "hidden";
        file.click();
        file.onchange = function (ev: any){
          self.getWebImage(ev.target.files[0].then((res: any) => {
            resolve(res);
          }))
        }
      }
    });
  }
   
  async getImage(){
      return new Promise(async (resolve,reject) => {
        if(Camera['installed']()){
          const alert = await this.alertCtrl.create({
            header: 'Set Profile Pic',
            message: 'Do you want to take a photo or choose from your photo gallery',
            buttons: [
              {text: 'Cancel',handler: data => {}},
              {text: 'Choose from Gallery',handler:() => {
                this.camera.getPicture({
                  quality: 100,
                  destinationType: this.camera.DestinationType.DATA_URL,
                  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                  encodingType:this.camera.EncodingType.JPEG,
                  targetHeight: 600,
                  targetWidth: 600,
                  saveToPhotoAlbum: false,
                  correctOrientation:true,

                }).then((data)=> {
                  resolve('data:image/jpeg;base64' +data);
                },(err) => {
                  reject('Unable to take Photo:' +err);
                })
              }
              }, {
                text: 'Take Photo',
                handler: () => {
                 this.takePicture();
                }
              }
            ]
          });
          await alert.present();
        } else{
          var self = this;
          var file = document.createElement("INPUT");
          file.setAttribute("type","file");
          file.style.height = "0px";
          file.style.visibility = "hidden";
          file.click();
          file.onchange = function(ev:any){
            self.getWebImage(ev.target.files[0]).then((res: any)=> {
              resolve(res);
            });
          }
        }
      });
    }
    async takePicture(){
      const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      }
      const capturedTempImage = await this.camera.getPicture(options);
      const savedImageFile = await this.savePicture(capturedTempImage);
      this.photos.unshift({
          filepath: savedImageFile,
          file: this.webview.convertFileSrc(savedImageFile)
      });
      this.storage.set(PHOTO_STORAGE,this.photos);
}
async savePicture(cameraImage){
  const tempFileName = cameraImage.substr(cameraImage.lastIndexOf('/') +1);
  const tempBaseFilesystemPath = cameraImage.substr(0,cameraImage.lastIndexOf('/') +1);
  const newBaseFilesystemPath = this.file.dataDirectory;
  await this.file.copyFile(tempBaseFilesystemPath,tempFileName,newBaseFilesystemPath,tempFileName);
  return newBaseFilesystemPath + tempFileName;
}

    getGalleryimages(){
      return new Promise((resolve,reject)=> {
        if(Camera['installed']()){
          this.camera.getPicture({
            quality: 100,
            destinationType:this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 600,
            targetWidth: 600, 
            saveToPhotoAlbum:false,
            correctOrientation: true
          }).then((data)=> {
            resolve('data:image/jpeg;base64,'+data);
          },(err) => {
            reject('Unable to take Photo: ' +err);
          })
        }
        else{
          var self = this;
          var file = document.createElement("INPUT");
          file.setAttribute("type","file");
          file.style.height="0px";
          file.style.visibility="hidden";
          file.click();
          file.onchange = function(ev: any){
            self.getWebImage(ev.target.files[0]).then((res: any) => {
              resolve(res);
            });
          }
        }
      });
    }

    b64toBlob(b64Data,contentType){
      contentType = contentType || '';
      var sliceSize = 512;
      var byteCharacters = atob(b64Data);
      var byteArrays = [];
      for(var offset = 0; offset < byteCharacters.length; offset += sliceSize ){
        var slice = byteCharacters.slice(offset,offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for(var i =0; i < slice.length; i++ ){
          byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      var blob = new Blob(byteArrays,{type: contentType});
      return blob;
    }

    imgURItoBlob(dataURI){
      return new Promise((resolve,reject)=> {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        console.log(mimeString);
        var array = [];
        for(var i = 0; i < binary.length; i++){
          array.push(binary.charCodeAt(i));
        }
        resolve(new Blob([new Uint8Array(array)],{
          type: mimeString
        }));
        
      });
    }

    getWebImage(imagefile:any){
      return new Promise((resolve,reject) => {
       let reader = new FileReader();
       reader.onload = (readerEvent) => {
         let imageData = (readerEvent.target as any).result;
         resolve(imageData);
         console.log(imageData);
         
       };
       reader.readAsDataURL(imagefile); 
      });
    }

    imgURLtoURI(imagefile: any){
      return new Promise((resolve,reject)=> {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          var dataURL;
          canvas.height = img.height;
          canvas.width = img.width;
          ctx.drawImage(img,0,0);
          dataURL = canvas.toDataURL();
          resolve(dataURL);
          canvas = null;

        };
        img.src = imagefile;
      })
    }

    imgURItoBlob1(dataURI){
      var binary = atob(dataURI.split(',')[1]);
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var array = [];
      for(var i = 0; i < binary.length; i++){
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)],{
        type: mimeString
      });
    }

    generateImageName(name){
      let ext = this.getImgExt(name);
      return new Date().getTime() + '.' + ext;
    }

    getImgExt(name){
      return name.substr(name.lastIndexOf('.')+1);
    }
    
    getImageName(img){
      let k = img.type;
      let imgType = k.substring(k.lastIndexOf("/")+1);
      return new Date().getTime() + '.' +imgType; 
    }
}
class Photo {
  filepath: string;
  file:string;
}
