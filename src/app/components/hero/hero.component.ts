import { Component, ElementRef, ViewChild } from '@angular/core';
import Globe from 'globe.gl';
import gsap from 'gsap';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  @ViewChild('globeContainer', { static: false }) globeContainer!: ElementRef;
  private world: any;
  private resizeObserver: ResizeObserver | null = null;

  ngAfterViewInit(): void {
    this.initGlobe();
    this.initAnimations();
  }


  private initGlobe() {
    const globeElement = this.globeContainer.nativeElement;


    this.world = new Globe(globeElement)
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundColor('rgba(0, 0, 0, 0)');

    this.updateGlobeSize();

    this.resizeObserver = new ResizeObserver(() => {
      this.updateGlobeSize();
    });
    this.resizeObserver.observe(globeElement);

    this.world.controls().autoRotate = true;
    this.world.controls().autoRotateSpeed = 0.45;
    this.world.controls().enableZoom = false;
    this.world.controls().enablePan = false;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    this.world.scene().add(light);

    this.updateCameraPosition();

    this.addClouds();

    const animate = () => {
      requestAnimationFrame(animate);
      this.world.renderer().render(this.world.scene(), this.world.camera());
    };
    animate();
  }

  private updateGlobeSize() {
    if (!this.world) return;

    const container = this.globeContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.world.width(width);
    this.world.height(height);
  }

  private updateCameraPosition() {
    if (!this.world) return;

    const isMobile = window.innerWidth < 1024;
    const cameraDistance = isMobile ? 400 : 350;
    this.world.camera().position.z = cameraDistance;
  }

  private addClouds() {
    const CLOUDS_IMG_URL = 'assets/clouds.png';
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006;

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(this.world.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      this.world.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }

  private initAnimations() {



    gsap.fromTo('.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 0.4, duration: 0.8, ease: 'power4.out' }
    );
    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 0.4, duration: 0.8, ease: 'power4.out' }
    );
    gsap.fromTo('.hero-cta',
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, delay: 0.4, duration: 0.8, ease: 'power4.out' }
    );



   
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
}