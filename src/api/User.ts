class User {
  private csrfToken: string = "";
  private sessionId: string = "";

  private async getCsrfToken(): Promise<void> {
    const response: Response = await fetch(
      "https://scratch.mit.edu/csrf_token"
    );
    const setCookieString: string = response.headers.getSetCookie()[1];

    // cuts out and finds the csrf cookie

    for (let i = "scratchcsrftoken=".length; i < setCookieString.length; i++) {
      if (setCookieString[i] == ";") {
        break;
      } else {
        this.csrfToken += setCookieString[i];
      }
    }
  }

  private async authorisedFetch(
    url: string,
    info: RequestInit,
    errorMessage: string
  ): Promise<Response> {
    const modifiedInfo: any = Object.assign(
      {
        headers: {
          Referer: "https://scratch.mit.edu/",
          Cookie: `scratchsessionsid="${this.sessionId}";scratchcsrftoken="${this.csrfToken}";`,
          "X-Csrftoken": this.csrfToken,
          "X-Requested-With": "XMLHttpRequest",
        },
      },
      info
    );

    const response: Response = await fetch(url, modifiedInfo);

    console.log(modifiedInfo);

    if (!response.ok) {
      throw new Error(`${errorMessage}:\n ${response.statusText}\n\n`);
    }

    return response;
  }

  private async extractSessionId(setCookieString: string) {
    this.sessionId = setCookieString.substring(
      'scratchsessionsid="'.length,
      'scratchsessionsid="'.length + 364
    );
    // 364 is the exact length of session id
  }

  public async login(username: string, password: string): Promise<void> {
    await this.getCsrfToken(); // fetches csrf token cookie

    const loginResponse: Response = await this.authorisedFetch(
      "https://scratch.mit.edu/accounts/login/",
      {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          useMessages: true,
        }),
      },
      "There was a problem logging in"
    );

    await this.extractSessionId(loginResponse.headers.getSetCookie()[0]);
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

  public async saveProject(projectId: number, projectJson: any) {
    const response: Response = await this.authorisedFetch(
      "https://projects.scratch.mit.edu/" + projectId,
      {
        method: "PUT",
        body: JSON.stringify(projectJson),
      },
      "There was a problem saving the project"
    );

    console.log(await response.headers);
  }
}

export default User;
