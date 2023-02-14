const DEV = true;

class Request {
  apiUrl: string;

  authToken = '';

  requestTimeoutInMs = 120000;

  delayInMs = 100 + Math.round(Math.random() * 1000);

  constructor (apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  requestTimeout (url: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(`Request timed out. url:${url}`));
      }, this.requestTimeoutInMs);
    });
  }

  async sendRequest (
    url: string,
    body: unknown,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  ) {
    const request = new Promise<any>(async (resolve, reject) => {
      try {
        let calledUrl = null;

        if (url.includes('mocky')) {
          calledUrl = `${url}`;
        } else {
          calledUrl = `${this.apiUrl}${url}`;
        }

        console.log({ calledUrl });
        

        if (DEV) await this.delay();

        const reqBody = {
          method,
          headers: this.getRequestHeaders(),
        } as any;
        if (body) reqBody.body = JSON.stringify(body);

        let response;

        if (method === 'GET') {
          response = await fetch(`${calledUrl}`, { method, headers: this.getRequestHeaders() });
        } else response = await fetch(`${calledUrl}`, reqBody);

        resolve(await Request.responseParser(response, reqBody));
      } catch (e) {
        console.log('request API error: ', e);
        reject(e);
      }
    });

    return Promise.race([this.requestTimeout(url), request]);
  }

  async delay () {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, this.delayInMs);
    });
  }

  async get (url: string, queryParams?: object) {
    const paramsString = Request.objToQueryString(queryParams || {});
    return this.sendRequest(`${url}?${paramsString}`, {}, 'GET');
  }

  async post (url: string, obj: unknown) {
    console.log(url);
    
    return this.sendRequest(url, obj, 'POST');
  }

  async put (url: string, obj: unknown) {
    return this.sendRequest(url, obj, 'PUT');
  }

  async patch (url: string, obj: unknown) {
    return this.sendRequest(url, obj, 'PATCH');
  }

  async delete (url: string, obj: unknown) {
    return this.sendRequest(url, obj, 'DELETE');
  }

  isAuthenticated(): boolean {
    return this.authToken !== '';
  }

  static async responseParser (response: any, reqBody: any) {
    // const { status } = response;

    let jsonResponse: any = {};
    let textResponse = '';
    const contentType = response.headers.get('Content-Type');
    if (contentType) {
      if (contentType.includes('application/json')) {
        jsonResponse = await response.json();
      } else if (contentType.includes('text')) {
        textResponse = await response.text();
      }
    }

    // console logging
    if (DEV) {
      console.groupCollapsed(`request to: ${response.url}`);
      console.log('Request status: ', response.status);

      console.groupCollapsed('Request');
      console.log('Request: ', reqBody);
      console.groupEnd();

      console.groupCollapsed('Response');
      console.log('Response: ', response);
      console.groupEnd();

      console.groupCollapsed('Response.data');
      console.log('', textResponse || jsonResponse);
      console.groupEnd();
      console.groupEnd();
    }

    return jsonResponse;
  }

  getRequestHeaders () {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authToken}`,
    };
  }

  static objToQueryString (obj: object) {
    const keyValuePairs = [];
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      const param = Object.keys(obj)[i];
      const value = Object.values(obj)[i];

      if (value) keyValuePairs.push(`${encodeURIComponent(param)}=${encodeURIComponent(value)}`);
    }
    return keyValuePairs.join('&');
  }
}

// initialize the instance here to ensure it's a singleton that is shared by all importing files
export const request = new Request('http://192.168.29.44:8000');
