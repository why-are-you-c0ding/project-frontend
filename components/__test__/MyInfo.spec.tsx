import { BrowserRouter } from "react-router-dom";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";
import MyPage from "@pages/MyPage";

describe("제스트 설정 테스트", () => {
  beforeEach(() => {
    const routes = [
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/mypage"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);
  });
  test("제스트가 초기 설정 테스트", () => {});
});
