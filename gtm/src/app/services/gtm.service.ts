import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

@Injectable({
  providedIn: 'root',
})

/**
 * Envia um evento personalizado para o Google Tag Manager
 * @param event Objeto com os dados do evento (ex: { event: 'form_submit', formName: 'contato' })
 */
export class GtmService {
  constructor() {
    window.dataLayer = window.dataLayer || [];
  }
  public pushEvent(event: Object): void {
    try {
      window.dataLayer.push(event);
      console.log('[GTM] Evento enviado: ', event);
    } catch (error) {
      console.error('[GTM] Erro ao enviar evento: ', error);
    }
  }
}
