import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public title: string = 'bacancy-angular-training';

  public username: string = "jenish";

  public user = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": "2000-12-25",
    "image": "https://robohash.org/Terry.png?set=set4",
    "bloodGroup": "A-",
    "height": 189,
    "weight": 75.4,
    "eyeColor": "Green",
    "domain": "slashdot.org",
    "ip": "117.29.86.254",
    "macAddress": "13:69:BA:56:A3:74",
    "university": "Capitol University",
    "ein": "20-9487066",
    "ssn": "661-64-2976",
    "userAgent": "Mozilla/5.0 ..."
  };

  public info: boolean = false;
  public button: string = "Hide";

  public toggleEffect(): void {
    this.info = !this.info;
    this.button = this.info ? "Show" : "Hide";
  }

}
