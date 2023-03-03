import { Component , OnInit, Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrollReveal';


  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const revealElements = this.el.nativeElement.querySelectorAll("[data-reveal]");

    const scrollReveal = () => {
      for(let i = 0; i < revealElements.length; i++){
        const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;

        if(isElementsOnScreen){
          this.renderer.addClass(revealElements[i], "revealed");
        } else {
          this.renderer.removeClass(revealElements[i], "revealed");
        }
      }
    }

    window.addEventListener("scroll", scrollReveal);
    window.addEventListener("load", scrollReveal);
  }



}
