import { Injectable } from "@angular/core";
import { PopupType } from "../types/popup.types";

Injectable()
export class PopupService {

  public showPopup(message: String, type: PopupType) {
    const popup: HTMLDivElement = this.createPopup(message, type);
    document.body.appendChild(popup);
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 2000)
  }

  private createPopup(message: String, type: PopupType) {
    const color = this.mapPopupTypeToColor(type);
    const popupWrapper: HTMLDivElement = document.createElement('div');
    const popupContent = `
      <div style="
        background-color: ${color};
        min-width: 256px;
        padding: 0 32px;
        height: 64px;
        box-shadow: 2px 2px 2px #252B31;
        position: fixed;
        bottom: 32px;
        transform: translateX(-50%);
        margin-left: 50%;
        border-radius: 6px;">
        <h5 style="width: 100%; text-align: center; line-height: 64px;">${message}</h5>
      </div>
    `;
    popupWrapper.innerHTML = popupContent;
    return popupWrapper;
  }

  private mapPopupTypeToColor(type: PopupType) {
    switch (type) {
      case 'info':
        return '#F093A2';
      case 'error':
        return '#A50104';
      case 'success':
        return '#A7D9CE'
    }
  }
}
