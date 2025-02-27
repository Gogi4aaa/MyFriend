import { useEffect, useRef } from "react";

const AnimalSoundGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const loadingBarRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const fullscreenButtonRef = useRef<HTMLDivElement | null>(null);
  const warningBannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unityShowBanner = (msg: string, type: string) => {
      const warningBanner = warningBannerRef.current;
      if (!warningBanner) return;
      const div = document.createElement("div");
      div.innerHTML = msg;
      if (type === "error") div.style.background = "red";
      else {
        if (type === "warning") div.style.background = "yellow";
        setTimeout(() => {
          warningBanner.removeChild(div);
        }, 5000);
      }
      div.style.padding = "10px";
      warningBanner.appendChild(div);
    };

    const buildUrl = "Build";
    const loaderUrl = `${buildUrl}/AnimalSoundGame.loader.js`;
    const config = {
      dataUrl: `${buildUrl}/AnimalSoundGame.data.br`,
      frameworkUrl: `${buildUrl}/AnimalSoundGame.framework.js.br`,
      codeUrl: `${buildUrl}/AnimalSoundGame.wasm.br`,
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "AnimalSoundGame",
      productVersion: "1.0",
      showBanner: unityShowBanner,
    };

    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      if ((window as any).createUnityInstance) {
        (window as any).createUnityInstance(canvasRef.current, config, (progress: number) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${100 * progress}%`;
          }
        }).then((unityInstance: any) => {
          if (loadingBarRef.current) loadingBarRef.current.style.display = "none";
          if (fullscreenButtonRef.current) {
            fullscreenButtonRef.current.onclick = () => {
              unityInstance.SetFullscreen(1);
            };
          }
        }).catch((message: string) => {
          alert(message);
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="unity-container" className="unity-desktop">
      <canvas id="unity-canvas" ref={canvasRef} width={960} height={600} tabIndex={-1}></canvas>
      <div id="unity-loading-bar" ref={loadingBarRef}>
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full" ref={progressBarRef}></div>
        </div>
      </div>
      <div id="unity-warning" ref={warningBannerRef}></div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button" ref={fullscreenButtonRef}></div>
        <div id="unity-build-title">AnimalSoundGame</div>
      </div>
    </div>
  );
};

export default AnimalSoundGame;
