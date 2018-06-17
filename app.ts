
import * as http from 'http';
import * as fs from 'fs';
import {MyApp} from './MyApp'
let app = new MyApp();
app.exec();
let filePath = "";

class Main {
  constructor() {
    // httpサーバーを設定する
    const server: http.Server = http.createServer(
        (request: http.IncomingMessage, response: http.ServerResponse) =>
            this.requestHandler(request, response));
    // サーバーを起動してリクエストを待ち受け状態にする
    server.listen('5000');
  }
 
  /*
  * サーバーにリクエストがあった時に実行される関数
  */
private requestHandler(request: http.IncomingMessage,
	response: http.ServerResponse): void {
		if (request.url == '/') {
			filePath = './index.html';
		} else {
			filePath = './'+request.url;
		}
		console.log(request.url);
		fs.readFile(filePath, (err, data) => {
			response.end(data);
		})
	}
}
 
const main = new Main();
