import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CoachService } from 'src/app/services/coach.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public players: string[] = [];

  constructor(private coachService: CoachService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public getPlayers(): void {
    this.coachService.getAllPlayers().subscribe(
      (res) => {
        this.players = res;
      },
      (error) => {
        if (error.status === 404) {
          this.toastr.error("Something went wrong");
        } else if (error.status === 401 || error.status === 403) {
          this.toastr.error("You have't Authorize for this service")
        } else {
          this.toastr.error("Something went wrong please try later")
        }
      }
    );
  }



}
