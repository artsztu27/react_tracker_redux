# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
## 目錄結構

```
|- src
    |- app
        |- store            儲存redux state
    |- components        共用模組
        |- addBar           新增貨物
        |- item             庫存貨物卡片
        |- itemList         庫存貨物清單
    |- containers        子頁面
        |- Body             貨物卡片清單
        |- Header           新增貨物卡片
    |- features             放redux features
        |- counter            計數
        |- tracker            redux 函式 貨物操作
    |- style                CSS 位置 , 所有程式的CSS 均置於此
|- package.json
|- jsconfig.json            compiler路徑設定 , 不需要寫相對的路徑可直接操作 src下的目錄

```