import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() isModal: boolean;
  constructor(private faio: FingerprintAIO, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('i am modal:', this.isModal);
  }

  login(){
    this.faio.show({
      title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
      subtitle: 'Coolest Plugin ever' // (Android Only) | optional | Default: null
      
    }).then (() =>{
      if (this.isModal) {
        this.modalCtrl.dismiss();
      } else {
        
      this.router.navigateByUrl('/home');
      }

    })
    .catch ((error : any) => {
      console.log('err:' , error);
    });
    

  }

}
