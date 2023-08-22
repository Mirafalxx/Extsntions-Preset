import { test } from "../modules/api";
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  test();
  sendResponse("Front the background Script-123");
});
