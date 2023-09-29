// src/mocks/browser.js
import { setupWorker } from "msw";
import { myPage } from "@mock/api/member/myPage";
import { signUp } from "@mock/api/member/signUp";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...signUp, ...myPage);
