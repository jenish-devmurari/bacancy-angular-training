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
    this.coachService.getAllPlayers().subscribe(
      (players: string[]) => {
        this.players = players;
      },
      (error) => {
        this.toastr.error(error, "Error fetching players");
      }
    );
  }

  appointCaptain(playerEmail: string): void {
    this.coachService.appointCaptain(playerEmail).subscribe((res) => {
      this.toastr.success(res, 'Success', {
      });
    }, (error) => {
      this.toastr.error(error, 'error', {
      });
    });
  }

}
