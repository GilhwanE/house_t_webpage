const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  // items: 3,
  // slideBy: 'page',
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
});

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  controls: false,
  controlsContainer: '.user-gallery.is-mobile .user-gallery-controls',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  gutter: 4,
  loop: false,
  edgePadding: 15,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
});

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  gutter: 6,
  loop: false,
  edgePadding: 75,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
});
