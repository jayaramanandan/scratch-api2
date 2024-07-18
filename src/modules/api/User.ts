class User {
  private csrfToken:string = "";

  private async getCsrfToken(): Promise<void> {
    const response: Response = await fetch(
      "https://scratch.mit.edu/csrf_token",
    );
    const setCookieString:string = response.headers.getSetCookie()[1]

    // cuts out and finds the csrf cookie

    for(let i = "scratchcsrftoken=".length; i < setCookieString.length; i++) {
      if (setCookieString[i] == ";") {
        break
      } else {
        this.csrfToken += setCookieString[i]
      }
    }
  }

  private async authorisedFetch(url:string, info:RequestInit): Promise<Response> {
    const modifiedInfo:any = Object.assign({
      Referer:"https://scratch.mit.edu/",
      Cookie: "scratchcsrftoken=" + this.csrfToken + ";",
      "X-Csrftoken": this.csrfToken,
      "X-Requested-With": "XMLHttpRequest"
    }, info);

    return await fetch(url, modifiedInfo);
  }

  public async login(username: string, password: string): Promise<void> {
    await this.getCsrfToken()

    const response: Response = await this.authorisedFetch()
  
    const response: Response = await fetch(
      "https://scratch.mit.edu/accounts/login/",
      {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          useMessages: true,
        }),
        headers:{
          "Referer":"https://scratch.mit.edu/",
          "Cookie":"scratchcsrftoken=" + this.csrfToken + ";",
          "X-Csrftoken": this.csrfToken,
          "X-Requested-With":"XMLHttpRequest"
        }
      }
    );

    console.log(await response.text());
  }

  public async createProject(): Promise<void> {}

  public async getMessageCount(): Promise<number> {
    return 2;
  }

  public async getPersonalProjectsList() {}

  public async getStudioProjectsList() {}

  public async getLovesCount(): Promise<number> {
    return 2;
  }
}

export default User;
