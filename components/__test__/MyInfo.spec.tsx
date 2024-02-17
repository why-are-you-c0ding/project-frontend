// import "whatwg-fetch";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";
import MyPage from "@pages/MyPage";
import store from "@redux/store";
import { Provider } from "react-redux";

describe("제스트 설정 테스트", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});

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

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("제스트가 초기 설정 테스트", () => {
    console.log("됐나");
  });
});
