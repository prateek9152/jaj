import { Injectable } from '@angular/core';
import {Camera,CameraOptions} from '@ionic-native/camera/ngx';
import {File} from '@ionic-native/file/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {Storage} from '@ionic/storage';
const PHOTO_STORAGE:string = "photos";
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
public photos: Photo[] = [];
  constructor(private camera:Camera,private storage:Storage, private file:File,private webview:WebView) { }
    async loadSave(){
        this.storage.get(PHOTO_STORAGE).then((photos) => {
              this.photos = photos || [];  
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
    async deletePicture(photo,position){
      this.photos.splice(position,1);
      await this.storage.set(PHOTO_STORAGE,this.photos);
        const photoToDelete = photo.filepath;
        const baseFilesystemPath = photoToDelete.substr(0,photoToDelete.lastIndexOf('/') + 1);
        const filename = photoToDelete.substr(photoToDelete.lastIndexOf('/') + 1);
        await this.file.removeFile(baseFilesystemPath,filename);
    }
    

}

class Photo {
    filepath: string;
    file:string;
}