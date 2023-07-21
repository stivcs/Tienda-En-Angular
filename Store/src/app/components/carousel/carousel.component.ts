// Importaciones necesarias para el componente y su funcionalidad.
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlideInterface } from './types/slide.interface';

// Definición del componente y sus metadatos.
@Component({
  selector: 'image-slider',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  // Propiedad para recibir los slides a mostrar, se utiliza el decorador @Input() para que sea accesible desde fuera del componente.
  @Input() slides: SlideInterface[] = [
    { url: '/assets/img/banner_camisetas.jpg', title: 'boat' },
    { url: '/assets/img/essencials.jpg', title: 'jeans' },
    { url: '/assets/img/foto_jeans.jpg', title: 'aja' }
  ];
  // Propiedad para almacenar el índice del slide actual.
  currentIndex: number = 0;
  // Identificador del timer para controlar la transición automática entre slides.
  timeoutId?: number;

  // Método que se ejecuta al inicializar el componente.
  ngOnInit(): void {
    this.resetTimer(); // Inicia el timer para pasar automáticamente a la siguiente imagen.
  }

  // Método que se ejecuta al destruir el componente.
  ngOnDestroy() { // Limpia el timer al destruir el componente para evitar problemas de memoria.
    window.clearTimeout(this.timeoutId);
  }

  // Método para reiniciar el timer y avanzar a la siguiente imagen.
  resetTimer() {// Si existe un timer activo, lo limpia para evitar conflictos.
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    // Configura un nuevo timer para cambiar a la siguiente imagen después de 3000 ms (3 segundos).
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  // Método para avanzar al slide anterior.
  goToPrevious(): void {
    // Comprueba si el slide actual es el primero.
    const isFirstSlide = this.currentIndex === 0;
    // Calcula el índice del slide anterior teniendo en cuenta si el actual es el primero.
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    // Reinicia el timer y actualiza el índice del slide actual.
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  // Método para avanzar al siguiente slide.
  goToNext(): void { // Comprueba si el slide actual es el último.
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    // Calcula el índice del siguiente slide teniendo en cuenta si el actual es el último.
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    // Reinicia el timer y actualiza el índice del slide actual.
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  // Método para ir a un slide específico a través de su índice.
  goToSlide(slideIndex: number): void {
    // Reinicia el timer y actualiza el índice del slide actual.
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  // Método para obtener la URL del slide actual para usarla en la visualización del fondo.
  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}
