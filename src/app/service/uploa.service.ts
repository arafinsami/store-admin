
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, UPLOAD_FILE_URL, UPDATE_UPLOAD_FILE_URL } from '../constant/base-url';

@Injectable()
export class UploadService {

    filesToUpload: Array<File>;

    constructor(private http: HttpClient) {
        this.filesToUpload = [];
    }

    upload(bookId: number) {
        this.makeFileRequest(BASE_URL + UPLOAD_FILE_URL + bookId, [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
        });
    }

    modify(bookId: number) {
        console.log(this.filesToUpload);
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest(BASE_URL + UPDATE_UPLOAD_FILE_URL + bookId, [], this.filesToUpload).then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        }
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {

        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log("image uploaded successfully!");
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
            xhr.send(formData);
        });
    }
}