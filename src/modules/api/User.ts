class User {
  public async login(username: string, password: string): Promise<void> {
    /*
    const response: Response = await fetch(
      "https://scratch.mit.edu/accounts/login/",
      {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          useMessages: true,
        }),
      }
    );

    console.log(await request.json());*/

    await this.getCsrfToken();
  }

  private async getCsrfToken(): Promise<string> {
    const response: Response = await fetch(
      "https://scratch.mit.edu/accounts/login/",
      { credentials: "include" }
    );

    console.log(response.status);

    return "";
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
