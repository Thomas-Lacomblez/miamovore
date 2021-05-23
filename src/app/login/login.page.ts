import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Client } from '../class/personnes/client';
import { AuthConstants } from '../config/auth-constant';
import { AuthService } from '../services/auth/auth.service';
import { StorageService } from '../services/storage/storage.service';
import { ToastService } from '../services/toast/toast.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    "LoginUser" : "do",
    "MdpUser" : "123"
  }

  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private authService: AuthService,
    private storageService : StorageService,
    private toastService : ToastService
  ) { }

  ngOnInit() {

    /*let testClient = new Client("lacomblez","thomas","80 bis rue de Chartres","0634779411","lacomblez.thomas@gmail.com","Le perray en yveline","Yvelines");

    console.log("testClient : " + testClient.$nom + " testClient : " + testClient.$prenom + " testClient : " + testClient.$adresse + " testClient : " + testClient.$telephone + " testClient : " + testClient.$email );*/
  }

  validateInput() {
    let username = this.postData.LoginUser.trim();
    let password = this.postData.MdpUser.trim();

    return ( this.postData.LoginUser && this.postData.MdpUser && username.length > 0 && password.length > 0);
  }

  loginAction() {
    // Enabling Side Menu
    if( this.validateInput() ) {

      this.authService.login(this.postData).subscribe(async (res: any) => {
        
        if(res) {
          console.log(res);
          console.log(res.nom);
          console.log(res.prenom);
          this.storageService.store(AuthConstants.AUTH, res )
                              .then(result =>this.toastService.presentToast("Connection réussi !") )
                              .catch(error => this.toastService.presentToast("Une erreur à empecher la connection, veuillez ré-essayer"));
          let storageData : Client = await this.storageService.get(AuthConstants.AUTH);
          console.log("storageData.$nom : " + storageData.$nom );
          console.log("storageData.$prenom : " + storageData.$prenom);
          console.log("storageData.nom : " + storageData.nom );
          console.log("storageData.prenom : " + storageData.prenom);
          this.util.setMenuState(true);
          this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
        }
      },
      (error :any)  =>{
        
        console.log("error : " + JSON.stringify(error) );
        switch(error.status) {
          case 404:
            this.toastService.presentToast("Identifiant ou mot de passe incorrecte.");
            break;
          default: 
            this.toastService.presentToast("Impossible de vous connectez, verifier votre connection internet et ré-essayer.");
            break
        }
      }
      );

      
    } else {
      this.toastService.presentToast("Veuillez entrez vos informations de connexion s'il vous plait.");
    }
  }

}
