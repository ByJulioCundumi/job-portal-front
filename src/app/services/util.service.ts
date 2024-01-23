import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  recortarTexto = (texto: string, cantidadPalabras: number) => {
    const palabras = texto.split(' ');
    const textoRecortado = palabras.slice(0, cantidadPalabras).join(' ');
    return textoRecortado;
  }
}
