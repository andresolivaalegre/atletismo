import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mascota } from '../../servicios/mascotaService/mascota';
import { MascotasService } from '../../servicios/mascotaService/mascotas.service';
@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {
  public mascotas: Mascota[] = [
    new Mascota("Maggie", "Chihuahua", 20)
  ];

  constructor(private MascotasService: MascotasService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarMascota(mascota: Mascota) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${mascota.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.MascotasService
          .deleteMascota(mascota)
          .subscribe(() => {
            this.obtenerMascotas();
            this.snackBar.open('Mascota eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    return this.MascotasService
      .getMascotas()
      .subscribe((mascotas: Mascota[]) => this.mascotas = mascotas);
  }

}
