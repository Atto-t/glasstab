# GlassTab

A lightweight, futuristic glassmorphism New Tab extension for Google Chrome. Built with pure Vanilla JS and CSS for zero background memory overhead and minimal battery consumption.

## Features

- **Free-Canvas Modular Widgets**: Place, resize, duplicate (`⧉`), and rename widgets (up to 20 characters) anywhere on the screen.
- **Pinch-to-Move Safety Lock**: Widgets are locked during normal use. In Edit Mode (`⚙ EDIT`), hold or double-tap & hold the pinch/grab handle to move widgets without accidental drags.
- **Per-Widget Title Toggle**: Show or hide individual widget titles anytime in Edit Mode using the `T` button.
- **Built-in Widgets**:
  - **System Telemetry**: Real-time physical RAM usage (`chrome.system.memory`), battery status, and network latency (Ping).
  - **Scratchpad**: Auto-saved persistent notes with one-click clipboard copy.
  - **Checklist**: Persistent task list with custom neon checkboxes.
  - **Session Transfers**: Real-time download progress for the current browser session with instant `OPEN` and `FOLDER` actions.
  - **Ping Monitor**: Real-time latency check (updates every 4 seconds) for any custom URL or local server.
- **Multi-Engine & Voice Search**: Switch search engines on the fly or add custom query URLs. Includes Web Speech API voice input.
- **42+ Google Apps Hover Launcher**: Hover over the top-right `⠿` icon to access over 42 native Google services with customizable Favorites.
- **Persistent Storage & JSON Backup**: Notes, checklists, shortcuts, and layouts persist across PC reboots and can be exported/imported as JSON.

## Installation (Developer Mode)

1. Download or clone this repository to your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click **Load unpacked** in the top-left corner and select the `glasstab` folder.
5. Open a new tab (`Ctrl + T`).

## License & Disclaimer

This project is licensed under the [MIT License](./LICENSE).
**Disclaimer**: This software is provided "as is", without warranty of any kind. Use at your own risk.

---

## 日本語概要 (Overview in Japanese)

**GlassTab** は、近未来的なグラスモーフィズム（透明感）と超省メモリ・省バッテリー設計を両立した Google Chrome 用の新しいタブ拡張機能です。

### 主な特徴
- **自由配置＆サイズ変更可能なウィジェット**: `⚙ EDIT` モード中、各ウィジェットの「つまむ（ハンド）アイコン」を長押し（またはダブルタップ長押し）している間だけ自由に移動できます。
- **タイトル編集＆表示切替**: ウィジェット名は最大20文字まで変更可能で、`T` ボタンでタイトルの表示・非表示を個別に切り替えられます。
- **シャットダウンしても消えない永続保存**: メモ帳（Scratchpad）やチェックリスト（Checklist）、配置データは永続保存され、PCを再起動しても消えません（ダウンロード履歴のみセッション終了時にリセットされます）。

### インストール方法
1. このリポジトリをダウンロード（または `git clone`）します。
2. Chrome で `chrome://extensions/` を開きます。
3. 右上の **「デベロッパー モード」** をオンにします。
4. 左上の **「パッケージ化されていない拡張機能を読み込む」** をクリックし、`glasstab` フォルダを選択します。

### 免責事項・ライセンス
本ソフトウェアは [MIT License](./LICENSE) の下で公開されており、無保証（自己責任）で提供されます。