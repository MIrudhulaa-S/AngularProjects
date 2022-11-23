import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropDown';
  imagePath = '';

  place(value : string)
  {
    if(value=="1")
      this.imagePath = 'https://www.travelandleisure.com/thmb/Olylzl0cReD6hco2rg3GT-oGy0o=/1000x1000/smart/filters:no_upscale()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg'
    else if(value=="2")
      this.imagePath = 'https://cdn.vox-cdn.com/thumbor/qkj77ift2lGUEhgLmtf_VVuND1c=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16387869/shutterstock_240592135.jpg'
    else if(value=="3")
      this.imagePath = 'https://www.travelandleisure.com/thmb/emzSAJnpJydi8Fjaj0a7v3iI9TY=/1000x1000/smart/filters:no_upscale()/lofoten-islands-norway-aurora-borealis-northern-lights-NORWAYLIGHTS1017-20d82f5331f342099cdb418e95809dad.jpg'
    else if(value=="4")
      this.imagePath = 'https://i.natgeofe.com/k/e2ffc795-8b1f-4479-8c95-b6497e5ca4f2/canada-vancouver_square.jpg'
    else if(value=="5")
      this.imagePath = 'https://media.istockphoto.com/photos/aerial-view-of-london-and-the-tower-bridge-picture-id1265900812?k=20&m=1265900812&s=612x612&w=0&h=gDUeVw65Hd8w1Yk0pE9Fbj27vfO20CgSNI03mvx2UDM='
    else 
      this.imagePath = 'Invalid'
  }


  constructor() {

  }
  
}
