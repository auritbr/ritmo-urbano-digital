import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
  }
}

export function VLibrasWidget() {
  useEffect(() => {
    const initialize = () => {
      if (!window.VLibras || document.documentElement.dataset["vlibrasReady"]) return;
      new window.VLibras.Widget("https://vlibras.gov.br/app");
      document.documentElement.dataset["vlibrasReady"] = "true";
    };
    const existing = document.querySelector<HTMLScriptElement>('script[data-vlibras-plugin="true"]');
    if (existing) {
      existing.addEventListener("load", initialize);
      initialize();
      return () => existing.removeEventListener("load", initialize);
    }
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.dataset["vlibrasPlugin"] = "true";
    script.addEventListener("load", initialize);
    document.body.appendChild(script);
    return () => script.removeEventListener("load", initialize);
  }, []);

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active" />
      <div vw-plugin-wrapper="true"><div className="vw-plugin-top-wrapper" /></div>
    </div>
  );
}

declare module "react" {
  interface HTMLAttributes<T> {
    vw?: string;
    "vw-access-button"?: string;
    "vw-plugin-wrapper"?: string;
  }
}