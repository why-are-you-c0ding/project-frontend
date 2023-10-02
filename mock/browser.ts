// src/mocks/browser.js
import { setupWorker } from "msw";
import { myPage } from "@mock/api/member/myPage";
import { auth } from "@mock/api/member/auth";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...auth, ...myPage);
