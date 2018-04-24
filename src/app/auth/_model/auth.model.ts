// API_POST_LOGIN

export interface Auth {
  status: {
      cause: string;
      code: string;
      description: string;
      message: string;
    };
    token: string;
    user: {
      activeStatus: string;
      authorities: [
        {
          activeStatus: string;
          createdBy:  string;
          createdTime:  string;
          id: number,
          ignoreList: [
            string
          ],
          name:  string;
          updatedBy: string;
          updatedTime:  string;
          users: [
            {}
          ]
        }
      ],
      createdBy:  string;
      createdTime:  string;
      email:  string;
      firstName: string;
      id: number;
      ignoreList: [
        string
      ],
      lastName:  string;
      updatedBy:  string;
      updatedTime: string;
      userName:  string;
    };
}


export interface Login {
  username: string;
  password: string;
}

export interface Logout {
  nextURL: string;
}
