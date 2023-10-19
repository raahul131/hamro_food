// const CLIENT_ID = "6caff600-b7ca-11eb-baa9-0242ac1200aa";
const CLIENT_ID = "abf8fc30-caa8-11eb-bfe4-0242ac1200de";

// let miniApp;
let hamromini_sdkjs =
  typeof window !== "undefined" ? window.hamromini_sdkjs : null;

export default function miniAppinitializer() {
  if (hamromini_sdkjs) {
    window.miniapp = new hamromini_sdkjs.MiniApp();
  }

  return new Promise(async (resolutionfunc, rejectionFunc) => {
    try {
      let userdetails = await window?.hamromini_sdkjs?.initialize(
        CLIENT_ID,
        window.miniapp
      );
      resolutionfunc(userdetails);
    } catch (e) {
      rejectionFunc(e);
      return null;
    }
  });
}
