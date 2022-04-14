import * as $ from 'jquery';
import {
  openSelectMobile,
  initTabs,
  initSelect,
  pageUp,
  toggleModal,
  OutsideClick,
  openModalCatalog,
  accordion,
  fillCatalogContent
} from '../vendors/js/general';
import '../scss/collection.scss';

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');
  toggleModal('.menu__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');
  toggleModal('.menuCatalog__city_btn', '.choiceCity', 'choiceCity__active', '.choiceCity__close');
  toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.select', '', 'data-state');
  OutsideClick('.menuCatalog');

  initTabs();
  initTabs('.tab__links', '.tab__content');
  initTabs('.horTab', '.variants__item');

  openSelectMobile();
  initSelect('.select__title', '.tab__content');

  fillCatalogContent();

  openModalCatalog('.menu__openCatalog');
  openModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();
});
